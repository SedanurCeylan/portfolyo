"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useSitePreferences } from "@/context/SitePreferences";

const copy = {
  tr: { label: "MESAJ ALINDI", title: "Teşekkürler.", text: "Mesajınız başarıyla ulaştı. En kısa sürede sizinle iletişime geçeceğim.", home: "Ana sayfaya dön", note: "Genellikle 1–2 iş günü içinde yanıtlıyorum." },
  en: { label: "MESSAGE RECEIVED", title: "Thank you.", text: "Your message has arrived successfully. I'll get back to you as soon as possible.", home: "Return home", note: "I usually reply within 1–2 business days." },
};

export default function ThankYouPage() {
  const { language } = useSitePreferences();
  const reduceMotion = useReducedMotion();
  const t = copy[language];

  return <main className="success-page">
    <div className="success-grid" aria-hidden="true" />
    <motion.section className="success-card" aria-labelledby="success-title" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, ease: [0.22, 1, 0.36, 1] }}>
      <div className="success-mark" aria-hidden="true">✓</div>
      <p className="success-label"><span />{t.label}</p>
      <h1 id="success-title">{t.title}</h1>
      <p className="success-copy">{t.text}</p>
      <Link href="/" className="success-button"><span aria-hidden="true">‹</span>{t.home}</Link>
      <p className="success-note">{t.note}</p>
    </motion.section>
  </main>;
}
