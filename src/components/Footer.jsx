"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSitePreferences } from "@/context/SitePreferences";
import { useSiteContent } from "@/context/SiteContent";

const copy = {
  tr: { name:"Adınız", email:"E-posta adresiniz", message:"Mesajınız", placeholder:"Projenizden veya fikrinizden bahsedin...", send:"Mesajı gönder", sending:"Gönderiliyor…", error:"Mesaj gönderilemedi." },
  en: { name:"Your name", email:"Your email", message:"Your message", placeholder:"Tell me about your project or idea...", send:"Send message", sending:"Sending…", error:"Message could not be sent." },
};

export default function Footer() {
  const { language } = useSitePreferences();
  const { content } = useSiteContent();
  const t = content[language].footer;
  const c = copy[language];
  const router = useRouter();
  const [form,setForm] = useState({name:"",email:"",message:""});
  const [submitting,setSubmitting] = useState(false);
  const [error,setError] = useState("");
  const submit = async (event) => { event.preventDefault(); setSubmitting(true); setError(""); try { const response = await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(form)}); if(!response.ok) throw new Error(c.error); router.push("/tesekkur"); } catch { setError(c.error); setSubmitting(false); } };
  return <footer id="iletisim" className="mac-footer"><div className="footer-meadow" aria-hidden="true"/><div className="footer-contact-layout"><div className="footer-hero"><p>SEDANUR CEYLAN®</p><h2>{t.line1}<br/><strong>{t.line2}</strong></h2><a href={`mailto:${t.email}`}>{t.email}</a></div><form className="footer-contact-form" onSubmit={submit}><header><div><i/><i/><i/></div><span>{t.mailLabel}</span><small>✉️</small></header><div><label><span>{c.name}</span><input name="name" value={form.name} onChange={(event)=>setForm({...form,name:event.target.value})} required/></label><label><span>{c.email}</span><input name="email" type="email" value={form.email} onChange={(event)=>setForm({...form,email:event.target.value})} required/></label><label><span>{c.message}</span><textarea name="message" rows="4" placeholder={c.placeholder} value={form.message} onChange={(event)=>setForm({...form,message:event.target.value})} required/></label>{error&&<p role="alert">{error}</p>}<button type="submit" disabled={submitting}>{submitting?c.sending:c.send}<b>↑</b></button></div></form></div><div className="mac-footer-bottom"><p>© 2026 Sedanur Ceylan</p><nav><a href={t.github} target="_blank" rel="noreferrer">GitHub</a><a href={t.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href="/api/cv" target="_blank">CV</a></nav><a href="#anasayfa">{t.top} ↑</a></div></footer>;
}
