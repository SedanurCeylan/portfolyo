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
    <section className="relative min-h-[100svh] flex items-center overflow-hidden px-4 sm:px-6 py-10 sm:py-12">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_auto_0.95fr] items-center gap-10 lg:gap-8">
          <div className="flex flex-col justify-center text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex max-w-full w-fit self-center lg:self-start items-center gap-2 rounded-full border border-black/10 px-3 py-2 sm:px-4 text-xs sm:text-sm md:text-base text-black/65 bg-white/50 backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-black/80 shrink-0"></span>
              <span className="truncate">
                Bilgisayar Mühendisi · Yazılım Geliştirici
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
             className="mt-5 sm:mt-6 max-w-[720px] mx-auto lg:mx-0 text-[28px] min-[400px]:text-[34px] sm:text-[42px] md:text-[50px] lg:text-[60px] xl:text-[70px] font-extrabold leading-[1.1] tracking-[-0.03em] text-black break-words text-balance"
            >
              {isNameShown ? (
                <>
                  {beforeName}
                  <span className="relative inline-block">
                    <span className="relative z-10">{name}</span>
                    <span className="absolute left-0 bottom-1.5 sm:bottom-2 h-2 sm:h-3 w-full rounded-full bg-black/8 -z-0"></span>
                  </span>
                </>
              ) : (
                displayedText
              )}

              <span className="ml-1 inline-block h-[0.9em] w-[2px] sm:w-[3px] rounded-full bg-black/55 align-middle animate-pulse"></span>
            </motion.h1>
          </div>

          <div className="hidden lg:flex items-stretch justify-center">
            <div className="w-px h-full min-h-[260px] bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
          </div>

          <div className="flex flex-col justify-center text-center lg:text-left max-w-[560px] mx-auto lg:mx-0">
            <motion.p
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 2.1 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-7 sm:leading-8 lg:leading-[1.7] text-black/65 font-light px-1 sm:px-0"
            >
              Bilgisayar mühendisliği alanında, kullanıcı odaklı ve işlevsel
              yazılımlar geliştirmeye odaklanıyorum.
              <br className="hidden sm:block" />
              Karmaşıklığı azaltan, sürdürülebilir çözümler üretmeyi ve gerçek
              problemlere teknoloji ile değer katan sistemler geliştirmeyi
              hedefliyorum.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.6 }}
              className="mt-6 sm:mt-8 flex justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <a
                href="https://github.com/SedanurCeylan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl border border-black/10 text-black/80 bg-white/50 transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
              >
                <FaGithub className="text-lg sm:text-xl" />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl border border-black/10 text-black/80 bg-white/50 transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
              >
                <FaLinkedin className="text-lg sm:text-xl" />
              </a>

              <a
                href="mailto:sdnrcyln2@gmail.com"
                aria-label="E-posta"
                className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl border border-black/10 text-black/80 bg-white/50 transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
              >
                <FaEnvelope className="text-lg sm:text-xl" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}