"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function ProjectNode({ project, index }) {
  const href = project.externalUrl || `/projeler/${project.slug}`;
  return <Link href={href} target={project.externalUrl ? "_blank" : undefined} rel={project.externalUrl ? "noreferrer" : undefined} className={`project-node project-node-${index + 1}`}>
    <span className="node-status" aria-hidden="true" /><span className="node-name">{project.title}</span>
    <span className="node-preview"><span className="node-image"><Image src={project.image} alt={`${project.title} proje ekran görüntüsü`} fill sizes="240px" /></span><strong>{project.title}</strong><small>{project.technologies.slice(0, 3).join(" · ")}</small><ArrowRightIcon aria-hidden="true" /></span>
  </Link>;
}

export default function ProjectNetwork({ projects, label, reduceMotion }) {
  return <div className={`project-network${reduceMotion ? " reduce-motion" : ""}`} aria-label={label}>
    <p className="project-network-label">{label}</p>
    <div className="network-canvas"><svg className="network-lines" viewBox="0 0 640 430" preserveAspectRatio="none" aria-hidden="true"><path d="M320 215 L148 92" /><path d="M320 215 L506 104" /><path d="M320 215 L500 338" /></svg><div className="network-core" aria-hidden="true"><span>SC</span><i /></div>{projects.map((project, index) => <ProjectNode key={project.slug} project={project} index={index} />)}</div>
  </div>;
}
