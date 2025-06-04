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
      <section className="container mx-auto px-6 py-24 flex flex-col items-center text-center">
  <h1 className="text-7xl md:text-8xl font-light mb-8 text-[var(--textrenk)] leading-tight">
    &lt;Ben Sedanur Ceylan/&gt;
  </h1>

  <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mb-12">
    <p className="max-w-xl text-lg md:text-2xl text-[var(--textrenk)]/70 italic text-left md:text-center">
      Kod yazmak hayatımın bir parçası. <br />
      Teknolojiyle dünyayı daha iyi bir yer haline getirmeyi hedefliyorum.
    </p>
    <p className="text-5xl md:text-8xl font-normal text-[var(--textrenk)] text-left md:text-right">
      Bilgisayar <br />
      Mühendisi
    </p>
  </div>

  <a
    href="/cv.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-8 py-3 border border-[var(--textrenk)] rounded-md text-[var(--textrenk)] hover:bg-[var(--textrenk)] hover:text-[var(--bgrenk)] transition-colors duration-300">
    CV'mi buradan görüntüleyebilirsiniz
  </a>
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
                    <img
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
