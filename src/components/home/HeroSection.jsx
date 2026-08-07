"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useSitePreferences } from "@/context/SitePreferences";
import { useSiteContent } from "@/context/SiteContent";

const copy = {
  tr: { available: "Yeni projelere açık", slogan: ["FİKİRLERİ", "KODLA", "ÜRÜNE", "DÖNÜŞTÜR"], note: "Sadece kod değil; yaşayan dijital ürünler geliştiriyorum.", about: "Hakkımda", projects: "Projeler", experience: "Deneyim", contact: "İletişim", navigation: "Navigasyon", language: "English" },
  en: { available: "Available for work", slogan: ["TURNING", "IDEAS", "INTO", "PRODUCTS"], note: "Not just code; I build digital products that feel alive.", about: "About", projects: "Projects", experience: "Experience", contact: "Contact", navigation: "Navigation", language: "Türkçe" },
};

export default function HeroSection() {
  const [panelOpen, setPanelOpen] = useState(false);
  const { language, toggleLanguage } = useSitePreferences();
  const { content } = useSiteContent();
  const reduceMotion = useReducedMotion();
  const t = content[language].hero;
  const about = content[language].about;
  const c = copy[language];
  const fields = t.fields.split("·").map((item) => item.trim()).filter(Boolean);

  return <section id="anasayfa" className="creatie-showcase" aria-labelledby="hero-title">
    <div className="showcase-wallpaper" aria-hidden="true" />
    <div className="showcase-tint" aria-hidden="true" />
    <motion.p className="showcase-creator" initial={reduceMotion ? false : { opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>SEDANUR CEYLAN</motion.p>

    <motion.aside className="showcase-profile" initial={reduceMotion ? false : { opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .1 }}>
      <span className="showcase-avatar"><Image src={about.image} alt={`${t.firstName} ${t.lastName}`} fill className="object-cover" sizes="67px" unoptimized={about.image.startsWith("/api/")} /></span>
      <div><small><i aria-hidden="true" />{c.available}</small><strong>{t.firstName} {t.lastName} — {t.role}</strong><p>{c.note}</p></div>
    </motion.aside>

    <motion.div className="showcase-title" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
      <h1 id="hero-title">{c.slogan.map((line) => <span key={line}>{line}</span>)}</h1>
    </motion.div>

    <div className="showcase-tags" aria-label={t.fields}>{fields.map((field, index) => <motion.span key={field} className={`showcase-tag tag-${index + 1}`} initial={reduceMotion ? false : { opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1, rotate: index === 0 ? -5 : index === 1 ? 4 : -3 }} transition={{ delay: .3 + index * .08 }}><b>{index === 0 ? "⌘" : index === 1 ? "✦" : "◇"}</b>{field}</motion.span>)}</div>
    <div className="showcase-eyes" aria-hidden="true"><i /><i /></div>
    <p className="showcase-note">— {c.note}</p>

    <AnimatePresence>{panelOpen && <motion.aside className="showcase-panel" initial={{ opacity: 0, y: 18, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 14, scale: .97 }}>
      <header><div><span className="mac-panel-app">⚙️</span><p>{c.navigation}<small>{t.role}</small></p></div><button type="button" onClick={() => setPanelOpen(false)} aria-label="Kapat"><span className="mac-close-symbol">×</span></button></header>
      <nav><a href="#hakkimda" onClick={() => setPanelOpen(false)}><i className="mac-nav-app">🌸</i>{c.about}<span>01</span></a><a href="#projeler" onClick={() => setPanelOpen(false)}><i className="mac-nav-app">📁</i>{c.projects}<span>02</span></a><a href="#deneyim" onClick={() => setPanelOpen(false)}><i className="mac-nav-app">🗓️</i>{c.experience}<span>03</span></a><Link href="/iletisim"><i className="mac-nav-app">✉️</i>{c.contact}<span>04</span></Link></nav>
      <button className="showcase-language" type="button" onClick={toggleLanguage}><span className="mac-language-symbol">🌐</span>{c.language}</button>
    </motion.aside>}</AnimatePresence>

    <nav className="showcase-dock" aria-label={c.navigation}>
      <button type="button" onClick={() => setPanelOpen((value) => !value)} aria-label={c.navigation} aria-expanded={panelOpen}><small className="dock-tooltip">{c.navigation}</small><span className="showcase-dock-icon dock-finder"><b>⌣</b></span></button>
      <a href="#hakkimda" aria-label={c.about}><small className="dock-tooltip">{c.about}</small><span className="showcase-dock-icon dock-photos">🌸</span></a>
      <a href="#projeler" aria-label={c.projects}><small className="dock-tooltip">{c.projects}</small><span className="showcase-dock-icon dock-files">📁</span></a>
      <Link href="/iletisim" aria-label={c.contact}><small className="dock-tooltip">{c.contact}</small><span className="showcase-dock-icon dock-apple-mail">✉️</span></Link>
    </nav>
  </section>;
}
