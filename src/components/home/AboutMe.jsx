"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSitePreferences } from "@/context/SitePreferences";
import { useSiteContent } from "@/context/SiteContent";
export default function AboutMeSection(){const{language}=useSitePreferences();const{content}=useSiteContent();const t=content[language].about;return <section id="hakkimda" className="about-section"><div className="section-wrap about-simple"><motion.div className="about-photo" initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><Image src={t.image} alt="Sedanur Ceylan" fill className="object-cover" sizes="(max-width: 720px) 86vw, 340px" unoptimized={t.image.startsWith("/api/")}/><span>{t.location}</span></motion.div><motion.div className="about-copy" initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:.08}}><p className="mini-label">01 / {t.label}</p><h2>{t.title}</h2><p>{t.body}</p><p>{t.body2}</p><ul>{t.skills.map(skill=><li key={skill}>{skill}</li>)}</ul></motion.div></div></section>}
