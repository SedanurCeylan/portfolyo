export const projectsByLanguage = {
  tr: [
    { no: "01", slug: "aci-benek-tespiti", title: "Erken Dönem Acı Benek Tespiti", type: "Computer Vision · Ar-Ge", image: "/sirket.png", meta: "Python · MIL · 1.800 örnek", technologies: ["Python", "MIL", "Computer Vision"], text: "Endüstriyel görüntülerden erken hastalık tespiti." },
    { no: "02", slug: "iot-siber-guvenlik", featured: true, title: "IoT Siber Güvenlik Platformu", type: "TÜBİTAK 2209-A", image: "/11.jpeg", meta: "GAN · IoT · ASP.NET", technologies: ["GAN", "IoT", "ASP.NET"], text: "Yapay zekâ destekli siber güvenlik eğitim ve test platformu.", github: "https://github.com/SedanurCeylan/tubitakprojesi", link: "https://ieeexplore.ieee.org/document/10778718", linkLabel: "Makale" },
    { no: "03", slug: "kripto-paneli", title: "Kripto Al-Sat Paneli", type: "Full-stack ürün", image: "/1.jpeg", meta: "Next.js · Firebase · API", technologies: ["Next.js", "Firebase", "API"], text: "Gerçek zamanlı piyasa ve cüzdan deneyimi.", github: "https://github.com/SedanurCeylan/TurkcellFinal", link: "https://cryptoproject-ten.vercel.app/en", linkLabel: "Canlı site" },
    { no: "04", slug: "eticaret-sistemi", title: "E-Ticaret Yönetim Sistemi", type: "Web sistemleri", image: "/yakında.jpg", meta: "ASP.NET · EF Core · Identity", technologies: ["ASP.NET", "EF Core", "Identity"], text: "Ürün, sipariş ve yönetim süreçleri.", github: "https://github.com/SedanurCeylan/eticaret-v1", link: "https://youtu.be/MT3d4ME_MZc", linkLabel: "Demo" },
  ],
  en: [
    { no: "01", slug: "aci-benek-tespiti", title: "Early Bitter Pit Detection", type: "Computer Vision · R&D", image: "/sirket.png", meta: "Python · MIL · 1,800 samples", technologies: ["Python", "MIL", "Computer Vision"], text: "Early disease detection from industrial imagery." },
    { no: "02", slug: "iot-siber-guvenlik", featured: true, title: "IoT Cybersecurity Platform", type: "TÜBİTAK 2209-A", image: "/11.jpeg", meta: "GAN · IoT · ASP.NET", technologies: ["GAN", "IoT", "ASP.NET"], text: "An AI-powered cybersecurity education and testing platform.", github: "https://github.com/SedanurCeylan/tubitakprojesi", link: "https://ieeexplore.ieee.org/document/10778718", linkLabel: "Publication" },
    { no: "03", slug: "kripto-paneli", title: "Crypto Trading Dashboard", type: "Full-stack product", image: "/1.jpeg", meta: "Next.js · Firebase · API", technologies: ["Next.js", "Firebase", "API"], text: "Real-time market and wallet experience.", github: "https://github.com/SedanurCeylan/TurkcellFinal", link: "https://cryptoproject-ten.vercel.app/en", linkLabel: "Live site" },
    { no: "04", slug: "eticaret-sistemi", title: "E-commerce Management System", type: "Web systems", image: "/yakında.jpg", meta: "ASP.NET · EF Core · Identity", technologies: ["ASP.NET", "EF Core", "Identity"], text: "Product, order and administration workflows.", github: "https://github.com/SedanurCeylan/eticaret-v1", link: "https://youtu.be/MT3d4ME_MZc", linkLabel: "Demo" },
  ],
};

export function getFeaturedProject(language) {
  const projects = projectsByLanguage[language] ?? projectsByLanguage.tr;
  return projects.find((project) => project.featured) ?? projects[0];
}
