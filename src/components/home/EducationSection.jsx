"use client";

import { motion } from "framer-motion";
import { useSitePreferences } from "@/context/SitePreferences";
import { useSiteContent } from "@/context/SiteContent";

const copy = { tr: { title: ["AKADEMİK", "YOLCULUĞUM"], file: "Eğitim Arşivi" }, en: { title: ["ACADEMIC", "JOURNEY"], file: "Education Archive" } };

export default function EducationSection() {
  const { language } = useSitePreferences();
  const { content } = useSiteContent();
  const t = content[language].education;
  const c = copy[language];
  return <section className="mac-education" aria-labelledby="education-title">
    <header className="mac-education-header"><span><b>🎓</b>{t.label}</span><h2 id="education-title">{c.title.map((line) => <strong key={line}>{line}</strong>)}</h2></header>
    <motion.div className="education-window" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><header><div><i /><i /><i /></div><span>{c.file}</span><small>⌘</small></header><div className="education-window-body"><aside><span>⭐️</span><span>📚</span><span>🗂️</span></aside><div className="education-files">{(t.items || []).filter(Boolean).map((item,index) => <article key={`${item.school || item.degree}-${index}`}><div className="education-file-icon">📄</div><div><time>{item.period || "—"}</time><h3>{item.degree || t.label}</h3><p>{item.type || "—"}</p><small>{item.school || "—"}</small></div><b>{String(index + 1).padStart(2,"0")}</b></article>)}</div></div></motion.div>
  </section>;
}
