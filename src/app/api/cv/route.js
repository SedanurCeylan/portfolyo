import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getFirebaseUser, getStorageBucket } from "@/lib/firebaseRest";

const storageUrl = () => `https://firebasestorage.googleapis.com/v0/b/${getStorageBucket()}/o/cv%2Fsedanur-ceylan-cv.pdf`;

export async function GET() {
  const response = await fetch(`${storageUrl()}?alt=media`, { cache: "no-store" });
  if (!response.ok) return NextResponse.redirect(new URL("/cv.pdf", process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"));
  return new NextResponse(response.body, { headers: { "Content-Type": "application/pdf", "Content-Disposition": "inline; filename=sedanur-ceylan-cv.pdf", "Cache-Control": "public, max-age=300" } });
}

export async function POST(request) {
  const idToken = (await cookies()).get("portfolio-admin-token")?.value;
  if (!await getFirebaseUser(idToken)) return NextResponse.json({ error: "Yetkisiz işlem." }, { status: 401 });
  const data = await request.formData(); const file = data.get("cv");
  if (!(file instanceof File) || file.type !== "application/pdf") return NextResponse.json({ error: "Yalnızca PDF dosyası yükleyebilirsin." }, { status: 400 });
  if (file.size > 8 * 1024 * 1024) return NextResponse.json({ error: "CV dosyası en fazla 8 MB olabilir." }, { status: 400 });
  const response = await fetch(`${storageUrl()}?uploadType=media`, { method: "POST", headers: { Authorization: `Firebase ${idToken}`, "Content-Type": "application/pdf" }, body: file, cache: "no-store" });
  if (!response.ok) return NextResponse.json({ error: "CV Firebase Storage'a yüklenemedi." }, { status: 500 });
  return NextResponse.json({ ok: true });
}
