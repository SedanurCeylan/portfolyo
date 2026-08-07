"use client";

import { motion } from "framer-motion";
import { useSitePreferences } from "@/context/SitePreferences";
import { useSiteContent } from "@/context/SiteContent";

const copy = {
  tr: { title: ["KODUN ÖTESİNDE", "BEN KİMİM?"], location: "Konum", note: "Araştırmayı gerçek kullanıcı ihtiyaçlarıyla buluşturuyorum.", file: "Hakkımda.txt", folder: "Kişisel Notlar" },
  en: { title: ["BEYOND CODE", "WHO AM I?"], location: "Location", note: "I connect research with real user needs.", file: "About me.txt", folder: "Personal Notes" },
};

export default function AboutMeSection() {
  const { language } = useSitePreferences();
  const { content } = useSiteContent();
  const t = content[language].about;
  const c = copy[language];
  return <section id="hakkimda" className="desktop-about" aria-labelledby="about-title">
    <header className="desktop-about-header"><span><b>🌸</b>{t.label}</span><h2 id="about-title">{c.title.map((line) => <strong key={line}>{line}</strong>)}</h2></header>
    <motion.div className="about-notes-window" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><header><div><i /><i /><i /></div><span>{c.file}</span><small>📝</small></header><div className="about-notes-layout"><aside><strong>📁 {c.folder}</strong><span className="is-active">🗒️ {t.label}</span><span>📍 {c.location}</span><span>💡 {t.skills[0]}</span></aside><article><p>{t.body}</p><p>{t.body2}</p><blockquote>{c.note}</blockquote><footer><span>📍 {t.location}</span><ul>{t.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></footer></article></div></motion.div>
  </section>;
}
