"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSitePreferences } from "@/context/SitePreferences";
import { usePathname } from "next/navigation";

const copy = {
  tr: { home:"Ana sayfa", about:"Hakkımda", projects:"Projeler", experience:"Deneyim", contact:"İletişim", work:"Birlikte çalışalım", menu:"Menüyü aç", cv:"CV'yi görüntüle", role:"Bilgisayar Mühendisi", light:"Açık moda geç", dark:"Koyu moda geç", lang:"Switch to English" },
  en: { home:"Home", about:"About", projects:"Projects", experience:"Experience", contact:"Contact", work:"Let's work together", menu:"Open menu", cv:"View résumé", role:"Computer Engineer", light:"Switch to light mode", dark:"Switch to dark mode", lang:"Türkçeye geç" },
};

export default function Navbar() {
  const [open,setOpen]=useState(false);
  const [progress,setProgress]=useState(0);
  const [activeSection,setActiveSection]=useState("");
  const pathname=usePathname();
  const { theme, language, toggleTheme, toggleLanguage } = useSitePreferences();
  const t=copy[language];
  const links=[{label:t.about,href:"/#hakkimda",section:"hakkimda"},{label:t.projects,href:"/#projeler",section:"projeler"},{label:t.experience,href:"/#deneyim",section:"deneyim"},{label:t.contact,href:"/#iletisim",section:"iletisim"}];
  useEffect(()=>{const update=()=>{const max=document.documentElement.scrollHeight-window.innerHeight;setProgress(max>0?window.scrollY/max:0)};update();window.addEventListener("scroll",update,{passive:true});return()=>window.removeEventListener("scroll",update)},[]);
  useEffect(()=>{if(pathname!=="/"){setActiveSection("");return;}const sections=["hakkimda","projeler","deneyim"].map(id=>document.getElementById(id)).filter(Boolean);const observer=new IntersectionObserver(entries=>{const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(visible)setActiveSection(visible.target.id)},{rootMargin:"-25% 0px -55%",threshold:[0,.2,.5]});sections.forEach(section=>observer.observe(section));return()=>observer.disconnect()},[pathname]);
  return <header className="site-nav"><div className="section-wrap nav-inner">
    <Link href="/" className="brand" aria-label={t.home}><span>SC</span><p>Sedanur Ceylan<small>{t.role}</small></p></Link>
    <nav className="nav-links" aria-label={t.menu}>{links.map(l=><Link key={l.href} href={l.href} aria-current={l.path===pathname?"page":l.section===activeSection?"location":undefined}>{l.label}</Link>)}</nav>
    <div className="nav-actions">
      <button className="utility-button language-button" onClick={toggleLanguage} aria-label={t.lang}><span>🌐</span><b>{language === "tr" ? "EN" : "TR"}</b></button>
      <button className="utility-button" onClick={toggleTheme} aria-label={theme === "dark" ? t.light : t.dark}><span>{theme === "dark" ? "☀️" : "🌙"}</span></button>
      <Link href="/#iletisim" className="nav-cta"><span>✉️</span>{t.work}</Link>
    </div>
    <button className="menu-button" onClick={()=>setOpen(!open)} aria-label={t.menu} aria-expanded={open}><span>{open?"×":"≡"}</span></button>
  </div>{open&&<div className="mobile-menu">{links.map((l,index)=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)}><span>{["🌸","📁","🗓️","✉️"][index]}</span>{l.label}</Link>)}<a href="/api/cv" target="_blank"><span>📄</span>{t.cv}</a></div>}<div className="scroll-progress" style={{transform:`scaleX(${progress})`}}/></header>;
}
