"use client";
import { motion, useReducedMotion } from "framer-motion";
import { CodeBracketIcon, CircleStackIcon, CpuChipIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { useSitePreferences } from "@/context/SitePreferences";
import { useSiteContent } from "@/context/SiteContent";
const icons = { frontend: CodeBracketIcon, backend: CircleStackIcon, data: CpuChipIcon, tools: WrenchScrewdriverIcon };
const aliases = { React: ["Next.js"], JavaScript: ["Next.js"], CSS: ["Next.js"], "REST API": ["API"], SQL: ["EF Core"], Git: [], GitHub: [] };

function SkillTag({ skill, projects }) {
  const matches = projects.filter((project) => [skill, ...(aliases[skill] ?? [])].some((term) => project.technologies.some((technology) => technology.toLowerCase() === term.toLowerCase())));
  return <li className="skill-tag" tabIndex="0"><span>{skill}</span>{matches.length > 0 && <small>{matches.map((project) => project.title).join(" · ")}</small>}</li>;
}
function SkillCategory({ category, projects, index, reduceMotion }) {
  const Icon = icons[category.key];
  return <motion.article className="skill-map-card" initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: reduceMotion ? 0 : index * .05 }}><div className="skill-map-head"><Icon aria-hidden="true" /><h3>{category.title}</h3></div><ul>{category.skills.map((skill) => <SkillTag key={skill} skill={skill} projects={projects} />)}</ul></motion.article>;
}
export default function SkillsSection() {
  const { language } = useSitePreferences(); const { content } = useSiteContent(); const reduceMotion = useReducedMotion(); const t = content[language].skills; const projects = content[language].projects.filter((project) => project.visible !== false);
  return <section id="beceriler" className="skill-map-section" aria-labelledby="skills-title"><div className="section-wrap skill-map-wrap"><header className="skill-map-title"><p className="mini-label">02 / {t.label}</p><div><h2 id="skills-title">{t.label}</h2><p>{t.subtitle}</p></div></header><div className="skill-map-grid">{t.categories.map((category, index) => <SkillCategory key={category.key} category={category} projects={projects} index={index} reduceMotion={reduceMotion} />)}</div></div></section>;
}
