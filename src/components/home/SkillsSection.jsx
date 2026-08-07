"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useSitePreferences } from "@/context/SitePreferences";
import { useSiteContent } from "@/context/SiteContent";

const copy = {
  tr: { title: ["FİKİRLERİ ÜRÜNE", "DÖNÜŞTÜREN BECERİLER"], description: "Web uygulamaları, veri ve yapay zekâ çözümleri geliştirirken kullandığım teknoloji seti." },
  en: { title: ["SKILLS THAT TURN", "IDEAS INTO PRODUCTS"], description: "The technology stack I use to build web applications, data and artificial intelligence solutions." },
};
const icons = { frontend: "🖥️", backend: "🗄️", data: "🧠", tools: "🛠️" };

export default function SkillsSection() {
  const { language } = useSitePreferences();
  const { content } = useSiteContent();
  const reduceMotion = useReducedMotion();
  const t = content[language].skills;
  const c = copy[language];

  return <section id="beceriler" className="paper-skills" aria-labelledby="skills-title">
    <div className="paper-skills-decor decor-dot" aria-hidden="true" />
    <div className="paper-skills-decor decor-eyes" aria-hidden="true"><i /><i /></div>
    <div className="paper-skills-decor decor-scribble" aria-hidden="true">∿∿</div>
    <header className="paper-skills-header"><span><b>🧰</b>{t.label}</span><h2 id="skills-title">{c.title.map((line) => <strong key={line}>{line}</strong>)}</h2><p>{c.description}</p></header>
    <div className="paper-skill-cards">{(t.categories || []).filter(Boolean).map((category, index) => <motion.article key={category.key || `${category.title}-${index}`} className={`paper-skill-card paper-card-${index % 4 + 1}`} initial={reduceMotion ? false : { opacity: 0, y: 28, rotate: 0 }} whileInView={{ opacity: 1, y: 0, rotate: [-2, 2, -4, 1][index % 4] }} viewport={{ once: true, amount: .2 }} transition={{ delay: Math.min(index, 8) * .07 }}>
      <i className="paper-pin" aria-hidden="true" />
      <i className="paper-fold" aria-hidden="true" />
      <div className="paper-card-number"><span>{String(index + 1).padStart(2,"0")}</span><b>{icons[category.key] || "💻"}</b></div>
      <h3>{category.title}</h3>
      <ul>{(category.skills || []).filter(Boolean).map((skill, skillIndex) => <li key={`${skill}-${skillIndex}`}>{skill}</li>)}</ul>
    </motion.article>)}</div>
  </section>;
}
