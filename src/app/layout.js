import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import Head from "next/head"; 

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sedanur Ceylan",
  description: "Made by Sedanur Ceylan",
};

export default function RootLayout({ children }) {
  return (
      <html lang="tr">

      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
          rel="stylesheet"
        />
      </Head>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <div className="container mx-auto py-2">
         <Navbar />
          {children}
        </div>
        <Footer />

        <Script
          src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
