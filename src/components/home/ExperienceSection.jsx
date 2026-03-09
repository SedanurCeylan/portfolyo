"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  const deneyimler = [
    {
      company: "Deep Think Technology",
      position: "Bilgisayar Mühendisi",
      period: "09/2025 – Halen",
      description:
        "Devam eden bir TÜBİTAK projesinde veri toplama, veri analizi ve görüntü işleme süreçlerinde aktif görev almaktayım. Bunun yanı sıra Nextion tabanlı gömülü sistem arayüzleri ve ASP.NET tabanlı web projeleri üzerinde çalışarak teknik yetkinliklerimi geliştirmeye devam ediyorum.",
    },
    {
      company: "Newky Bilgi Teknolojileri",
      position: "Stajyer Mühendis",
      period: "10/2024 – 01/2025",
      description:
        "Araçlara yönelik siber saldırılar üzerine çalıştım. Farklı veri setlerini analiz ederek araç güvenliğini tehdit eden zafiyetlerin belirlenmesi, saldırı türlerinin sınıflandırılması ve bu saldırıların sistemler üzerindeki etkilerinin incelenmesi üzerine görev aldım.",
    },
    {
      company: "İnterProbe Bilgi Teknolojileri",
      position: "Stajyer Mühendis",
      period: "07/2023 – 08/2023",
      description:
        "Siber Operasyonlar Merkezi bünyesinde siber tehdit istihbaratı alanında görev yaptım. OSINT teknikleri kullanarak dijital platformlardan elde edilen verileri analiz edip değerlendirdim.",
    },
    {
      company: "Bilgi Teknolojileri ve İletişim Kurumu(BTK)",
      position: "Stajyer Mühendis",
      period: "07/2022 – 08/2022",
      description:
        "Sunucu sistemlerinin yapısı ve çalışma prensipleri üzerine bilgi edindim. BTK Akademisi’nde siber güvenlik eğitimi alarak zararlı yazılımlar, saldırı türleri ve sistem zafiyetleri üzerine çalıştım. Ayrıca Fetih Siber Talimhane platformunda zafiyet analizleri yaparak sızma testi deneyimi kazandım.",
    },
  ];

  const [seciliDeneyim, setSeciliDeneyim] = useState(deneyimler[0]);

  return (
    <section className="container mx-auto px-4 py-10 mb-10 deneyimler">
      <p className="text-textrenk py-4 border-b border-textrenk text-2xl font-semibold">
        Deneyimler
      </p>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 flex flex-col gap-4">
          {deneyimler.map((deneyim, idx) => {
            const isActive = seciliDeneyim.company === deneyim.company;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSeciliDeneyim(deneyim)}
                className={`w-full text-left rounded-2xl border p-5 transition-all duration-300 ${
                  isActive
                    ? "border-textrenk bg-textrenk/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                    : "border-black/10 bg-white hover:border-textrenk/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                }`}
              >
                <div className="flex flex-col gap-2">
                  <p
                    className={`text-xl md:text-2xl font-semibold ${
                      isActive ? "text-textrenk" : "text-gray-900"
                    }`}
                  >
                    {deneyim.company}
                  </p>

                  <p className="text-base md:text-lg text-gray-700">
                    {deneyim.position}
                  </p>

                  <p className="text-sm md:text-base text-gray-500">
                    {deneyim.period}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="lg:col-span-7">
          <motion.div
            key={seciliDeneyim.company}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="h-full rounded-3xl border border-black/10 bg-white p-6 md:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.10)]"
          >
            <div className="flex flex-col gap-3">
              <p className="text-2xl md:text-3xl font-semibold text-textrenk">
                {seciliDeneyim.company}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full bg-textrenk/10 px-4 py-2 text-sm md:text-base font-medium text-textrenk">
                  {seciliDeneyim.position}
                </span>

                <span className="text-sm md:text-base text-gray-500">
                  {seciliDeneyim.period}
                </span>
              </div>

              <p className="text-base md:text-lg leading-8 text-gray-700 mt-3 text-justify">
                {seciliDeneyim.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}