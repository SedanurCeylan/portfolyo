"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // Başarılı ise teşekkür sayfasına yönlendir
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
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-6 text-[var(--textrenk)]">
        İletişim
      </h1>

      <p className="text-center text-lg text-[var(--textrenk)]/80 max-w-2xl mx-auto">
        Herhangi bir sorunuz varsa, aşağıdaki formu doldurmanız yeterli. En kısa sürede sizinle iletişime geçeceğim.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-14 max-w-2xl mx-auto bg-[var(--formrenk)] p-8 md:p-12 rounded-3xl shadow-2xl backdrop-blur-lg border border-[var(--textrenk)]/20"
      >
        <div className="mb-6">
          <label className="block text-md font-medium mb-2 text-[var(--textrenk)]" htmlFor="name">
            Adınız
          </label>
          <input
            className="w-full p-3 border border-gray-400/30 rounded-xl bg-[var(--bgrenk)] text-[var(--textrenk)] focus:outline-none focus:ring-2 focus:ring-[var(--textrenk)] transition"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Adınızı girin"
          />
        </div>

        <div className="mb-6">
          <label className="block text-md font-medium mb-2 text-[var(--textrenk)]" htmlFor="email">
            E-posta
          </label>
          <input
            className="w-full p-3 border border-gray-400/30 rounded-xl bg-[var(--bgrenk)] text-[var(--textrenk)] focus:outline-none focus:ring-2 focus:ring-[var(--textrenk)] transition"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="example@mail.com"
          />
        </div>

        <div className="mb-6">
          <label className="block text-md font-medium mb-2 text-[var(--textrenk)]" htmlFor="message">
            Mesajınız
          </label>
          <textarea
            className="w-full p-3 border border-gray-400/30 rounded-xl bg-[var(--bgrenk)] text-[var(--textrenk)] focus:outline-none focus:ring-2 focus:ring-[var(--textrenk)] transition"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            placeholder="Mesajınızı buraya yazın..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[var(--textrenk)] text-[var(--bgrenk)] py-3 rounded-xl text-lg font-semibold hover:brightness-110 transition duration-300"
        >
          {loading ? "Gönderiliyor..." : "Gönder"}
        </button>
      </form>
    </div>
  );
}
