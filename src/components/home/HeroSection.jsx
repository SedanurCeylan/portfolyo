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
  const description = language === "tr"
    ? "Araştırma, veri ve ürün geliştirmeyi bir araya getiren dijital çözümler üretiyorum."
    : "I create digital solutions that bring research, data and product development together.";
  const reveal = { hidden: { opacity: 0, y: reduceMotion ? 0 : 20 }, visible: { opacity: 1, y: 0 } };
  return <section id="anasayfa" className="hero-shell network-hero" aria-labelledby="hero-title">
    <div className="hero-grid" aria-hidden="true" />
    <div className="section-wrap network-hero-layout">
      <motion.div className="network-hero-copy" key={language} initial="hidden" animate="visible" transition={{ staggerChildren: reduceMotion ? 0 : .09 }}>
        <motion.p className="hero-coordinate" variants={reveal}><span />PORTFOLIO · 2026</motion.p>
        <motion.h1 id="hero-title" variants={reveal}><span>{t.firstName}</span> <strong>{t.lastName}</strong></motion.h1>
        <motion.p className="network-role" variants={reveal}>{t.role}</motion.p>
        <motion.p className="hero-intro" variants={reveal}>{description}</motion.p>
        <motion.p className="network-fields" variants={reveal}>{t.fields}</motion.p>
        <motion.div className="hero-actions" variants={reveal}>
          <a href="#projeler" className="button button-primary" aria-label={`${t.projects} bölümüne git`}>{t.projects}<ArrowDownIcon aria-hidden="true" /></a>
          <a href="/api/cv" target="_blank" rel="noreferrer" className="button button-secondary" aria-label="CV dosyasını aç">{t.cv}<ArrowDownTrayIcon aria-hidden="true" /></a>
        </motion.div>
      </motion.div>
      <motion.aside className="hero-photo-composition hero-photo-simple" initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: .13 }} aria-label={`${t.firstName} ${t.lastName}`}>
        <div className="hero-pinned-photo-wrap">
          <div className="hero-pushpin" aria-hidden="true"><i /></div>
          <div className="hero-pinned-photo"><Image src={profileImage} alt={`${t.firstName} ${t.lastName} portre fotoğrafı`} fill className="object-cover" sizes="(max-width: 700px) 78vw, 340px" unoptimized={profileImage.startsWith("/api/")} /></div>
          <div className="hero-photo-caption"><span>{t.firstName} {t.lastName}</span><small>{content[language].about.location}</small></div>
        </div>
      </motion.aside>
    </div>
  </section>;
}
