"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { defaultSiteContent } from "@/data/siteContent";

const SiteContentContext = createContext(null);

export function SiteContentProvider({ children }) {
  const [content, setContent] = useState(defaultSiteContent);
  const [ready, setReady] = useState(false);
  const [configured, setConfigured] = useState(false);

  useEffect(() => {
    fetch("/api/content").then((response) => response.json()).then((data) => { if (data.content) setContent(data.content); setConfigured(Boolean(data.configured)); }).finally(() => setReady(true));
  }, []);

  const saveContent = async (nextContent) => {
    const response = await fetch("/api/content", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ content: nextContent }) });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "İçerik kaydedilemedi.");
    setContent(nextContent);
  };

  const resetContent = async () => saveContent(defaultSiteContent);

  return <SiteContentContext.Provider value={{ content, ready, configured, saveContent, resetContent }}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  const value = useContext(SiteContentContext);
  if (!value) throw new Error("useSiteContent must be used inside SiteContentProvider");
  return value;
}
