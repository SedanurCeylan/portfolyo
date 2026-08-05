"use client";

import { createContext, useContext, useEffect, useState } from "react";

const SitePreferencesContext = createContext(null);

export function SitePreferencesProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("tr");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const savedLanguage = localStorage.getItem("portfolio-language");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const preferredLanguage = navigator.language?.toLowerCase().startsWith("en") ? "en" : "tr";
    setTheme(savedTheme || preferredTheme);
    setLanguage(savedLanguage || preferredLanguage);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = language;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("portfolio-theme", theme);
    localStorage.setItem("portfolio-language", language);
  }, [theme, language, ready]);

  const toggleTheme = () => setTheme((value) => value === "dark" ? "light" : "dark");
  const toggleLanguage = () => setLanguage((value) => value === "tr" ? "en" : "tr");

  return <SitePreferencesContext.Provider value={{ theme, language, toggleTheme, toggleLanguage }}>
    {children}
  </SitePreferencesContext.Provider>;
}

export function useSitePreferences() {
  const context = useContext(SitePreferencesContext);
  if (!context) throw new Error("useSitePreferences must be used inside SitePreferencesProvider");
  return context;
}
