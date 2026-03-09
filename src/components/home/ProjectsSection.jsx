"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const settings = {
  dots: true, 
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};


  const projeler = [
     {
      
      title: "Görüntü İşleme ve Derin Öğrenme (MIL) Yaklaşımı ile Elmalarda Erken Dönem Acı Benek Tespiti",
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
      images: ["/aaa.png","/aaa.png","/aaa.png"],
    },
    // {
    //   title: "ZenCode",
    //   description: "Bu Proje henüz geliştirme aşamasındadır detaylar çok yakında eklenecektir.",
    //   github: "https://github.com/SedanurCeylan/ZenCodeNext",
    //   images: ["/yakında.jpg", "/yakında.jpg"],
    // },
  ];

  return (
    <section className="container mx-auto px-4 py-10 projeler">
      <p className="text-textrenk py-4 border-b border-textrenk text-2xl font-semibold">
        Projeler
      </p>
      <div className="grid gap-16 mt-10">
        {projeler.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-6"
          >
            <div>
              <p className="text-3xl md:text-4xl font-semibold">{project.title}</p>
              <p className="text-lg mt-2 text-justify">{project.description}</p>
              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-300 text-textrenk px-4 py-2 rounded shadow-md hover:bg-gray-400 hover:scale-105 transition-all duration-300"
                >
                  Github
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textrenk underline px-4 py-2 hover:text-blue-500 transition-colors duration-300"
                  >
                    Projeye Git
                  </a>
                )}
                {project.youtube && (
                  <a
                    href={project.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textrenk underline px-4 py-2 hover:text-blue-500 transition-colors duration-300"
                  >
                    Youtube 
                  </a>
                )}
                {project.makale && (
                  <a
                    href={project.makale}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textrenk underline px-4 py-2 hover:text-blue-500 transition-colors duration-300"
                  >
                    Makaleye Git
                  </a>
                )}
              </div>
            </div>

            <Slider {...settings}>
              {project.images.map((img, idx) => (
                <div key={idx} className="leading-[0] outline-none">
                 <Image
  src={img}
  width={500}
  height={300}
  alt="..."
  className="w-full h-full object-cover rounded-lg"
/>
                </div>
              ))}
            </Slider>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
