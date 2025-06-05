"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-textrenk text-textrenk fixed-top">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="text-2xl font-semibold">Sedanur Ceylan</div>

        <div className="hidden md:flex gap-7 text-lg">
          <Link href="/">Anasayfa</Link>
          <Link href="/iletisim">İletişim</Link>
        </div>

        <div className="hidden md:block">Isparta-Ankara</div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-lg">
          <Link href="/" className="block">Anasayfa</Link>
          <Link href="/hakkimda" className="block">Hakkımda</Link>
          <Link href="/projeler" className="block">Proje</Link>
          <Link href="/iletisim" className="block">İletişim</Link>
          <div className="pt-2 text-sm text-gray-400">21:58</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
