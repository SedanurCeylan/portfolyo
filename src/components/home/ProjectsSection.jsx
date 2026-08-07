"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useSitePreferences } from "@/context/SitePreferences";
import { useSiteContent } from "@/context/SiteContent";

const copy = {
  tr: { label: "Projeler", title: ["HİKÂYE ANLATAN", "PROJELER"], open: "Projeyi aç", all: "Tüm GitHub projeleri" },
  en: { label: "Projects", title: ["PROJECTS THAT", "TELL STORIES"], open: "Open project", all: "All GitHub projects" },
};

export default function ProjectsSection() {
  const { language } = useSitePreferences();
  const { content } = useSiteContent();
  const reduceMotion = useReducedMotion();
  const t = copy[language];
  const projects = (content[language].projects || []).filter((project) => project && project.visible !== false);

  return <section id="projeler" className="desktop-projects" aria-labelledby="projects-title">
    <div className="desktop-projects-wallpaper" aria-hidden="true" />
    <header className="desktop-projects-title"><span><b className="mac-folder-symbol">📁</b>{t.label}</span><h2 id="projects-title">{t.title.map((line) => <strong key={line}>{line}</strong>)}</h2></header>
    <div className="desktop-project-grid">{projects.map((project, index) => {
      const href = project.externalUrl || (project.slug ? `/projeler/${project.slug}` : "#projeler");
      return <motion.article key={`${project.slug}-${index}`} className={`desktop-project-card project-card-${index % 6}`} initial={reduceMotion ? false : { opacity: 0, y: 30, rotate: 0 }} whileInView={{ opacity: 1, y: 0, rotate: [-4, 1, 4, -2, 3, -3][index % 6] }} viewport={{ once: true, amount: .15 }} transition={{ delay: index * .06 }}>
        <i className={`project-paperclip clip-${index % 4}`} aria-hidden="true" />
        <div className="desktop-browser-bar" aria-hidden="true"><span /><span /><span /></div>
        <Link href={href} target={project.externalUrl ? "_blank" : undefined} aria-label={`${project.title || t.label} — ${t.open}`} className="desktop-project-image"><Image src={project.image || "/yakında.jpg"} alt={project.title || t.label} fill className="object-cover" sizes="(max-width: 720px) 88vw, 32vw" /></Link>
        <div className="desktop-project-copy"><div><p>{project.type || t.label}</p><h3>{project.title || t.label}</h3></div><span>{project.text || ""}</span><footer><div>{(project.technologies || []).filter(Boolean).slice(0,3).map((technology, technologyIndex) => <small key={`${technology}-${technologyIndex}`}>{technology}</small>)}</div><Link href={href} target={project.externalUrl ? "_blank" : undefined}>{t.open} ↗</Link></footer></div>
      </motion.article>;
    })}</div>
    <a className="desktop-project-all" href="https://github.com/SedanurCeylan" target="_blank" rel="noreferrer">{t.all} ↗</a>
  </section>;
}
