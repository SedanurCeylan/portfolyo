"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/mgvyvbrw", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/tesekkur");
      } else {
        alert("Gönderim başarısız oldu, lütfen tekrar deneyin.");
      }
    } catch (error) {
      alert("Bir hata oluştu, lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-28">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-center mb-6 text-[var(--textrenk)]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        İletişim
      </motion.h1>

      <motion.p
        className="text-center text-lg text-[var(--textrenk)]/80 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Herhangi bir sorunuz varsa, aşağıdaki formu doldurmanız yeterli. En kısa sürede sizinle iletişime geçeceğim.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="mt-14 max-w-2xl mx-auto bg-[var(--formrenk)] p-8 md:p-12 rounded-3xl shadow-2xl border border-[var(--textrenk)]/20 backdrop-blur-md space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div>
          <label htmlFor="name" className="block text-md font-semibold text-[var(--textrenk)] mb-2">
            Adınız
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Adınızı girin"
            className="w-full p-3 rounded-xl bg-[var(--bgrenk)] border border-gray-400/30 text-[var(--textrenk)] focus:outline-none focus:ring-2 focus:ring-[var(--textrenk)] transition"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-md font-semibold text-[var(--textrenk)] mb-2">
            E-posta
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="example@mail.com"
            className="w-full p-3 rounded-xl bg-[var(--bgrenk)] border border-gray-400/30 text-[var(--textrenk)] focus:outline-none focus:ring-2 focus:ring-[var(--textrenk)] transition"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-md font-semibold text-[var(--textrenk)] mb-2">
            Mesajınız
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            placeholder="Mesajınızı buraya yazın..."
            className="w-full p-3 rounded-xl bg-[var(--bgrenk)] border border-gray-400/30 text-[var(--textrenk)] focus:outline-none focus:ring-2 focus:ring-[var(--textrenk)] transition resize-none"
          ></textarea>
        </div>

       <motion.button
  type="submit"
  disabled={loading}
  whileTap={{ scale: 0.95 }}
  whileHover={{ scale: 1.03 }} 
  className="w-full flex justify-center items-center gap-2 bg-[var(--textrenk)] text-[var(--bgrenk)] py-3 rounded-xl text-lg font-semibold hover:brightness-110 hover:shadow-lg transition duration-300 disabled:opacity-60"
>
  <PaperAirplaneIcon className="h-5 w-5" />
  {loading ? "Gönderiliyor..." : "Gönder"}
</motion.button>

      </motion.form>
    </div>
  );
}
