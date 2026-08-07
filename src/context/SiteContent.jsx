"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { defaultSiteContent } from "@/data/siteContent";

const SiteContentContext = createContext(null);

const mergeLanguage = (defaults, saved = {}) => ({
  ...defaults,
  ...saved,
  hero: { ...defaults.hero, ...(saved.hero || {}) },
  about: { ...defaults.about, ...(saved.about || {}), skills: Array.isArray(saved.about?.skills) ? saved.about.skills : defaults.about.skills },
  experience: { ...defaults.experience, ...(saved.experience || {}), items: Array.isArray(saved.experience?.items) ? saved.experience.items : defaults.experience.items },
  education: { ...defaults.education, ...(saved.education || {}), items: Array.isArray(saved.education?.items) ? saved.education.items : defaults.education.items },
  footer: { ...defaults.footer, ...(saved.footer || {}) },
  skills: { ...defaults.skills, ...(saved.skills || {}), categories: Array.isArray(saved.skills?.categories) ? saved.skills.categories : defaults.skills.categories },
  projects: Array.isArray(saved.projects) ? saved.projects : defaults.projects,
});

const normalizeContent = (saved = {}) => ({
  tr: mergeLanguage(defaultSiteContent.tr, saved.tr),
  en: mergeLanguage(defaultSiteContent.en, saved.en),
});

export function SiteContentProvider({ children }) {
  const [content, setContent] = useState(defaultSiteContent);
  const [ready, setReady] = useState(false);
  const [configured, setConfigured] = useState(false);

  useEffect(() => {
    fetch("/api/content").then((response) => response.json()).then((data) => { if (data.content) setContent(normalizeContent(data.content)); setConfigured(Boolean(data.configured)); }).finally(() => setReady(true));
  }, []);

  const saveContent = async (nextContent) => {
    const response = await fetch("/api/content", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ content: nextContent }) });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "İçerik kaydedilemedi.");
    setContent(normalizeContent(nextContent));
  };

  const resetContent = async () => saveContent(defaultSiteContent);

  return <SiteContentContext.Provider value={{ content, ready, configured, saveContent, resetContent }}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  const value = useContext(SiteContentContext);
  if (!value) throw new Error("useSiteContent must be used inside SiteContentProvider");
  return value;
}
