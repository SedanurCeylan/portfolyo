export default function Tesekkur() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bgrenk)] text-[var(--textrenk)] p-6">
      <h1 className="text-5xl font-bold mb-4">Teşekkürler!</h1>
      <p className="text-lg max-w-xl text-center">
        Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime
        geçeceğim.
      </p>
      <a
        href="/"
        className="inline-block px-6 py-3 rounded-lg bg-[var(--textrenk)] text-[var(--bgrenk)] font-medium hover:bg-opacity-90 transition-colors duration-300 mt-3"
      >
        Ana Sayfaya Dön
      </a>
    </div>
  );
}
