import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getFirebaseUser, getStorageBucket } from "@/lib/firebaseRest";

const objectUrl = (path) => `https://firebasestorage.googleapis.com/v0/b/${getStorageBucket()}/o/${encodeURIComponent(path)}`;
export async function GET(request) {
  const path = new URL(request.url).searchParams.get("path");
  if (!path?.startsWith("media/")) return NextResponse.json({ error: "Geçersiz dosya." }, { status: 400 });
  const response = await fetch(`${objectUrl(path)}?alt=media`, { cache: "no-store" });
  if (!response.ok) return NextResponse.json({ error: "Görsel bulunamadı." }, { status: 404 });
  return new NextResponse(response.body, { headers: { "Content-Type": response.headers.get("content-type") || "image/jpeg", "Cache-Control": "public, max-age=300" } });
}
export async function POST(request) {
  const idToken = (await cookies()).get("portfolio-admin-token")?.value;
  if (!await getFirebaseUser(idToken)) return NextResponse.json({ error: "Yetkisiz işlem." }, { status: 401 });
  const data = await request.formData(); const file = data.get("image");
  if (!(file instanceof File) || !file.type.startsWith("image/")) return NextResponse.json({ error: "Bir görsel dosyası seçmelisin." }, { status: 400 });
  if (file.size > 8 * 1024 * 1024) return NextResponse.json({ error: "Görsel en fazla 8 MB olabilir." }, { status: 400 });
  const extension = file.name.split(".").pop()?.replace(/[^a-z0-9]/gi, "") || "jpg"; const path = `media/${Date.now()}-${crypto.randomUUID()}.${extension}`;
  const response = await fetch(`${objectUrl(path)}?uploadType=media`, { method: "POST", headers: { Authorization: `Firebase ${idToken}`, "Content-Type": file.type }, body: file, cache: "no-store" });
  if (!response.ok) return NextResponse.json({ error: "Görsel Firebase Storage'a yüklenemedi." }, { status: 500 });
  return NextResponse.json({ path: `/api/media?path=${encodeURIComponent(path)}` });
}
