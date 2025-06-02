

export default function Home() {
  return (
    <div>
       <section className="giris container mx-auto py-10">
          
          
      </section>
      <section className="hakkimda container mx-auto py-10">
          <p className="text-textrenk py-4 border-b border-textrenk text-xl font-semibold">Hakkımda</p>
          <div className="flex items-center justify-between mt-10">
            <p>
              lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <img src="https://picsum.photos/100/100" alt="Hakkımda Resmi" className=" h-auto mt-4 rounded-lg shadow-lg " />
          </div>
      </section>
      <section className="egitim container mx-auto py-10">
          <p className="text-textrenk py-4 border-b border-textrenk text-xl font-semibold">Eğitim</p>
          <div className="flex items-center justify-between mt-10">
            Eğitim bilgilerini buraya ekleyeceğim.
          </div>
      </section>
       <section className="proje container mx-auto py-10">
          <p className="text-textrenk py-4 border-b border-textrenk text-xl font-semibold">Projeler</p>
          <div className="flex items-center justify-between mt-10">
            
          </div>
      </section>
      <section className="deneyim container mx-auto py-10">
          <p className="text-textrenk py-4 border-b border-textrenk text-xl font-semibold">Deneyimler</p>
          <div className="flex items-center justify-between mt-10">
            buraya bi acordiyon ekleyeip deneyşimleri ekleyeceğim
          </div>
      </section>

     </div>
  );
}