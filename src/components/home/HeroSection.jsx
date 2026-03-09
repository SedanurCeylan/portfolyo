"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function HeroSection() {
  const fullText = "Merhaba, Ben Sedanur Ceylan";
  const name = "Sedanur Ceylan";

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 55);

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  const beforeName = displayedText.includes(name)
    ? displayedText.split(name)[0]
    : displayedText;

  const isNameShown = displayedText.includes(name);

  return (
    <section className="relative min-h-screen flex items-center container mx-auto px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_auto_0.95fr] items-stretch gap-10 md:gap-8">
          <div className="flex flex-col justify-center text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex w-fit self-center md:self-start items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm md:text-base text-black/65 bg-white/50 backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-black/80"></span>
              Bilgisayar Mühendisi · Yazılım Geliştirici
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="mt-6 text-[52px] sm:text-[64px] lg:text-[80px] font-extrabold leading-[0.98] tracking-[-0.04em] text-black"
            >
              {isNameShown ? (
                <>
                  {beforeName}
                  <span className="relative inline-block">
                    <span className="relative z-10">{name}</span>
                    <span className="absolute left-0 bottom-2 h-3 w-full rounded-full bg-black/8 -z-0"></span>
                  </span>
                </>
              ) : (
                displayedText
              )}

              <span className="ml-1 inline-block h-[0.9em] w-[3px] rounded-full bg-black/55 align-middle animate-pulse"></span>
            </motion.h1>
          </div>

          <div className="hidden md:flex items-stretch justify-center">
            <div className="w-px bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
          </div>

          <div className="flex flex-col justify-center text-center md:text-left max-w-[460px] mx-auto md:mx-0">
            <motion.p
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 2.1 }}
              className="text-base md:text-xl lg:text-2xl leading-[1.7] text-black/65 font-light"
            >
              Bilgisayar mühendisliği alanında, kullanıcı odaklı ve işlevsel
              yazılımlar geliştirmeye odaklanıyorum.
              <br />
              Karmaşıklığı azaltan, sürdürülebilir çözümler üretmeyi ve gerçek
              problemlere teknoloji ile değer katan sistemler geliştirmeyi
              hedefliyorum.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.6 }}
              className="mt-8 flex justify-center md:justify-start gap-4"
            >
              <a
                href="https://github.com/SedanurCeylan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 text-black/80 bg-white/50 transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
              >
                <FaGithub className="text-xl" />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 text-black/80 bg-white/50 transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
              >
                <FaLinkedin className="text-xl" />
              </a>

              <a
                href="mailto:sdnrcyln2@gmail.com"
                aria-label="E-posta"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 text-black/80 bg-white/50 transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}