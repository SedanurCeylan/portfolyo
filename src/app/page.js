import HeroSection from "@/components/home/HeroSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import AboutMeSection from "@/components/home/AboutMe";
import ExperienceSection from "@/components/home/ExperienceSection";
import EducationSection from "@/components/home/EducationSection";
import SkillsSection from "@/components/home/SkillsSection";

export default function Home() {
  return <main><HeroSection/><SkillsSection/><AboutMeSection/><ProjectsSection/><ExperienceSection/><EducationSection/></main>;
}
