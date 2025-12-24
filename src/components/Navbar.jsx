"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full border-b border-textrenk text-textrenk bg-background z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link href="/" className="text-2xl font-semibold hover:text-blue-600 transition-colors duration-300">
          Sedanur Ceylan
        </Link>

        <div className="hidden md:flex gap-7 text-lg">
          <Link
            href="/"
            className="relative group hover:text-blue-600 transition-colors duration-300"
          >
            Anasayfa
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/iletisim"
            className="relative group hover:text-blue-600 transition-colors duration-300"
          >
            İletişim
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
        </div>

        <div className="hidden md:block">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg md:text-xl font-medium text-[var(--textrenk)] hover:text-blue-600 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <span className="relative group">
              CV Görüntüle
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
            </span>
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
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
          <Link
            href="/"
            className="block font-medium text-[var(--textrenk)] hover:text-blue-600 transition-colors duration-300"
          >
            Anasayfa
          </Link>
          <Link
            href="/iletisim"
            className="block font-medium text-[var(--textrenk)] hover:text-blue-600 transition-colors duration-300"
          >
            İletişim
          </Link>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block font-medium text-[var(--textrenk)] hover:text-blue-600 transition-colors duration-300"
          >
            CV Görüntüle
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
