"use client";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useSitePreferences } from "@/context/SitePreferences";
import { useSiteContent } from "@/context/SiteContent";
export default function Footer(){const{language}=useSitePreferences();const{content}=useSiteContent();const t=content[language].footer;return <footer className="site-footer"><div className="section-wrap"><p className="mini-label">{t.label}</p><div className="footer-hero"><h2>{t.line1}<br/><span>{t.line2}</span></h2><a href={`mailto:${t.email}`} className="footer-mail">{t.mailLabel} <ArrowUpRightIcon/></a></div><div className="footer-bottom"><p>© 2026 Sedanur Ceylan</p><div><a href={t.github} target="_blank" rel="noreferrer">GitHub</a><a href={t.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href="/api/cv" target="_blank">CV</a></div><a href="#anasayfa">{t.top} ↑</a></div></div></footer>}
