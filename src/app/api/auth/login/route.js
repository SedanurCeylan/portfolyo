import { NextResponse } from "next/server";
import { firebaseSignIn } from "@/lib/firebaseRest";

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) return NextResponse.json({ error: "E-posta ve şifre gerekli." }, { status: 400 });
    if (email.trim().toLowerCase() !== process.env.ADMIN_EMAIL?.trim().toLowerCase()) return NextResponse.json({ error: "Bu hesap için yönetici yetkisi yok." }, { status: 403 });
    const authResponse = await firebaseSignIn(email, password);
    const data = await authResponse.json();
    if (!authResponse.ok) return NextResponse.json({ error: "E-posta veya şifre hatalı." }, { status: 401 });
    const response = NextResponse.json({ ok: true });
    response.cookies.set("portfolio-admin-token", data.idToken, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: Number(data.expiresIn) || 3600 });
    return response;
  } catch {
    return NextResponse.json({ error: "Firebase bağlantısı yapılandırılmamış veya erişilemiyor." }, { status: 500 });
  }
}
