"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const fullText = "Merhaba, Ben Sedanur Ceylan";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const beforeName = displayedText.includes("Sedanur Ceylan")
    ? displayedText.split("Sedanur Ceylan")[0]
    : displayedText;

  const isNameShown = displayedText.includes("Sedanur Ceylan");

  return (
  <section className="container mx-auto px-6 py-40 md:py-60 mt-20">
  <div className="flex flex-col md:flex-row items-center justify-center gap-12 relative max-w-6xl mx-auto">
    <div className="md:w-1/2 pl-0 md:pl-6 text-center md:text-left">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--textrenk)] leading-tight tracking-tight"
      >
        {isNameShown ? (
          <>
            {beforeName}
            <span className="text-blue-500">Sedanur Ceylan</span>
          </>
        ) : (
          displayedText
        )}
        <span className="animate-pulse">|</span>
      </motion.h1>
    </div>

    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-blue-500 -translate-x-1/2"></div>

    <div className="md:w-1/2 pr-0 md:pr-6 text-center md:text-left">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="text-base sm:text-lg md:text-2xl text-[var(--textrenk)]/80 font-light leading-relaxed relative"
      >
       Bilgisayar mühendisliği alanında, işlevsel ve kullanıcıyı merkeze alan yazılımlar geliştirmeye odaklanıyorum.<br></br>
Amacım; karmaşıklığı azaltan, sürdürülebilir çözümler üretmek.
      </motion.p>
    </div>
  </div>
</section>


  );
}
