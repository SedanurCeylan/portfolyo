"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useState } from "react";

export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const deneyimler = [
    {
      company: "Newky Bilgi Teknolojileri",
      position: "Stajyer Mühendis",
      period: "10/2024 – 01/2025",
      description:
        "Araçlara yönelik düzenlenen siber saldırılar üzerine çalıştım. Farklı veri setlerini analiz ederek araç güvenliğini tehdit eden zafiyetleri tespit etmeye odaklandım. Saldırı türlerinin sınıflandırılması ve bu saldırıların araç sistemleri üzerindeki etkilerinin incelenmesi üzerine görev aldım.",
    },
    {
      company: "İnterProbe Bilgi Teknolojileri",
      position: "Stajyer Mühendis",
      period: "07/2023 – 08/2023",
      description:
        "Siber Operasyonlar Merkezi’nde, siber tehdit istihbaratı alanında görev yaptım. OSINT(Açık Kaynak İstihbaratı) teknikleri kullanarak dijital platformlardan elde edilen verileri analiz edip değerlendirdim.",
    },
    {
      company: "Bilgi Teknolojileri ve İletişim Kurumu (BTK)",
      position: "Stajyer Mühendis",
      period: "07/2022 – 08/2022",
      description:
        "Sunucu sistemlerinin yapısı ve çalışma prensipleri üzerine bilgi edindim. BTK Akademisi’nde siber güvenlik eğitimi alarak zararlı yazılımlar, saldırı türleri ve sistem zafiyetleri üzerine çalıştım. Ayrıca Fetih Siber Talimhane platformunda zafiyet analizleri yaparak sızma testi deneyimi kazandım.",
    },
  ];
  const [seciliDeneyim, setSeciliDeneyim] = useState(deneyimler[0]);
  return (

    <div>
      <section className="giris container mx-auto py-10">
        <p className="text-center text-8xl text-textrenk">
          * Ben Sedanur Ceylan.
        </p>
      </section>

      <section className="hakkimda container mx-auto py-10">
        <p className="text-textrenk py-4 border-b border-textrenk text-2xl font-semibold">
          Hakkımda
        </p>
        <div className="flex items-center justify-between mt-10 flex-col md:flex-row gap-10">
          <p className="max-w-[1000px] text-justify text-2xl">
            Merhaba! Ben Sedanur Ceylan. 2002 yılında Isparta’da doğdum.
            Süleyman Demirel Üniversitesi Bilgisayar Mühendisliği bölümünden
            mezun oldum. Yazılım dünyasına olan ilgim, sadece bir meslek değil;
            aynı zamanda tutkuyla bağlı olduğum bir gelişim yolculuğuna dönüştü.
            <br />
            Kendimi sürekli yenileyerek, farklı teknolojileri deneyimlediğim
            projeler geliştiriyorum. Amacım, öğrendiğim bilgileri gerçek dünya
            problemlerine uygulayarak hem bireysel gelişimime katkı sağlamak hem
            de topluma fayda sunan çözümler üretmek. Her yeni projede, yazılım
            alanındaki bilgi ve becerilerimi bir adım daha ileri taşıma
            hedefindeyim.
          </p>
          <img
            src="/foto.jpeg"
            alt="Hakkımda Resmi"
            className="w-32 md:w-48 rounded-full"
          />
        </div>
      </section>

      <section className="egitim container mx-auto py-10">
        <p className="text-textrenk py-4 border-b border-textrenk text-2xl font-semibold">
          Eğitim
        </p>
        <div className="flex justify-between">
          <div className="my-10">
            <p className="text-2xl">Bilgisayar Mühendisliği</p>
            <p className="text-xl">Süleyman Demirel Üniversitesi</p>
          </div>
          <div className="my-10 text-xl">2020-2024</div>
        </div>
      </section>
      <section className="proje container mx-auto py-10">
        <p className="text-textrenk py-4 border-b border-textrenk text-2xl font-semibold">
          Projeler
        </p>

        <div className="grid gap-10 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <div>
              <p className="text-4xl font-semibold">TÜBİTAK Projesi</p>
              <p className="text-lg mt-2">
                Proje 1 açıklaması burada yer alacak. Projenin amacı, kullanılan
                teknolojiler ve elde edilen sonuçlar hakkında bilgi vereceğim.
              </p>
              <a
                href="https://github.com/SedanurCeylan/tubitakprojesi"
                className="bg-(--formrenk) text-textrenk px-4 py-2 mt-4 rounded transition"
              >
                Github
              </a>
            </div>
            <Slider {...settings}>
              <div>
                <h3>
                  <img
                    src="/kripto.png"
                    alt="Proje 3 Resmi"
                    className="w-full max-w-4xl mx-auto rounded"
                  />
                </h3>
              </div>
              <div>
                <h3>
                  <img
                    src="/kripto.png"
                    alt="Proje 3 Resmi"
                    className="w-full max-w-4xl mx-auto rounded"
                  />
                </h3>
              </div>
              <div>
                <h3>
                  <img
                    src="/kripto.png"
                    alt="Proje 3 Resmi"
                    className="w-full max-w-4xl mx-auto rounded"
                  />
                </h3>
              </div>
            </Slider>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <Slider {...settings}>
              <div>
                <h3>
                  <img
                    src="/kripto.png"
                    alt="Proje 3 Resmi"
                    className="w-full max-w-4xl mx-auto rounded"
                  />
                </h3>
              </div>
              <div>
                <h3>
                  <img
                    src="/kripto.png"
                    alt="Proje 3 Resmi"
                    className="w-full max-w-4xl mx-auto rounded"
                  />
                </h3>
              </div>
              <div>
                <h3>
                  <img
                    src="/kripto.png"
                    alt="Proje 3 Resmi"
                    className="w-full max-w-4xl mx-auto rounded"
                  />
                </h3>
              </div>
            </Slider>
            <div>
              <p className="text-4xl font-semibold">Portfolio Web Uygulaması</p>
              <p className="text-lg mt-2">
                Bu projede kişisel portfolyo sitesi geliştirildi. Next.js,
                Tailwind ve Framer Motion ile dinamik ve responsive bir yapı
                kuruldu.
              </p>
              <a
                href="https://github.com/SedanurCeylan/portfolyo"
                className="bg-(--formrenk) text-textrenk px-4 py-2 mt-4 rounded transition"
              >
                Github
              </a>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <div>
              <p className="text-4xl font-semibold">Kripto Al-Sat Paneli</p>
              <p className="text-lg mt-2">
                Kullanıcı girişi sonrası Binance testnet üzerinden kripto para
                alım-satımı yapılan bir panel oluşturuldu. Zustand, Firebase ve
                CoinGecko API kullanıldı.
              </p>
              <a
                href="https://github.com/SedanurCeylan/TurkcellFinal"
                className="bg-(--formrenk) text-textrenk px-4 py-2 mt-4 rounded transition"
              >
                Github
              </a>
              <a
                href="https://cryptoproject-ten.vercel.app/en"
                className=" text-textrenk px-4 py-2 mt-4 rounded transition underline"
              >
                Projeye git
              </a>
            </div>
            <Slider {...settings}>
              <div>
                <h3>
                  <img
                    src="/kripto.png"
                    alt="Proje 3 Resmi"
                    className="w-full max-w-4xl mx-auto rounded"
                  />
                </h3>
              </div>
              <div>
                <h3>
                  <img
                    src="/kripto.png"
                    alt="Proje 3 Resmi"
                    className="w-full max-w-4xl mx-auto rounded"
                  />
                </h3>
              </div>
              <div>
                <h3>
                  <img
                    src="/kripto.png"
                    alt="Proje 3 Resmi"
                    className="w-full max-w-4xl mx-auto rounded"
                  />
                </h3>
              </div>
            </Slider>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">

            <Slider {...settings}>
              <div>
                <h3>
                  <img
                    src="/kripto.png"
                    alt="Proje 3 Resmi"
                    className="w-full max-w-4xl mx-auto rounded"
                  />
                </h3>
              </div>
              <div>
                <h3>
                  <img
                    src="/kripto.png"
                    alt="Proje 3 Resmi"
                    className="w-full max-w-4xl mx-auto rounded"
                  />
                </h3>
              </div>
              <div>
                <h3>
                  <img
                    src="/kripto.png"
                    alt="Proje 3 Resmi"
                    className="w-full max-w-4xl mx-auto rounded"
                  />
                </h3>
              </div>
            </Slider>
            <div>
              <p className="text-4xl font-semibold ">İK Projesi</p>
              <p className="text-lg mt-2">
                Henüz Geliştirme aşamasında olan bu projede, insan kaynakları
                süreçlerini kolaylaştıracak bir uygulama geliştiriliyor. Proje
                tamamlandığında detaylar eklenecek.
              </p>
              <a
                href="https://github.com/SedanurCeylan/ZenCodeNext"
                className="bg-(--formrenk) text-textrenk px-4 py-2 mt-4 rounded transition"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="deneyim container mx-auto py-10 mb-10">
        <p className="text-textrenk py-4 border-b border-textrenk text-2xl font-semibold">
          Deneyimler
        </p>
        <div className="flex flex-col md:flex-row items-start mt-10 gap-6">
          <div className="w-full md:w-2/3 overflow-x-auto order-1 md:order-none">
            <table className="min-w-full divide-y-2 divide-gray-200">
              <tbody className="divide-y divide-gray-200">
                {deneyimler.map((deneyim, idx) => (
                  <tr
                    key={idx}
                    onClick={() => setSeciliDeneyim(deneyim)}
                    className={`cursor-pointer *:text-gray-900 *:first:font-medium ${seciliDeneyim.company === deneyim.company ? "bg-gray-200" : ""
                      }`}
                  >
                    <td className="px-3 py-4 whitespace-nowrap text-xl ">{deneyim.company}</td>
                    <td className="px-3 py-4 whitespace-nowrap text-xl ">{deneyim.position}</td>
                    <td className="px-3 py-4 whitespace-nowrap text-xl ">{deneyim.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-full md:w-1/3 order-2 md:order-none">
            <p className="text-xl font-medium text-gray-700">{seciliDeneyim.description}</p>
          </div>
        </div>
      </section>

    </div>
  );
}
