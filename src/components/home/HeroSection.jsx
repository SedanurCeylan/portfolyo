"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { useSitePreferences } from "@/context/SitePreferences";
import { useSiteContent } from "@/context/SiteContent";

const copy = {
  tr: { eyebrow: "Bilgisayar mühendisi · Isparta", line1: "FİKİRLERİ", line2: "KODLA", line3: "ÜRÜNE", line4: "DÖNÜŞTÜRÜYORUM", available: "Yeni projelere açık", note: "Araştırma, veri ve ürün geliştirmeyi bir araya getiren dijital çözümler." },
  en: { eyebrow: "Computer engineer · Isparta", line1: "TURNING", line2: "IDEAS", line3: "INTO", line4: "PRODUCTS", available: "Open to new projects", note: "Digital solutions bringing research, data and product development together." },
};

export default function HeroSection() {
  const { language } = useSitePreferences();
  const { content } = useSiteContent();
  const reduceMotion = useReducedMotion();
  const t = content[language].hero;
  const about = content[language].about;
  const c = copy[language];
  const fields = t.fields.split("·").map((item) => item.trim()).filter(Boolean);
  const reveal = { hidden: { opacity: 0, y: reduceMotion ? 0 : 22 }, visible: { opacity: 1, y: 0 } };

  return <section id="anasayfa" className="creatie-hero" aria-labelledby="hero-title">
    <div className="creatie-photo" aria-hidden="true"><Image src={about.image} alt="" fill priority className="object-cover" sizes="100vw" unoptimized={about.image.startsWith("/api/")} /></div>
    <div className="creatie-wash" aria-hidden="true" />
    <motion.div className="creatie-profile" initial={reduceMotion ? false : { opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .55 }}>
      <div className="creatie-profile-head"><span className="creatie-avatar"><Image src={about.image} alt={`${t.firstName} ${t.lastName}`} fill className="object-cover" sizes="44px" unoptimized={about.image.startsWith("/api/")} /></span><i aria-hidden="true" />{c.available}</div>
      <strong>{t.firstName} {t.lastName}</strong>
      <p>{c.note}</p>
      <small>{c.eyebrow}</small>
    </motion.div>

    <motion.div className="creatie-title-wrap" initial="hidden" animate="visible" transition={{ staggerChildren: reduceMotion ? 0 : .07 }}>
      <motion.p className="creatie-kicker" variants={reveal}>PORTFOLIO · 2026</motion.p>
      <motion.h1 id="hero-title" variants={reveal}><span>{c.line1}</span><span>{c.line2}</span><span>{c.line3}</span><span>{c.line4}</span></motion.h1>
    </motion.div>

    <div className="creatie-stickers" aria-label={t.fields}>{fields.map((field, index) => <motion.span key={field} className={`creatie-sticker sticker-${index + 1}`} initial={reduceMotion ? false : { opacity: 0, scale: .8, rotate: 0 }} animate={{ opacity: 1, scale: 1, rotate: index === 0 ? -5 : index === 1 ? 4 : -2 }} transition={{ delay: .35 + index * .08 }}>{field}</motion.span>)}</div>
    <div className="creatie-squiggle squiggle-one" aria-hidden="true">⌁⌁</div>
    <div className="creatie-squiggle squiggle-two" aria-hidden="true">∿</div>

    <motion.div className="creatie-hero-bottom" initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .45 }}>
      <p>— {t.role}<br />{t.fields}</p>
      <div className="hero-actions"><a href="#projeler" className="button button-primary">{t.projects}<ArrowDownIcon aria-hidden="true" /></a><a href="/api/cv" target="_blank" rel="noreferrer" className="button button-secondary">{t.cv}<ArrowDownTrayIcon aria-hidden="true" /></a></div>
    </motion.div>
  </section>;
}
