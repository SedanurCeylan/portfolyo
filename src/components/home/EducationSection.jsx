"use client";

export default function EducationSection() {
  const egitimler = [
    {
      degree: "Bilgisayar Mühendisliği - Tezli Yüksek Lisans",
      school: "Isparta Uygulamalı Bilimler Üniversitesi",
      period: "2026 - Halen",
    },
    {
      degree: "Bilgisayar Mühendisliği (GNO: 3.10)",
      school: "Süleyman Demirel Üniversitesi",
      period: "2020 - 2024",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-10">
      <p className="text-textrenk py-4 border-b border-textrenk text-2xl font-semibold">
        Eğitim
      </p>

      <div className="mt-10 space-y-8">
        {egitimler.map((egitim, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-3"
          >
            <div>
              <p className="text-lg md:text-2xl font-semibold text-textrenk">
                {egitim.degree}
              </p>

              <p className="text-base md:text-xl text-gray-600 mt-1">
                {egitim.school}
              </p>
            </div>

            <div className="text-base md:text-xl text-gray-500">
              {egitim.period}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}