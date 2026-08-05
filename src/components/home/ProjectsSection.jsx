"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useSitePreferences } from "@/context/SitePreferences";
import { useSiteContent } from "@/context/SiteContent";

const copy = {
  tr: { label: "02 / Projeler", title: "Seçili çalışmalar", all: "GitHub'daki tüm projeler", detail: "Projeyi incele" },
  en: { label: "02 / Projects", title: "Selected work", all: "All projects on GitHub", detail: "View case study" },
};

export default function ProjectsSection() {
  const { language } = useSitePreferences();
  const { content } = useSiteContent();
  const t = copy[language];
  const projects = content[language].projects.filter((project) => project.visible !== false);

  return <section id="projeler" className="case-section">
    <div className="section-wrap section-space">
      <div className="case-head"><p className="mini-label">{t.label}</p><h2>{t.title}</h2></div>
      <div className="case-list">{projects.map((project, index) => <motion.article key={project.no} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .05 }} className="case-row">
        <div className="case-number">{project.no}</div>
        <Link href={project.externalUrl || `/projeler/${project.slug}`} target={project.externalUrl ? "_blank" : undefined} className="case-image"><Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 720px) 100vw, 38vw" /></Link>
        <div className="case-copy">
          <p>{project.type}</p><h3><Link href={project.externalUrl || `/projeler/${project.slug}`} target={project.externalUrl ? "_blank" : undefined}>{project.title}</Link></h3><span>{project.text}</span><small>{project.meta}</small>
          <div><Link href={project.externalUrl || `/projeler/${project.slug}`} target={project.externalUrl ? "_blank" : undefined}>{t.detail} <ArrowUpRightIcon /></Link>{project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRightIcon /></a>}</div>
        </div>
      </motion.article>)}</div>
      <a className="case-all" href="https://github.com/SedanurCeylan" target="_blank" rel="noreferrer">{t.all} <ArrowUpRightIcon /></a>
    </div>
  </section>;
}
