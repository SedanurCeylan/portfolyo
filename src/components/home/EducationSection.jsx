"use client";

export default function EducationSection() {
  return (
    <section className="container mx-auto px-4 py-10">
      <p className="text-textrenk py-4 border-b border-textrenk text-2xl font-semibold">Eğitim</p>
      <div className="flex flex-col md:flex-row justify-between mt-10">
        <div className="text-xl md:text-2xl">
          <p>Bilgisayar Mühendisliği - Tezli Yüksek Lisans</p>
          <p>Isparta Uygulamalı Bilimler Üniversitesi</p>
        </div>
        <div className="text-xl md:text-2xl mt-4 md:mt-0">2026-Halen</div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-10">
        <div className="text-xl md:text-2xl">
          <p>Bilgisayar Mühendisliği (GNO: 3.10)</p>
          <p>Süleyman Demirel Üniversitesi</p>
        </div>
        <div className="text-xl md:text-2xl mt-4 md:mt-0">2020-2024</div>
      </div>
    </section>
  );
}
