"use client";

import { motion } from "framer-motion";

export default function AboutMeSection() {
  return (
    <section className="container mx-auto px-4 py-12 hakkimda">
      <p className="text-textrenk py-4 border-b border-textrenk text-2xl font-semibold">
        Hakkımda
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-[220px_1fr] items-center gap-10 md:gap-14">
        <motion.div
          initial={{ rotate: -8, opacity: 0, y: 20 }}
          whileInView={{ rotate: 0, opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start"
        >
          <img
            src="/foto.jpeg"
            alt="Hakkımda Resmi"
            className="w-36 h-36 md:w-48 md:h-48 object-cover rounded-full shadow-[0_12px_35px_rgba(0,0,0,0.12)] hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <div className="space-y-5 text-justify text-base md:text-xl leading-8 md:leading-10 text-textrenk/80">
            <p>
              Temiz, anlaşılır ve sürdürülebilir kod yazmaya önem veriyor;
              teknolojik gelişmeleri takip ederek teknik yetkinliklerimi sürekli
              geliştirmeye çalışıyorum.
            </p>

            <p>
              Projeler geliştirerek pratik deneyim kazanmayı, yeni teknolojileri
              öğrenmeyi ve üretmeye dayalı bir çalışma disiplinini benimsiyorum.
              Öğrenmeye, araştırmaya ve kendimi sürekli geliştirmeye odaklı bir
              yaklaşım ile ilerlemeye devam ediyorum.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}