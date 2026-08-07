import { projectsByLanguage } from "@/data/projects";

export const defaultSiteContent = {
  tr: {
    hero: { firstName: "Sedanur", lastName: "Ceylan", role: "Bilgisayar Mühendisi", fields: "Web · Veri · Yapay Zekâ", projects: "Projeler", cv: "CV", network: "Proje Ağı" },
    projects: projectsByLanguage.tr,
    about: { label: "Hakkımda", title: "Merhaba, ben Sedanur.", body: "Bilgisayar mühendisiyim. Araştırma projeleri ve gerçek kullanıcı ihtiyaçları için sade, sürdürülebilir yazılımlar geliştiriyorum.", body2: "Şu anda bilgisayar mühendisliği yüksek lisans eğitimime devam ediyor; veri analizi, görüntü işleme ve web uygulamaları üzerinde çalışıyorum.", location: "Isparta, Türkiye", image: "/foto.jpeg", skills: ["Python", "ASP.NET", "Next.js", "SQL"] },
    experience: { label: "03 / Deneyim", title: "Çalışma geçmişi", open: "Detayı aç", items: [
      { period: "2025 — Şimdi", company: "Deep Think Technology", role: "Bilgisayar Mühendisi", text: "TÜBİTAK destekli Ar-Ge projesinde veri toplama, analiz ve görüntü işleme süreçleri; Nextion arayüzleri ve ASP.NET uygulamaları.", tags: ["Computer Vision", "Data Analysis", "Embedded UI", "ASP.NET"] },
      { period: "2024 — 2025", company: "Newky Bilgi Teknolojileri", role: "Stajyer Mühendis", text: "Otomotiv sistemlerine yönelik saldırı veri setlerinde zafiyet ve tehdit sınıflandırması.", tags: ["Automotive Security", "Dataset Analysis", "Threat Classification"] },
      { period: "2023", company: "İnterProbe Bilgi Teknolojileri", role: "Stajyer Mühendis", text: "Siber Operasyonlar Merkezi'nde OSINT tabanlı tehdit verisi toplama ve değerlendirme.", tags: ["OSINT", "Threat Intelligence", "SOC"] },
    ] },
    education: { label: "04 / Eğitim", title: "Akademik altyapı.", items: [{ period: "2026 — Şimdi", degree: "Bilgisayar Mühendisliği", type: "Tezli Yüksek Lisans", school: "Isparta Uygulamalı Bilimler Üniversitesi" }, { period: "2020 — 2024", degree: "Bilgisayar Mühendisliği", type: "Lisans · GNO 3.10", school: "Süleyman Demirel Üniversitesi" }] },
    footer: { label: "Bir sonraki projede", line1: "Birlikte değer", line2: "üretelim.", mailLabel: "E-posta gönder", email: "sdnrcyln2@gmail.com", github: "https://github.com/SedanurCeylan", instagram: "", linkedin: "https://www.linkedin.com/in/sedanur-ceylan-190702/", top: "Başa dön" },
    skills: { label: "Beceriler", subtitle: "Üretirken kullandığım teknolojiler.", categories: [
      { key: "frontend", title: "Frontend", skills: ["React", "Next.js", "JavaScript", "CSS"] },
      { key: "backend", title: "Backend", skills: ["ASP.NET", "Firebase", "REST API", "SQL"] },
      { key: "data", title: "Veri ve Yapay Zekâ", skills: ["Python", "GAN", "Computer Vision", "MIL"] },
      { key: "tools", title: "Araçlar", skills: ["Git", "GitHub"] },
    ] },
  },
  en: {
    hero: { firstName: "Sedanur", lastName: "Ceylan", role: "Computer Engineer", fields: "Web · Data · Artificial Intelligence", projects: "Projects", cv: "CV", network: "Project Network" },
    projects: projectsByLanguage.en,
    about: { label: "About", title: "Hi, I'm Sedanur.", body: "I'm a computer engineer building clear, sustainable software for research projects and real user needs.", body2: "I'm currently pursuing a master's degree in computer engineering while working across data analysis, computer vision and web applications.", location: "Isparta, Türkiye", image: "/foto.jpeg", skills: ["Python", "ASP.NET", "Next.js", "SQL"] },
    experience: { label: "03 / Experience", title: "Work history", open: "Open details", items: [
      { period: "2025 — Present", company: "Deep Think Technology", role: "Computer Engineer", text: "Data collection, analysis and computer-vision workflows in a TÜBİTAK-funded R&D project; Nextion interfaces and ASP.NET applications.", tags: ["Computer Vision", "Data Analysis", "Embedded UI", "ASP.NET"] },
      { period: "2024 — 2025", company: "Newky Information Technologies", role: "Engineering Intern", text: "Vulnerability and threat classification across automotive attack datasets.", tags: ["Automotive Security", "Dataset Analysis", "Threat Classification"] },
      { period: "2023", company: "InterProbe Information Technologies", role: "Engineering Intern", text: "OSINT-based threat data collection and assessment within the Security Operations Center.", tags: ["OSINT", "Threat Intelligence", "SOC"] },
    ] },
    education: { label: "04 / Education", title: "Academic foundation.", items: [{ period: "2026 — Present", degree: "Computer Engineering", type: "M.Sc. · Thesis", school: "Isparta University of Applied Sciences" }, { period: "2020 — 2024", degree: "Computer Engineering", type: "B.Sc. · GPA 3.10", school: "Süleyman Demirel University" }] },
    footer: { label: "For the next project", line1: "Let's create", line2: "value together.", mailLabel: "Send an email", email: "sdnrcyln2@gmail.com", github: "https://github.com/SedanurCeylan", instagram: "", linkedin: "https://www.linkedin.com/in/sedanur-ceylan-190702/", top: "Back to top" },
    skills: { label: "Skills", subtitle: "Technologies I use to build products.", categories: [
      { key: "frontend", title: "Frontend", skills: ["React", "Next.js", "JavaScript", "CSS"] },
      { key: "backend", title: "Backend", skills: ["ASP.NET", "Firebase", "REST API", "SQL"] },
      { key: "data", title: "Data and AI", skills: ["Python", "GAN", "Computer Vision", "MIL"] },
      { key: "tools", title: "Tools", skills: ["Git", "GitHub"] },
    ] },
  },
};
