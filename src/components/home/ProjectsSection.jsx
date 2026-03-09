"use client";

import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const [viewer, setViewer] = useState({
    images: [],
    index: 0,
    title: "",
  });

  const isViewerOpen = viewer.images.length > 0;

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const projeler = [
    {
      title:
        "Görüntü İşleme ve Derin Öğrenme (MIL) Yaklaşımı ile Elmalarda Erken Dönem Acı Benek Tespiti",
      description:
        "Deep Think Teknoloji bünyesinde geliştirdiğimiz bu projede, elmalarda erken dönem acı benek (bitter pit) hastalığının tespiti amaçlanmıştır. Bu kapsamda 4 ay boyunca 1800 elma örneğinden RGB endüstriyel kameralar kullanılarak görüntü verisi toplanmış, elde edilen görüntülere çeşitli görüntü önişleme yöntemleri uygulanmıştır. Toplanan veriler kullanılarak derin öğrenme tabanlı Çoklu Örnekli Öğrenme (Multiple Instance Learning – MIL) yaklaşımı ile hastalığın erken evrede tespit edilmesi hedeflenmiştir.",
      images: ["/sirket.png", "/sirket.png", "/sirket.png"],
    },
    {
      title: "Kripto Al-Sat Paneli",
      description:
        "Next.js, Firebase ve CoinMarketCap API kullanarak; kullanıcıların kripto para alım-satımı yapabildiği, favori coin takibi ve cüzdan yönetimi gibi özellikler içeren bir platform geliştirdim.",
      github: "https://github.com/SedanurCeylan/TurkcellFinal",
      live: "https://cryptoproject-ten.vercel.app/en",
      images: ["/1.jpeg", "/2.jpeg", "/4.jpeg", "/5.jpeg", "/6.jpeg"],
    },
    {
      title: "(TUBITAK 2209-A) IoT Sızma Testleri İçin Üretici Yapay Zeka Destekli Web Platformu",
      description:
        "IoT sızma testleri için geliştirilen bu web platformu, GAN mimarisine sahip iki yapay sinir ağı kullanarak, derin öğrenme ile işlenen verilerden gerçekçi ve özgün zararlı yazılım veri setleri üretir. Bu veri setleri, kullanıcı dostu bir web arayüzü üzerinden sunulmaktadır. Proje kapsamında hazırlanan “IoT Siber Tehdit Senaryoları Kullanılarak Generatif Yapay Zeka Destekli Web Platformu ile Siber Güvenlik Eğitimi” başlıklı makalemiz IEEE Xplore ’da yayımlanmıştır.",
      github: "https://github.com/SedanurCeylan/tubitakprojesi",
      makale: "https://ieeexplore.ieee.org/document/10778718",
      images: ["/11.jpeg", "/21.jpeg", "/31.jpeg"],
    },
    {
      title: "ASP.NET ile E-Ticaret",
      description:
        "Bu proje, ASP.NET (.NET 9) kullanılarak geliştirilmiş temel bir e-ticaret uygulamasıdır. Uygulama; ürün listeleme, ürün detayları, sepet işlemleri, sipariş oluşturma ve yönetim paneli (Admin Panel) gibi bir e-ticaret sisteminde bulunması gereken temel fonksiyonları içerir. Veri yapısı Entity Framework Core (Code-First) ile oluşturulmuş, veritabanı olarak SQLite kullanılmıştır. Kullanıcı yönetimi için ASP.NET Identity altyapısı projeye entegre edilmiştir. (Henüz eksikleri mevcuttur güncellenmeye devam edecektir).",
      github: "https://github.com/SedanurCeylan/eticaret-v1",
      youtube: "https://youtu.be/MT3d4ME_MZc",
      images: ["/aaa.png", "/aaa.png", "/aaa.png"],
    },
  ];

  const openViewer = (images, index, title) => {
    setViewer({
      images,
      index,
      title,
    });
  };

  const closeViewer = () => {
    setViewer({
      images: [],
      index: 0,
      title: "",
    });
  };

  const showPrev = () => {
    setViewer((prev) => ({
      ...prev,
      index: prev.index === 0 ? prev.images.length - 1 : prev.index - 1,
    }));
  };

  const showNext = () => {
    setViewer((prev) => ({
      ...prev,
      index: prev.index === prev.images.length - 1 ? 0 : prev.index + 1,
    }));
  };

  useEffect(() => {
    if (!isViewerOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeViewer();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isViewerOpen]);

  return (
    <>
      <section className="container mx-auto px-4 py-10 projeler">
        <p className="text-textrenk py-4 border-b border-textrenk text-2xl font-semibold">
          Projeler
        </p>

        <div className="grid gap-12 mt-10">
          {projeler.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.18)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.24)] transition-all duration-500 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-5 md:p-8">
                <div className="flex flex-col justify-center">
                  <p className="text-textrenk text-3xl md:text-4xl font-semibold leading-tight">
                    {project.title}
                  </p>

                  <p className="text-base md:text-lg mt-4 text-justify text-textrenk/80 leading-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-6">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-black px-6 py-3 text-base font-semibold !text-white shadow-md transition-all duration-300 hover:scale-105 hover:opacity-90"
                      >
                        Github
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-black px-6 py-3 text-base font-semibold !text-black transition-all duration-300 hover:bg-black hover:!text-white"
                      >
                        Siteye Git
                      </a>
                    )}

                    {project.youtube && (
                      <a
                        href={project.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-black px-6 py-3 text-base font-semibold !text-black transition-all duration-300 hover:bg-black hover:!text-white"
                      >
                        Youtube
                      </a>
                    )}

                    {project.makale && (
                      <a
                        href={project.makale}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-black px-6 py-3 text-base font-semibold !text-black transition-all duration-300 hover:bg-black hover:!text-white"
                      >
                        Makaleye Git
                      </a>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <div className="rounded-[24px] overflow-hidden border border-white/10 bg-black/5 p-3 shadow-[0_8px_30px_rgba(0,0,0,0.22)]">
                    <Slider {...settings}>
                      {project.images.map((img, idx) => (
                        <div
                          key={idx}
                          className="outline-none cursor-pointer"
                          onClick={() => openViewer(project.images, idx, project.title)}
                        >
                          <div className="relative w-full h-[220px] sm:h-[260px] md:h-[340px] rounded-[18px] overflow-hidden bg-white">
                            <Image
                              src={img}
                              fill
                              alt={`${project.title} ${idx + 1}`}
                              className="object-contain md:object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {isViewerOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-3 sm:p-6"
          onClick={closeViewer}
        >
          <div
            className="relative w-full max-w-6xl h-[72vh] sm:h-[80vh] md:h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between gap-4 px-2 sm:px-0 -top-14">
              <div className="text-white text-sm sm:text-base font-medium max-w-[70%] truncate">
                {viewer.title}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-white/80 text-sm sm:text-base">
                  {viewer.index + 1} / {viewer.images.length}
                </span>

                <button
                  onClick={closeViewer}
                  className="text-white text-3xl leading-none hover:opacity-80 transition"
                  aria-label="Kapat"
                >
                  ×
                </button>
              </div>
            </div>

            <button
              onClick={showPrev}
              className="absolute left-2 sm:left-4 md:-left-16 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white text-2xl backdrop-blur-md transition hover:bg-white/20"
              aria-label="Önceki görsel"
            >
              ‹
            </button>

            <button
              onClick={showNext}
              className="absolute right-2 sm:right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white text-2xl backdrop-blur-md transition hover:bg-white/20"
              aria-label="Sonraki görsel"
            >
              ›
            </button>

            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white shadow-2xl">
              <Image
                src={viewer.images[viewer.index]}
                fill
                alt={`${viewer.title} ${viewer.index + 1}`}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}