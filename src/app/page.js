"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useState } from "react";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const deneyimler = [
    {
      company: "Newky Bilgi Teknolojileri",
      position: "Stajyer Mühendis",
      period: "10/2024 – 01/2025",
      description:
        "Araçlara yönelik düzenlenen siber saldırılar üzerine çalıştım...",
    },
    {
      company: "İnterProbe Bilgi Teknolojileri",
      position: "Stajyer Mühendis",
      period: "07/2023 – 08/2023",
      description:
        "Siber Operasyonlar Merkezi’nde, siber tehdit istihbaratı alanında görev yaptım...",
    },
    {
      company: "BTK",
      position: "Stajyer Mühendis",
      period: "07/2022 – 08/2022",
      description:
        "BTK Akademisi’nde siber güvenlik eğitimi aldım ve zafiyet analizleri gerçekleştirdim...",
    },
  ];

  const [seciliDeneyim, setSeciliDeneyim] = useState(deneyimler[0]);

  const projeler = [
    {
      title: "TÜBİTAK Projesi",
      description: "Proje 1 açıklaması burada yer alacak...",
      github: "https://github.com/SedanurCeylan/tubitakprojesi",
      images: ["/11.jpeg", "/21.jpeg", "/31.jpeg"],
    },
    {
      title: "Portfolio Web Uygulaması",
      description: "Bu projede kişisel portfolyo sitesi geliştirildi...",
      github: "https://github.com/SedanurCeylan/portfolyo",
      images: ["/11.jpeg", "/21.jpeg", "/31.jpeg"],
    },
    {
      title: "Kripto Al-Sat Paneli",
      description:
        "Kullanıcı girişi sonrası Binance testnet üzerinden kripto alım-satımı yapıldı...",
      github: "https://github.com/SedanurCeylan/TurkcellFinal",
      live: "https://cryptoproject-ten.vercel.app/en",
      images: ["/1.jpeg", "/2.jpeg", "/3.jpeg", "/4.jpeg", "/5.jpeg", "/6.jpeg"],
    },
    {
      title: "İK Projesi",
      description: "Henüz geliştirme aşamasında olan bu projede...",
      github: "https://github.com/SedanurCeylan/ZenCodeNext",
      images: ["2.jpeg", "2.jpeg", "2.jpeg"],
    },
  ];

  return (
    <div>
      <section className="container mx-auto px-6 py-40 max-w-6xl flex flex-col gap-20 text-left">
        <div className="space-y-6">
          <h1 className="text-[42px] md:text-[68px] font-extrabold text-[var(--textrenk)] leading-tight tracking-tight">
            <span className="text-blue-500">&lt;</span>
            Ben Sedanur Ceylan
            <span className="text-blue-500">/&gt;</span>
          </h1>
          <p className="text-lg md:text-2xl text-[var(--textrenk)]/80 font-light max-w-3xl leading-relaxed">
            Bilgisayar Mühendisi olarak, yazılımı sadece bir meslek değil; bir tutku olarak görüyorum.
            <br className="hidden md:block" />
            Kullanıcı dostu, hızlı ve modern arayüzler geliştirmeyi seviyorum.
          </p>
        </div>

        {/* <div className="bg-[var(--bgrenk)] border border-[var(--textrenk)]/30 rounded-2xl p-6 md:p-10 shadow-2xl font-mono text-sm md:text-base text-[var(--textrenk)] leading-relaxed relative overflow-hidden">
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <p className="mt-6 text-green-400">// Hakkımda kısa bilgi</p>
          <p>const <span className="text-blue-400">gelistirici</span> = &#123;</p>
          <p className="ml-6">isim: <span className="text-pink-300">Sedanur Ceylan</span>,</p>
          <p className="ml-6">unvan: <span className="text-pink-300">Bilgisayar Mühendisi</span>,</p>
          <p className="ml-6">
            beceriler: [<span className="text-pink-300">React</span>, <span className="text-pink-300">Next.js</span>, <span className="text-pink-300">SCSS</span>],
          </p>
          <p className="ml-6">vizyon: <span className="text-yellow-300">Kodla değer üretmek</span></p>
          <p>&#125;;</p>
        </div> */}

        <div>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg md:text-xl font-medium text-[var(--textrenk)] border-b-2 border-[var(--textrenk)] hover:text-blue-500 hover:border-blue-500 transition duration-300"
          >
            ↳ CV’mi buradan inceleyebilirsiniz
          </a>
        </div>
      </section>




      <section className="container mx-auto px-4 py-10">
        <p className="text-textrenk py-4 border-b border-textrenk text-2xl font-semibold">
          Hakkımda
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-10">
          <p className="max-w-[1000px] text-justify text-lg md:text-2xl">
            Merhaba! Ben Sedanur Ceylan. Yazılım geliştirmeye tutkuyla bağlı,
            sürekli öğrenmeye ve kendimi geliştirmeye açık bir mühendis aday
            ıyım. Farklı projelerde edindiğim deneyimler ile her geçen gün daha
            iyiye ulaşmayı hedefliyorum.
          </p>
          <img
            src="/foto.jpeg"
            alt="Hakkımda Resmi"
            className="w-32 md:w-48 rounded-full"
          />
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <p className="text-textrenk py-4 border-b border-textrenk text-2xl font-semibold">
          Eğitim
        </p>
        <div className="flex flex-col md:flex-row justify-between mt-10">
          <div className="text-xl md:text-2xl">
            <p>Bilgisayar Mühendisliği</p>
            <p>Süleyman Demirel Üniversitesi</p>
          </div>
          <div className="text-xl md:text-2xl mt-4 md:mt-0">2020-2024</div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <p className="text-textrenk py-4 border-b border-textrenk text-2xl font-semibold">
          Projeler
        </p>

        <div className="grid gap-16 mt-10">
          {projeler.map((project, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2 items-center gap-6"
            >
              <div>
                <p className="text-3xl md:text-4xl font-semibold">
                  {project.title}
                </p>
                <p className="text-lg mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-300 hover:bg-gray-400 text-textrenk px-4 py-2 rounded"
                  >
                    Github
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-textrenk px-4 py-2"
                    >
                      Projeye Git
                    </a>
                  )}
                </div>
              </div>

              <Slider {...settings}>
                {project.images.map((img, idx) => (
                  <div key={idx}>
                    <Image
                      src={img}
                      alt={`${project.title} Resmi ${idx + 1}`}
                      className="w-full max-w-4xl mx-auto rounded"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-10 mb-10">
        <p className="text-textrenk py-4 border-b border-textrenk text-2xl font-semibold">
          Deneyimler
        </p>
        <div className="flex flex-col md:flex-row items-start mt-10 gap-6">
          <div className="w-full md:w-2/3 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="divide-y divide-gray-200">
                {deneyimler.map((deneyim, idx) => (
                  <tr
                    key={idx}
                    onClick={() => setSeciliDeneyim(deneyim)}
                    className={`cursor-pointer hover:bg-gray-100 ${seciliDeneyim.company === deneyim.company
                      ? "bg-gray-200"
                      : ""
                      }`}
                  >
                    <td className="px-3 py-4 whitespace-nowrap text-sm md:text-xl">
                      {deneyim.company}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm md:text-xl">
                      {deneyim.position}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm md:text-xl">
                      {deneyim.period}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-full md:w-1/3">
            <p className="text-lg md:text-xl font-medium text-gray-700">
              {seciliDeneyim.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
