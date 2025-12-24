"use client";

import HeroSection from "@/components/home/HeroSection";
import AboutMeSection from "@/components/home/AboutMe";
import EducationSection from "@/components/home/EducationSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ExperienceSection from "@/components/home/ExperienceSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMeSection />
      <EducationSection />
      <ProjectsSection />
      <ExperienceSection />
    </div>
  );
}
