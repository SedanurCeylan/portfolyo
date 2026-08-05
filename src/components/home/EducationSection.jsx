"use client";
import { useSitePreferences } from "@/context/SitePreferences";
import { useSiteContent } from "@/context/SiteContent";
export default function EducationSection(){const{language}=useSitePreferences();const{content}=useSiteContent();const t=content[language].education;return <section className="education-section"><div className="section-wrap education-grid"><div><p className="mini-label">{t.label}</p><h2>{t.title}</h2></div><div className="education-list">{t.items.map((item,index)=><article key={`${item.school}-${index}`}><time>{item.period}</time><h3>{item.degree}<br/><span>{item.type}</span></h3><p>{item.school}</p></article>)}</div></div></section>}
