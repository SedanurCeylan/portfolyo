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
  const heroCopy = language === "tr"
    ? { description: "Araştırma, veri ve ürün geliştirmeyi bir araya getiren dijital çözümler üretiyorum.", available: "Çalışmaya açık", web: "Web Geliştirme", data: "Veri & Yapay Zekâ" }
    : { description: "I create digital solutions that bring research, data and product development together.", available: "Available for work", web: "Web Development", data: "Data & AI" };
  const reveal = { hidden: { opacity: 0, y: reduceMotion ? 0 : 20 }, visible: { opacity: 1, y: 0 } };
  return <section id="anasayfa" className="hero-shell network-hero" aria-labelledby="hero-title">
    <div className="hero-grid" aria-hidden="true" />
    <div className="section-wrap network-hero-layout">
      <motion.div className="network-hero-copy" key={language} initial="hidden" animate="visible" transition={{ staggerChildren: reduceMotion ? 0 : .09 }}>
        <motion.p className="hero-coordinate" variants={reveal}><span />PORTFOLIO · 2026</motion.p>
        <motion.h1 id="hero-title" variants={reveal}><span>{t.firstName}</span> <strong>{t.lastName}</strong></motion.h1>
        <motion.p className="network-role" variants={reveal}>{t.role}</motion.p>
        <motion.p className="hero-intro" variants={reveal}>{heroCopy.description}</motion.p>
        <motion.p className="network-fields" variants={reveal}>{t.fields}</motion.p>
        <motion.div className="hero-actions" variants={reveal}>
          <a href="#projeler" className="button button-primary" aria-label={`${t.projects} bölümüne git`}>{t.projects}<ArrowDownIcon aria-hidden="true" /></a>
          <a href="/api/cv" target="_blank" rel="noreferrer" className="button button-secondary" aria-label="CV dosyasını aç">{t.cv}<ArrowDownTrayIcon aria-hidden="true" /></a>
        </motion.div>
      </motion.div>
      <motion.aside className="hero-photo-composition" initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: .13 }} aria-label={`${t.firstName} ${t.lastName}`}>
        <div className="hero-photo-orbit" aria-hidden="true" />
        <div className="hero-photo-back" aria-hidden="true" />
        <div className="hero-pinned-photo-wrap">
          <div className="hero-pushpin" aria-hidden="true"><i /></div>
          <div className="hero-pinned-photo"><Image src={profileImage} alt={`${t.firstName} ${t.lastName} portre fotoğrafı`} fill className="object-cover" sizes="(max-width: 700px) 88vw, 410px" unoptimized={profileImage.startsWith("/api/")} /></div>
          <div className="hero-photo-caption"><span>{t.firstName} {t.lastName}</span><small>{content[language].about.location}</small></div>
        </div>
        <div className="hero-availability"><i aria-hidden="true" />{heroCopy.available}</div>
        <div className="hero-tech-notes"><span>{heroCopy.web}</span><span>{heroCopy.data}</span></div>
        <div className="hero-dot-pattern" aria-hidden="true">{Array.from({ length: 16 }, (_, index) => <i key={index} />)}</div>
      </motion.aside>
    </div>
  </section>;
}
