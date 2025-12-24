"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  const deneyimler = [
    {
      company: "Deep Think Teknoloji",
      position: "Bilgisayar Mühendisi",
      period: "09/2025 – Halen",
      description:
        "Devam eden bir TÜBİTAK projesinde veri toplama ve analiz süreçlerinde aktif görev almaktayım. Bunun yanı sıra gömülü sistemler kapsamında Nextion tabanlı arayüzler geliştiriyor, ASP.NET tabanlı web projeleri üzerinde çalışarak teknik yetkinliklerimi sürekli olarak geliştirmeye devam ediyorum.",
    },
    {
      company: "Newky Bilgi Teknolojileri",
      position: "Stajyer Mühendis",
      period: "10/2024 – 01/2025",
      description:
        "Araçlara yönelik düzenlenen siber saldırılar üzerine çalıştım. Farklı veri setlerini analiz ederek araç güvenliğini tehdit eden zafiyetleri tespit etmeye odaklandım. Saldırı türlerinin sınıflandırılması ve bu saldırıların araç sistemleri üzerindeki etkilerinin incelenmesi üzerine görev aldım.",
    },
    {
      company: "İnterProbe Bilgi Teknolojileri",
      position: "Stajyer Mühendis",
      period: "07/2023 – 08/2023",
      description:
        "Siber Operasyonlar Merkezi’nde, siber tehdit istihbaratı alanında görev yaptım. OSINT(Açık Kaynak İstihbaratı) teknikleri kullanarak dijital platformlardan elde edilen verileri analiz edip değerlendirdim.",
    },
    {
      company: "BTK",
      position: "Stajyer Mühendis",
      period: "07/2022 – 08/2022",
      description:
        "Sunucu sistemlerinin yapısı ve çalışma prensipleri üzerine bilgi edindim. BTK Akademisi’nde siber güvenlik eğitimi alarak zararlı yazılımlar, saldırı türleri ve sistem zafiyetleri üzerine çalıştım. Ayrıca Fetih Siber Talimhane platformunda zafiyet analizleri yaparak sızma testi deneyimi kazandım.",
    },
  ];

  const [seciliDeneyim, setSeciliDeneyim] = useState(deneyimler[0]);

  return (
    <section className="container mx-auto px-4 py-10 mb-10">
      <p className="text-textrenk py-4 border-b border-textrenk text-2xl font-semibold">Deneyimler</p>
      <div className="flex flex-col md:flex-row items-start mt-10 gap-6">
        <div className="w-full md:w-2/3 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="divide-y divide-gray-200">
              {deneyimler.map((deneyim, idx) => (
                <tr
                  key={idx}
                  onClick={() => setSeciliDeneyim(deneyim)}
                  className={`cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:bg-blue-200 ${seciliDeneyim.company === deneyim.company ? "bg-blue-500 text-white" : ""}`}
                >
                  <td className="px-3 py-4 whitespace-nowrap text-sm md:text-xl">{deneyim.company}</td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm md:text-xl">{deneyim.position}</td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm md:text-xl">{deneyim.period}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full md:w-1/3">
          <motion.p
            key={seciliDeneyim.company}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-xl font-normal text-gray-700 text-center"
          >
            {seciliDeneyim.description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
