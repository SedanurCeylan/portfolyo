"use client";

import { motion } from "framer-motion";

export default function AboutMeSection() {
  return (
    <section className="container mx-auto px-4 py-10 hakkimda">
      <p className="text-textrenk py-4 border-b border-textrenk text-2xl font-semibold">Hakkımda</p>
      <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-10">
        <motion.img
          src="/foto.jpeg"
          alt="Hakkımda Resmi"
          className="w-32 md:w-48 rounded-full hover:scale-110 transform transition-transform duration-300"
          initial={{ rotate: -10, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
        <p className="max-w-[1000px] text-justify text-lg md:text-2xl">Temiz, anlaşılır ve sürdürülebilir kod yazmaya önem veriyor; teknolojik gelişmeleri takip ederek teknik yetkinliklerimi sürekli geliştirmeye çalışıyorum. Projeler geliştirerek pratik deneyim kazanmayı, yeni teknolojileri öğrenmeyi ve üretmeye dayalı bir çalışma disiplinini benimsiyorum. Öğrenmeye, araştırmaya ve kendimi sürekli geliştirmeye odaklı bir çalışma yaklaşımına sahibim.
        </p>
      </div>
      <br />
    </section>
  );
}
