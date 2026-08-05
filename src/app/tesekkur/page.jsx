"use client";

import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useSitePreferences } from "@/context/SitePreferences";

const copy={tr:{title:"Teşekkürler!",text:"Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğim.",home:"Ana sayfaya dön"},en:{title:"Thank you!",text:"Your message has been sent successfully. I'll get back to you as soon as possible.",home:"Return home"}};

export default function Tesekkur() {
  const{language}=useSitePreferences();const t=copy[language];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bgrenk)] text-[var(--textrenk)] p-6">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        className="mb-6"
      >
        <CheckCircleIcon className="w-24 h-24 text-green-500" />
      </motion.div>

      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-5xl font-bold mb-4 text-center drop-shadow-sm"
      >
        {t.title}
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-lg max-w-xl text-center text-opacity-90"
      >
        {t.text}
      </motion.p>

      <motion.a
        href="/"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="inline-block px-6 py-3 rounded-lg bg-[var(--textrenk)] text-[var(--bgrenk)] font-semibold mt-6 shadow-md hover:shadow-lg transition duration-300"
      >
        {t.home}
      </motion.a>
    </div>
  );
}
