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
  const focusAreas = t.fields.split("·").map((item) => item.trim()).filter(Boolean);
  const visualCopy = language === "tr"
    ? { label: "Çalışma alanı", status: "Yeni fikirlere açık", location: "Isparta · Türkiye", note: "Araştırma ile ürünü buluşturan dijital deneyimler." }
    : { label: "Area of work", status: "Open to new ideas", location: "Isparta · Türkiye", note: "Digital experiences where research meets product." };
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
      <motion.aside className="hero-profile-board" key={`profile-${language}`} initial={{ opacity: 0, x: reduceMotion ? 0 : 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .55, delay: .18 }} aria-label={visualCopy.label}>
        <div className="hero-profile-top"><span>{visualCopy.label}</span><i aria-hidden="true" /></div>
        <div className="hero-identity-mark">
          <div className="hero-monogram" aria-hidden="true"><span>S</span><span>C</span><small>01</small></div>
          <div className="hero-mini-portrait"><Image src={profileImage} alt={`${t.firstName} ${t.lastName}`} fill className="object-cover" sizes="112px" unoptimized={profileImage.startsWith("/api/")} /></div>
        </div>
        <p className="hero-profile-note">{visualCopy.note}</p>
        <div className="hero-focus-list">{focusAreas.map((area, index) => <div key={area}><span>0{index + 1}</span><strong>{area}</strong></div>)}</div>
        <div className="hero-profile-foot"><p><i aria-hidden="true" />{visualCopy.status}</p><span>{visualCopy.location}</span></div>
      </motion.aside>
    </div>
  </section>;
}
