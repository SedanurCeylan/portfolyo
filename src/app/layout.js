import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SitePreferencesProvider } from "@/context/SitePreferences";
import { SiteContentProvider } from "@/context/SiteContent";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Sedanur Ceylan | Bilgisayar Mühendisi",
  description: "Bilgisayar mühendisi Sedanur Ceylan'ın seçili projeleri, deneyimi ve çalışmalarından oluşan portfolyosu.",
  openGraph: {
    title: "Sedanur Ceylan | Bilgisayar Mühendisi",
    description: "Sedanur Ceylan — Bilgisayar mühendisi ve ürün geliştirici.",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sedanur Ceylan bilgisayar mühendisliği portfolyosu" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{__html:`try{const t=localStorage.getItem('portfolio-theme')||((matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light');document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t}catch(e){}`}} />
      </head>
      <body suppressHydrationWarning>
        <SitePreferencesProvider>
          <SiteContentProvider>
            <Navbar />
            {children}
            <Footer />
          </SiteContentProvider>
        </SitePreferencesProvider>
      </body>
    </html>
  );
}
