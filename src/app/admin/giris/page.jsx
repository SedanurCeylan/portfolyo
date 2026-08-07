"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter(); const [error, setError] = useState(""); const [loading, setLoading] = useState(false);
  const submit = async (event) => { event.preventDefault(); setLoading(true); setError(""); const form = new FormData(event.currentTarget); const response = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: form.get("email"), password: form.get("password") }) }); const data = await response.json(); setLoading(false); if (!response.ok) return setError(data.error); router.replace("/admin"); router.refresh(); };
  return <main className="admin-login"><form onSubmit={submit}><header><div><i/><i/><i/></div><span>Güvenli Yönetim</span><small>🔐</small></header><section><span className="admin-login-app">SC</span><p className="mini-label">YALNIZCA YÖNETİCİ</p><h1>Tekrar hoş geldin.</h1><p>Portfolyo içeriğini düzenlemek için hesabınla giriş yap.</p><label>E-posta<input name="email" type="email" autoComplete="username" required /></label><label>Şifre<input name="password" type="password" autoComplete="current-password" required /></label>{error && <div className="admin-error" role="alert">{error}</div>}<button disabled={loading}>{loading ? "Giriş yapılıyor…" : "Giriş yap"}<b>→</b></button></section></form></main>;
}
