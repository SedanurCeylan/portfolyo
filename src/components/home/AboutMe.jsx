"use client";

import { motion } from "framer-motion";
import { useSitePreferences } from "@/context/SitePreferences";
import { useSiteContent } from "@/context/SiteContent";

const copy = {
  tr: { title: ["KODUN ÖTESİNDE", "MERAK VE ÜRETİM"], location: "Çalışma konumu", note: "Araştırmayı gerçek kullanıcı ihtiyaçlarıyla buluşturuyorum." },
  en: { title: ["BEYOND CODE", "CURIOSITY & CRAFT"], location: "Working from", note: "I connect research with real user needs." },
};

export default function AboutMeSection() {
  const { language } = useSitePreferences();
  const { content } = useSiteContent();
  const t = content[language].about;
  const c = copy[language];
  return <section id="hakkimda" className="desktop-about" aria-labelledby="about-title">
    <header className="desktop-about-header"><span><b>🌸</b>{t.label}</span><h2 id="about-title">{c.title.map((line) => <strong key={line}>{line}</strong>)}</h2></header>
    <div className="desktop-about-content"><motion.article className="about-paper about-paper-main" initial={{ opacity: 0, y: 24, rotate: 0 }} whileInView={{ opacity: 1, y: 0, rotate: -2 }} viewport={{ once: true }}><i aria-hidden="true" /><p>{t.body}</p><p>{t.body2}</p></motion.article><div className="about-side-notes"><motion.article className="about-paper about-location-note" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0, rotate: 3 }} viewport={{ once: true }}><span>📍</span><small>{c.location}</small><strong>{t.location}</strong></motion.article><motion.article className="about-paper about-quote-note" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0, rotate: -2 }} viewport={{ once: true }} transition={{ delay: .08 }}><span>💭</span><p>{c.note}</p></motion.article></div></div>
    <ul className="about-desktop-tags">{t.skills.map((skill,index) => <li key={skill} style={{"--tag-index":index}}>{skill}</li>)}</ul>
    <div className="about-eyes" aria-hidden="true"><i /><i /></div>
  </section>;
}
