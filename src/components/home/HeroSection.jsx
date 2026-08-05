"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowDownIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { useSitePreferences } from "@/context/SitePreferences";
import { useSiteContent } from "@/context/SiteContent";

export default function HeroSection() {
  const { language } = useSitePreferences();
  const { content } = useSiteContent();
  const reduceMotion = useReducedMotion();
  const t = content[language].hero;
  const profileImage = content[language].about.image;
  const reveal = { hidden: { opacity: 0, y: reduceMotion ? 0 : 20 }, visible: { opacity: 1, y: 0 } };
  return <section id="anasayfa" className="hero-shell network-hero" aria-labelledby="hero-title">
    <div className="hero-grid" aria-hidden="true" />
    <div className="section-wrap network-hero-layout">
      <motion.div className="network-hero-copy" key={language} initial="hidden" animate="visible" transition={{ staggerChildren: reduceMotion ? 0 : .09 }}>
        <motion.p className="hero-coordinate" variants={reveal}><span />PORTFOLIO · 2026</motion.p>
        <motion.h1 id="hero-title" variants={reveal}><span>{t.firstName}</span> <strong>{t.lastName}</strong></motion.h1>
        <motion.p className="network-role" variants={reveal}>{t.role}</motion.p>
        <motion.p className="network-fields" variants={reveal}>{t.fields}</motion.p>
        <motion.div className="hero-actions" variants={reveal}>
          <a href="#projeler" className="button button-primary">{t.projects}<ArrowDownIcon aria-hidden="true" /></a>
          <a href="/api/cv" target="_blank" rel="noreferrer" className="button button-secondary">{t.cv}<ArrowDownTrayIcon aria-hidden="true" /></a>
        </motion.div>
      </motion.div>
      <motion.aside className="hero-pinned-photo-wrap" initial={{ opacity: 0, x: reduceMotion ? 0 : 28, rotate: reduceMotion ? -2 : 0 }} animate={{ opacity: 1, x: 0, rotate: -2 }} transition={{ duration: .55, delay: .18 }} aria-label={`${t.firstName} ${t.lastName}`}>
        <div className="hero-pushpin" aria-hidden="true"><i /></div>
        <div className="hero-pinned-photo"><Image src={profileImage} alt={`${t.firstName} ${t.lastName}`} fill className="object-cover" sizes="(max-width: 700px) 230px, 310px" unoptimized={profileImage.startsWith("/api/")} /></div>
        <div className="hero-photo-caption"><span>{t.firstName} {t.lastName}</span><small>{content[language].about.location}</small></div>
      </motion.aside>
    </div>
  </section>;
}
