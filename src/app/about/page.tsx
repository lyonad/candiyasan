import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-stone-50 bg-batik min-h-screen pt-32 pb-24">
      
      {/* Hero Section */}
      <section className="relative mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-rose-500 mb-6 block">Latar Belakang</span>
            <h1 className="text-5xl md:text-6xl font-serif text-stone-900 leading-[1.1] mb-8">
              Katalis Manufaktur & Ekonomi Desa
            </h1>
            <p className="text-lg md:text-xl text-stone-500 font-light leading-relaxed">
              Sebuah inisiatif digital untuk mendigitalisasi rantai pasok dan promosi pabrik skala rumahan (home-industry) hingga pabrik menengah dari Desa Candiyasan ke pasar yang lebih luas.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative h-[70vh] w-full bg-stone-200">
              <Image 
                src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Fasilitas Produksi Lokal" 
                fill
                className="object-cover grayscale-[20%]"
              />
              <div className="absolute inset-0 border border-emerald-900/10 m-6 pointer-events-none"></div>
            </div>

            <div className="lg:pr-12">
              <h2 className="text-3xl font-serif text-stone-900 mb-8">Esensi Permasalahan</h2>
              <div className="space-y-6 text-stone-500 font-light text-lg leading-relaxed mb-12">
                <p>
                  Desa Candiyasan menaungi sentra-sentra produksi unggulan—dari fasilitas agroindustri yang mengolah panen lokal hingga pabrik garmen dan manufaktur kriya. Namun, kapasitas produksi ini kerap tidak teroptimalisasi akibat tidak memadainya jembatan informasi digital ke distributor maupun pembeli skala besar (*B2B*).
                </p>
                <p>
                  Tanpa etalase terpadu, para produsen kehilangan peluang untuk menjangkau pasar nasional. Direktori ini dibuat khusus sebagai ruang pajang katalog industri resmi desa kami.
                </p>
              </div>

              <h2 className="text-3xl font-serif text-stone-900 mb-8">Fokus Inisiatif</h2>
              <ul className="space-y-6">
                {[
                  "Inventarisasi data produksi dan manufaktur yang akurat dan terpusat.",
                  "Mempromosikan langsung produsen (bukan pengecer) untuk memotong rantai pasok.",
                  "Membuka jalur kerjasama B2B bagi hasil industri desa Candiyasan.",
                  "Berperan sebagai ekosistem digital satelit dari portal administrasi desa utama."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-rose-400 font-serif text-xl italic mt-[-4px]">0{index + 1}</span>
                    <span className="text-stone-600 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      {/* Distinction Section */}
      <section className="bg-emerald-950 text-stone-300 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-rose-400 text-sm uppercase tracking-[0.2em] font-semibold block mb-6">Informasi Administratif</span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-100 mb-8">Mendukung Portal Utama</h2>
          <p className="text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Situs ini berdedikasi sepenuhnya pada kurasi produk dan entitas bisnis. Untuk keperluan administratif, birokrasi, dan berita operasional desa, silakan merujuk pada portal utama pemerintahan desa.
          </p>
          <a 
            href="https://candiyasan-kertek.desa.id/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block border border-stone-300 px-10 py-4 uppercase tracking-widest text-sm font-semibold text-stone-100 hover:bg-stone-100 hover:text-emerald-950 transition-colors duration-300"
          >
            Kunjungi Portal Desa
          </a>
        </div>
      </section>

    </div>
  );
}
