"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function ProjectNetwork({ projects, label }) {
  return <aside className="project-index" aria-label={label}>
    <header className="project-index-head">
      <div><span>SC</span><p>{label}<small>Selected work / 01—03</small></p></div>
      <i aria-hidden="true" />
    </header>
    <div className="project-index-list">{projects.map((project, index) => {
      const href = project.externalUrl || `/projeler/${project.slug}`;
      return <Link key={project.slug} href={href} target={project.externalUrl ? "_blank" : undefined} rel={project.externalUrl ? "noreferrer" : undefined} className="project-index-row">
        <span className="project-index-no">0{index + 1}</span>
        <span className="project-index-image"><Image src={project.image} alt="" fill sizes="96px" className="object-cover" unoptimized={project.image.startsWith("/api/")} /></span>
        <span className="project-index-copy"><strong>{project.title}</strong><small>{project.technologies.slice(0, 3).join(" · ")}</small></span>
        <ArrowUpRightIcon aria-hidden="true" />
      </Link>;
    })}</div>
    <footer className="project-index-foot"><span>Web</span><span>Data</span><span>AI</span></footer>
  </aside>;
}
