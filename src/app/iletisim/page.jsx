"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useSitePreferences } from "@/context/SitePreferences";
import { useRouter } from "next/navigation";

const copy={tr:{title:"İletişim",intro:"Bir proje, iş birliği veya yalnızca merhaba demek için bana yazabilirsiniz. En kısa sürede dönüş yapacağım.",name:"Adınız",namePlaceholder:"Adınızı girin",email:"E-posta",message:"Mesajınız",messagePlaceholder:"Projenizden veya fikrinizden bahsedin...",send:"Mesajı gönder",sending:"Gönderiliyor…",fallback:"Mesaj gönderilemedi."},en:{title:"Contact",intro:"Have a project, a collaboration in mind, or simply want to say hello? Send me a message and I'll get back to you shortly.",name:"Your name",namePlaceholder:"Enter your name",email:"Email",message:"Your message",messagePlaceholder:"Tell me about your project or idea...",send:"Send message",sending:"Sending…",fallback:"Message could not be sent."}};

export default function ContactPage() {
  const {language}=useSitePreferences();const t=copy[language];
  const router=useRouter();
  const [submitting,setSubmitting]=useState(false);
  const [error,setError]=useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);setError("");
    try { const response=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(formData)});const data=await response.json();if(!response.ok)throw new Error(data.error||t.fallback);router.push("/tesekkur"); }
    catch(submitError){setError(submitError.message||t.fallback);setSubmitting(false);}
  };

  return (
    <section className="relative overflow-hidden container mx-auto px-4 py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-12 h-56 w-56 -translate-x-1/2 rounded-full bg-[var(--textrenk)]/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-44 w-44 rounded-full bg-[var(--textrenk)]/8 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <input type="text" name="website" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />

        <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-5 text-[var(--textrenk)] leading-tight">
          {t.title}
        </h1>

        <p className="text-center text-base md:text-lg text-[var(--textrenk)]/80 max-w-2xl mx-auto leading-8">
         {t.intro}
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="relative mt-14 max-w-2xl mx-auto rounded-[28px] border border-[var(--textrenk)]/15 bg-[var(--formrenk)]/90 p-6 md:p-10 shadow-[0_18px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.7 }}
      >
        <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm md:text-base font-semibold text-[var(--textrenk)]"
              >
                {t.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t.namePlaceholder}
                className="w-full rounded-2xl border border-[var(--textrenk)]/15 bg-[var(--bgrenk)]/80 px-4 py-3.5 text-[var(--textrenk)] placeholder:text-[var(--textrenk)]/45 outline-none transition duration-300 focus:border-[var(--textrenk)]/40 focus:ring-4 focus:ring-[var(--textrenk)]/10"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm md:text-base font-semibold text-[var(--textrenk)]"
              >
                {t.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@mail.com"
                className="w-full rounded-2xl border border-[var(--textrenk)]/15 bg-[var(--bgrenk)]/80 px-4 py-3.5 text-[var(--textrenk)] placeholder:text-[var(--textrenk)]/45 outline-none transition duration-300 focus:border-[var(--textrenk)]/40 focus:ring-4 focus:ring-[var(--textrenk)]/10"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm md:text-base font-semibold text-[var(--textrenk)]"
            >
              {t.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              placeholder={t.messagePlaceholder}
              className="w-full rounded-2xl border border-[var(--textrenk)]/15 bg-[var(--bgrenk)]/80 px-4 py-3.5 text-[var(--textrenk)] placeholder:text-[var(--textrenk)]/45 outline-none transition duration-300 focus:border-[var(--textrenk)]/40 focus:ring-4 focus:ring-[var(--textrenk)]/10 resize-none"
            />
          </div>

          <motion.button
            type="submit"
            disabled={submitting}
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.01 }}
            className="group w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--textrenk)] px-6 py-4 text-base md:text-lg font-semibold text-[var(--bgrenk)] shadow-[0_12px_30px_rgba(0,0,0,0.16)] transition duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <PaperAirplaneIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            {submitting?t.sending:t.send}
          </motion.button>
          {error&&<p className="text-sm text-red-600" role="alert">{error}</p>}
        </div>
      </motion.form>
    </section>
  );
}
