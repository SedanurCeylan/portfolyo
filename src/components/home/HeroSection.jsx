"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownIcon, ArrowDownTrayIcon, EnvelopeIcon, FolderIcon } from "@heroicons/react/24/outline";
import { useSitePreferences } from "@/context/SitePreferences";
import { useSiteContent } from "@/context/SiteContent";

const copy = {
  tr: { welcome: "Merhaba, ben", note: "Araştırma, veri ve ürün geliştirmeyi bir araya getiren dijital çözümler üretiyorum.", available: "Yeni projelere açık", finder: "Sedanur — Portfolyo", photo: "Fotoğraflar", projects: "Projeler", contact: "İletişim" },
  en: { welcome: "Hi, I'm", note: "I create digital solutions bringing research, data and product development together.", available: "Open to new projects", finder: "Sedanur — Portfolio", photo: "Photos", projects: "Projects", contact: "Contact" },
};

function WindowDots() { return <div className="mac-window-dots" aria-hidden="true"><i /><i /><i /></div>; }

export default function HeroSection() {
  const { language } = useSitePreferences();
  const { content } = useSiteContent();
  const reduceMotion = useReducedMotion();
  const t = content[language].hero;
  const about = content[language].about;
  const c = copy[language];

  return <section id="anasayfa" className="mac-hero" aria-labelledby="hero-title">
    <div className="mac-wallpaper" aria-hidden="true"><i /><i /><i /></div>
    <div className="mac-desktop-label" aria-hidden="true"><span>SC</span><small>PORTFOLIO<br />2026</small></div>

    <motion.article className="mac-main-window" initial={reduceMotion ? false : { opacity: 0, y: 24, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: .58 }}>
      <header className="mac-window-bar"><WindowDots /><span>{c.finder}</span><b>⌘</b></header>
      <div className="mac-window-body">
        <p className="mac-overline"><i aria-hidden="true" />{c.available}</p>
        <p className="mac-welcome">{c.welcome}</p>
        <h1 id="hero-title"><span>{t.firstName}</span><strong>{t.lastName}</strong></h1>
        <p className="mac-role">{t.role}</p>
        <p className="mac-note">{c.note}</p>
        <p className="mac-fields">{t.fields}</p>
        <div className="hero-actions"><a href="#projeler" className="button button-primary">{t.projects}<ArrowDownIcon aria-hidden="true" /></a><a href="/api/cv" target="_blank" rel="noreferrer" className="button button-secondary">{t.cv}<ArrowDownTrayIcon aria-hidden="true" /></a></div>
      </div>
    </motion.article>

    <motion.article className="mac-photo-window" initial={reduceMotion ? false : { opacity: 0, x: 24, rotate: 0 }} animate={{ opacity: 1, x: 0, rotate: 2 }} transition={{ duration: .55, delay: .16 }}>
      <header className="mac-window-bar"><WindowDots /><span>{c.photo}</span></header>
      <div className="mac-photo"><Image src={about.image} alt={`${t.firstName} ${t.lastName}`} fill priority className="object-cover" sizes="(max-width: 700px) 72vw, 310px" unoptimized={about.image.startsWith("/api/")} /></div>
      <footer><span>{t.firstName} {t.lastName}</span><small>{about.location}</small></footer>
    </motion.article>

    <div className="mac-desktop-files" aria-hidden="true"><div><span>📁</span><small>projects</small></div><div><span>💾</span><small>skills.zip</small></div></div>

    <motion.nav className="mac-dock" aria-label="Hero shortcuts" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .42 }}>
      <a href="#projeler" aria-label={c.projects}><span className="dock-icon dock-folder"><FolderIcon /></span><small>{c.projects}</small></a>
      <a href="/api/cv" target="_blank" rel="noreferrer" aria-label="CV"><span className="dock-icon dock-cv">CV</span><small>CV</small></a>
      <a href="/iletisim" aria-label={c.contact}><span className="dock-icon dock-mail"><EnvelopeIcon /></span><small>{c.contact}</small></a>
      <a href="https://github.com/SedanurCeylan" target="_blank" rel="noreferrer" aria-label="GitHub"><span className="dock-icon dock-github">GH</span><small>GitHub</small></a>
    </motion.nav>
  </section>;
}
