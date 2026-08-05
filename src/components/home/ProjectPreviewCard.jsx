"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function ProjectPreviewCard({ project, label, linkLabel }) {
  return <article className="hero-project-card">
    <p className="hero-project-label">{label}</p>
    <Link href={`/projeler/${project.slug}`} className="hero-project-image" aria-label={`${project.title} — ${linkLabel}`}>
      <span className="browser-bar" aria-hidden="true"><i /><i /><i /></span>
      <Image src={project.image} alt={`${project.title} proje ekran görüntüsü`} fill className="object-contain" sizes="(max-width: 900px) 94vw, 52vw" priority />
    </Link>
    <div className="hero-project-info">
      <h2>{project.title}</h2>
      <p>{project.text}</p>
      <div className="hero-project-meta">
        <ul aria-label="Technologies">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
        <Link href={`/projeler/${project.slug}`}>{linkLabel}<ArrowUpRightIcon aria-hidden="true" /></Link>
      </div>
    </div>
  </article>;
}
