import ProjectDetail from "@/components/projects/ProjectDetail";

const slugs = ["aci-benek-tespiti", "iot-siber-guvenlik", "kripto-paneli", "eticaret-sistemi"];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  return <ProjectDetail slug={slug} />;
}
