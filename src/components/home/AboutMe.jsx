"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useSitePreferences } from "@/context/SitePreferences";
import { useSiteContent } from "@/context/SiteContent";

const copy = {
  tr: { title: ["MERHABA,", "BEN SEDANUR."], location: "Şu an buradayım", note: "Araştırmayı gerçek kullanıcı ihtiyaçlarıyla buluşturuyorum.", online: "Çevrimiçi", placeholder: "Yeni bir fikir yaz...", messages: "Mesajlar", now: "ŞİMDİ", send: "Gönder" },
  en: { title: ["HELLO,", "I'M SEDANUR."], location: "Currently based in", note: "I connect research with real user needs.", online: "Online", placeholder: "Write a new idea...", messages: "Messages", now: "NOW", send: "Send" },
};

export default function AboutMeSection() {
  const { language } = useSitePreferences();
  const { content } = useSiteContent();
  const t = content[language].about;
  const c = copy[language];
  return <section id="hakkimda" className="desktop-about" aria-labelledby="about-title">
    <header className="desktop-about-header"><span><b>🌸</b>{t.label}</span><h2 id="about-title">{c.title.map((line) => <strong key={line}>{line}</strong>)}</h2></header>
    <motion.div className="about-messages-window" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><header><div><i/><i/><i/></div><span>{c.messages}</span><small>💬</small></header><div className="about-messages-layout"><aside><span className="about-message-avatar"><Image src={t.image || "/foto.jpeg"} alt="Sedanur Ceylan" fill className="object-cover" sizes="76px" unoptimized={(t.image || "").startsWith("/api/")} /></span><strong>Sedanur Ceylan</strong><small><i/>{c.online}</small><p>{c.note}</p></aside><article><div className="message-time">SEDANUR · {c.now}</div><p className="message-bubble is-incoming">{t.body}</p><p className="message-bubble is-incoming">{t.body2}</p><p className="message-bubble is-location"><span>📍</span><small>{c.location}</small><strong>{t.location}</strong></p><ul className="message-skills">{(t.skills || []).map((skill, index) => <li key={`${skill}-${index}`}>✦ {skill}</li>)}</ul><footer><span>{c.placeholder}</span><button type="button" aria-label={c.send}>↑</button></footer></article></div></motion.div>
  </section>;
}
