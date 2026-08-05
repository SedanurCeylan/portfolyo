"use client";
import { motion } from "framer-motion";
import { useSitePreferences } from "@/context/SitePreferences";
import { useSiteContent } from "@/context/SiteContent";
export default function AboutMeSection(){const{language}=useSitePreferences();const{content}=useSiteContent();const t=content[language].about;return <section id="hakkimda" className="about-section"><div className="section-wrap about-simple"><motion.div className="about-copy" initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><div className="about-heading-line"><p className="mini-label">01 / {t.label}</p><span>{t.location}</span></div><h2>{t.title}</h2><p>{t.body}</p><p>{t.body2}</p><ul>{t.skills.map(skill=><li key={skill}>{skill}</li>)}</ul></motion.div></div></section>}
