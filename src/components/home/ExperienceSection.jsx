"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSitePreferences } from "@/context/SitePreferences";
import { useSiteContent } from "@/context/SiteContent";

const copy = {
  tr: { label: "Deneyim", title: ["DENEYİMLE", "ÜRETTİĞİM DEĞER"], hint: "Detayları görmek için satıra dokun" },
  en: { label: "Experience", title: ["VALUE BUILT", "THROUGH EXPERIENCE"], hint: "Tap a row to view details" },
};
const icons = ["💼", "🛡️", "🔎", "💻"];

export default function ExperienceSection() {
  const { language } = useSitePreferences();
  const { content } = useSiteContent();
  const [active, setActive] = useState(0);
  const t = content[language].experience;
  const c = copy[language];

  return <section id="deneyim" className="paper-experience" aria-labelledby="experience-title">
    <div className="experience-decor experience-squiggle" aria-hidden="true">∿∿</div>
    <div className="experience-decor experience-eyes" aria-hidden="true"><i /><i /></div>
    <header className="paper-experience-header"><span><b>💼</b>{c.label}</span><h2 id="experience-title">{c.title.map((line) => <strong key={line}>{line}</strong>)}</h2><p>{c.hint}</p></header>
    <div className="paper-experience-list">{t.items.map((item, index) => {
      const isOpen = active === index;
      return <motion.article key={`${item.company}-${index}`} className={`paper-job job-${index + 1} ${isOpen ? "is-open" : ""}`} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }}>
        <button type="button" onClick={() => setActive(isOpen ? -1 : index)} aria-expanded={isOpen}>
          <span className="paper-job-period">{item.period}</span><div><strong>{item.company}</strong><small>{item.role}</small></div><span className="paper-job-app">{icons[index % icons.length]}</span><i className="paper-job-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</i>
        </button>
        <AnimatePresence initial={false}>{isOpen && <motion.div className="paper-job-detail" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}><div><p>{item.text}</p><ul>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div></motion.div>}</AnimatePresence>
      </motion.article>;
    })}</div>
  </section>;
}
