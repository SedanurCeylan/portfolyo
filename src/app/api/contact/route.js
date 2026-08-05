import { NextResponse } from "next/server";

const clean = (value, maxLength) => typeof value === "string" ? value.trim().slice(0, maxLength) : "";

export async function POST(request) {
  try {
    const body = await request.json();
    if (body.website) return NextResponse.json({ ok: true });
    const name = clean(body.name, 100); const email = clean(body.email, 160); const message = clean(body.message, 4000);
    if (name.length < 2 || message.length < 10 || !/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: "Lütfen form alanlarını geçerli şekilde doldurun." }, { status: 400 });
    const serviceId = process.env.EMAILJS_SERVICE_ID; const templateId = process.env.EMAILJS_TEMPLATE_ID; const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) return NextResponse.json({ error: "E-posta servisi henüz yapılandırılmadı." }, { status: 503 });
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ service_id: serviceId, template_id: templateId, user_id: publicKey, template_params: { from_name: name, from_email: email, reply_to: email, message } }), cache: "no-store" });
    if (!response.ok) return NextResponse.json({ error: "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin." }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Mesaj gönderilirken beklenmeyen bir hata oluştu." }, { status: 500 });
  }
}
