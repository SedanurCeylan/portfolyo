"use client";

import React from "react";
import { ArrowUpRightIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--textrenk)] text-[var(--bgrenk)]">
      <div className="container mx-auto px-4">
        {/* ÜST KISIM – SOSYAL */}
        <div className="flex justify-center md:justify-center py-10">
          <ul className="flex flex-col md:flex-row gap-6 text-lg">
            {[
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/sedanur-ceylan-190702/",
              },
              {
                name: "GitHub",
                url: "https://github.com/SedanurCeylan",
              },
              {
                name: "Instagram",
                url: "https://www.instagram.com/sedanur_ceylan_/",
              },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 transition-all duration-300 hover:text-blue-400"
                >
                  <span className="underline-offset-4 group-hover:underline">
                    {item.name}
                  </span>
                  <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ALT BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 border-t border-[rgba(255,255,255,0.15)] text-sm md:text-base">
          <a
            href="mailto:sdnrcyln2@gmail.com"
            className="transition duration-300 hover:text-blue-400 hover:underline"
          >
            sdnrcyln2@gmail.com
          </a>

          <p className="opacity-80">© 2025 Sedanur Ceylan</p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full px-4 py-2 border border-current transition duration-300 hover:text-blue-400 hover:border-blue-400"
            aria-label="Sayfanın en üstüne dön"
          >
            <ArrowUpIcon className="w-4 h-4" />
            Başa Dön
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
