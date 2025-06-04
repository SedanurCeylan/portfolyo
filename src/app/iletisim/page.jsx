import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 text-[var(--textrenk)]">
        İletişim
      </h1>
      <p className="text-center text-lg text-[var(--textrenk)] max-w-xl mx-auto">
        Herhangi bir sorunuz varsa lütfen aşağıdaki formu doldurun. En kısa sürede size geri döneceğim.
      </p>

      <form className="mt-12 max-w-2xl mx-auto bg-[var(--formrenk)] p-8 md:p-10 rounded-2xl shadow-lg">
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2 text-[var(--textrenk)]" htmlFor="name">
            Adınız
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg bg-[var(--bgrenk)] focus:outline-none focus:ring-2 focus:ring-[var(--textrenk)] transition"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2 text-[var(--textrenk)]" htmlFor="email">
            E-posta
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg bg-[var(--bgrenk)] focus:outline-none focus:ring-2 focus:ring-[var(--textrenk)] transition"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium mb-2 text-[var(--textrenk)]" htmlFor="message">
            Mesajınız
          </label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg bg-[var(--bgrenk)] focus:outline-none focus:ring-2 focus:ring-[var(--textrenk)] transition"
            id="message"
            name="message"
            rows="5"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[var(--textrenk)] text-[var(--bgrenk)] py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition"
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
