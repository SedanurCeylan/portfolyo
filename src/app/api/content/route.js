import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { defaultSiteContent } from "@/data/siteContent";
import { getFirebaseUser, getFirestoreDocumentUrl, hasFirebaseConfig } from "@/lib/firebaseRest";

export async function GET() {
  if (!hasFirebaseConfig()) return NextResponse.json({ content: defaultSiteContent, configured: false });
  const response = await fetch(getFirestoreDocumentUrl(), { cache: "no-store" });
  if (!response.ok) return NextResponse.json({ content: defaultSiteContent, configured: true });
  const document = await response.json();
  try {
    const saved = JSON.parse(document.fields?.content_json?.stringValue ?? "null");
    const content = saved?.tr?.hero ? {
      ...defaultSiteContent,
      ...saved,
      tr: { ...defaultSiteContent.tr, ...saved.tr, projects: saved.tr.projects ?? defaultSiteContent.tr.projects },
      en: { ...defaultSiteContent.en, ...saved.en, projects: saved.en.projects ?? defaultSiteContent.en.projects },
    } : defaultSiteContent;
    return NextResponse.json({ content, configured: true });
  } catch {
    return NextResponse.json({ content: defaultSiteContent, configured: true });
  }
}

export async function PUT(request) {
  const idToken = (await cookies()).get("portfolio-admin-token")?.value;
  if (!await getFirebaseUser(idToken)) return NextResponse.json({ error: "Yetkisiz işlem." }, { status: 401 });
  const { content } = await request.json();
  if (!content?.tr?.hero || !content?.en?.hero || !content?.tr?.skills || !content?.en?.skills || !Array.isArray(content?.tr?.projects) || !Array.isArray(content?.en?.projects)) return NextResponse.json({ error: "İçerik yapısı geçersiz." }, { status: 400 });
  const response = await fetch(getFirestoreDocumentUrl(), { method: "PATCH", headers: { "Content-Type": "application/json", Authorization: `Bearer ${idToken}` }, body: JSON.stringify({ fields: { content_json: { stringValue: JSON.stringify(content) }, updated_at: { timestampValue: new Date().toISOString() } } }), cache: "no-store" });
  if (!response.ok) return NextResponse.json({ error: "İçerik Firebase'e kaydedilemedi. Firestore kurallarını kontrol et." }, { status: 500 });
  return NextResponse.json({ ok: true, content });
}
