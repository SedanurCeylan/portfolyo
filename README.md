# 🚀 Sedanur Ceylan - Kişisel Portföy Web Sitesi

Bu proje, **Next.js 14 App Router** mimarisi ile geliştirilmiş kişisel bir portföy sitesidir. Hakkımda bilgiler, projelerim, iletişim formu ve modern UI bileşenleri içermektedir. Site tamamen responsive olup hem masaüstü hem mobil cihazlar için optimize edilmiştir.

🔗 Yayında: [sedanurceylan.vercel.app](https://sedanurceylan.vercel.app)

---

## 🛠️ Kullanılan Teknolojiler

- **Next.js 14 (App Router)**
- **React**
- **Tailwind CSS**
- **Framer Motion** (animasyonlar için)
- **Typewriter efekt** (custom)
- **Responsive tasarım**
- **Vercel** (deploy)

---

## ✨ Özellikler
- **Hakkımda bölümü ve kişisel motivasyon yazısı**
- **Dinamik typewriter efekti ile karşılama başlığı**
- **Framer Motion ile giriş animasyonları**
- **%100 responsive tasarım**
- **Kullanıcı dostu arayüz**
- **Temel iletişim formu**
- **SEO uyumlu sayfa yapısı**


---

## 🚧 Kurulum ve Geliştirme

Projeyi kendi bilgisayarınızda çalıştırmak için:

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

## Admin paneli ve Firebase

1. Firebase Console'da Authentication > Sign-in method bölümünden Email/Password sağlayıcısını etkinleştirin ve tek admin kullanıcısını oluşturun.
2. Firestore Database oluşturun. `firebase/firestore.rules` içindeki `ADMIN_EMAIL_BURAYA` değerini admin e-postasıyla değiştirip Rules alanında yayınlayın.
3. Project settings > General > Web apps üzerinden bir web uygulaması ekleyip API key ve Project ID değerlerini alın.
4. Yerel geliştirme için `.env.local`, Vercel için Project Settings > Environment Variables alanına şunları ekleyin:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=FIREBASE_WEB_API_KEY
NEXT_PUBLIC_FIREBASE_PROJECT_ID=FIREBASE_PROJECT_ID
ADMIN_EMAIL=admin@example.com
EMAILJS_SERVICE_ID=service_xxxxx
EMAILJS_TEMPLATE_ID=template_xxxxx
EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx
```

Admin paneli `/admin` adresindedir. Oturum Firebase Authentication ile doğrulanır; içerik değişiklikleri Firestore'daki `site_content/main` dokümanında saklanır.

---

## 📬 İletişim
Her türlü görüş ve öneriniz için benimle iletişime geçebilirsiniz:


📧 sdnrcyln2@gmail.com


🔗 [LinkedIn Profilim](https://www.linkedin.com/in/sedanur-ceylan-190702/)
