"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { useSitePreferences } from "@/context/SitePreferences";
import ProjectNetwork from "./ProjectNetwork";
import { useSiteContent } from "@/context/SiteContent";

export default function HeroSection() {
  const { language } = useSitePreferences();
  const { content } = useSiteContent();
  const reduceMotion = useReducedMotion();
  const t = content[language].hero;
  const reveal = { hidden: { opacity: 0, y: reduceMotion ? 0 : 20 }, visible: { opacity: 1, y: 0 } };
  return <section id="anasayfa" className="hero-shell network-hero" aria-labelledby="hero-title">
    <div className="hero-grid" aria-hidden="true" />
    <div className="section-wrap network-hero-layout">
      <motion.div className="network-hero-copy" key={language} initial="hidden" animate="visible" transition={{ staggerChildren: reduceMotion ? 0 : .09 }}>
        <motion.h1 id="hero-title" variants={reveal}><span>{t.firstName}</span> <strong>{t.lastName}</strong></motion.h1>
        <motion.p className="network-role" variants={reveal}>{t.role}</motion.p>
        <motion.p className="network-fields" variants={reveal}>{t.fields}</motion.p>
        <motion.div className="hero-actions" variants={reveal}>
          <a href="#projeler" className="button button-primary">{t.projects}<ArrowDownIcon aria-hidden="true" /></a>
          <a href="/api/cv" target="_blank" rel="noreferrer" className="button button-secondary">{t.cv}<ArrowDownTrayIcon aria-hidden="true" /></a>
        </motion.div>
      </motion.div>
      <ProjectNetwork projects={content[language].projects.filter((project) => project.visible !== false).sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))).slice(0, 3)} label={t.network} reduceMotion={reduceMotion} />
    </div>
  </section>;
}
