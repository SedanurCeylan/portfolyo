"use client";

import { useSitePreferences } from "@/context/SitePreferences";
import { useSiteContent } from "@/context/SiteContent";

export default function Footer() {
  const { language } = useSitePreferences();
  const { content } = useSiteContent();
  const t = content[language].footer;
  return <footer className="mac-footer"><div className="footer-wallpaper" aria-hidden="true" /><div className="footer-terminal"><header><div><i /><i /><i /></div><span>sedanur — contact</span><small>⌘</small></header><div className="footer-terminal-body"><p><span>sedanur@portfolio</span> % yeni-proje</p><h2>{t.line1}<br /><strong>{t.line2}</strong></h2><p className="footer-terminal-note">{t.email}</p><a href={`mailto:${t.email}`}>{t.mailLabel}<b>↗</b></a></div></div><div className="mac-footer-bottom"><p>© 2026 Sedanur Ceylan</p><nav><a href={t.github} target="_blank" rel="noreferrer">GitHub</a><a href={t.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href="/api/cv" target="_blank">CV</a></nav><a href="#anasayfa">{t.top} ↑</a></div></footer>;
}
