import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { umkmData } from '@/data/umkm';
import UMKMCard from '@/components/UMKMCard';

export default function Home() {
  const featuredUMKM = umkmData.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      
      {/* High-End Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-block border-b border-rose-400 pb-2 mb-8">
                <span className="text-sm uppercase tracking-[0.3em] font-medium text-emerald-800">
                  Desa Candiyasan
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[1.1] mb-8">
                Esensi Karya <br />
                <span className="italic text-emerald-900">Lokal Autentik.</span>
              </h1>
              <p className="text-lg md:text-xl text-stone-500 font-light max-w-lg leading-relaxed mb-10">
                Eksplorasi koleksi eksklusif dari para perajin dan pelaku UMKM kami. Sebuah dedikasi untuk kualitas, tradisi, dan kemajuan ekonomi desa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  href="/umkm"
                  className="group inline-flex items-center justify-center gap-4 bg-emerald-900 text-stone-50 px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-emerald-800 transition-all duration-300"
                >
                  Lihat Katalog
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 uppercase tracking-widest text-sm font-semibold text-stone-900 border border-stone-300 hover:border-emerald-800 hover:text-emerald-900 transition-colors duration-300"
                >
                  Latar Belakang
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="aspect-[3/4] relative w-full max-w-md mx-auto lg:ml-auto">
                <Image 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Karya Lokal" 
                  fill
                  className="object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                  priority
                />
                {/* Decorative Box */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-rose-100/50 -z-10"></div>
                <div className="absolute -top-6 -right-6 w-full h-full border border-emerald-900/20 -z-10"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Elegant Stats Section */}
      <section className="py-20 bg-emerald-950 text-stone-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-emerald-900/50 text-center">
            <div className="flex flex-col items-center py-4">
              <h3 className="text-5xl font-serif text-stone-100 mb-4">50<span className="text-rose-400">+</span></h3>
              <p className="uppercase tracking-widest text-xs font-medium">Produk Lokal</p>
            </div>
            <div className="flex flex-col items-center py-4">
              <h3 className="text-5xl font-serif text-stone-100 mb-4">24</h3>
              <p className="uppercase tracking-widest text-xs font-medium">Pengrajin & UMKM</p>
            </div>
            <div className="flex flex-col items-center py-4">
              <h3 className="text-5xl font-serif text-stone-100 mb-4">3</h3>
              <p className="uppercase tracking-widest text-xs font-medium">Dusun Terintegrasi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured UMKM Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-rose-500 mb-4">Pilihan Kami</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Koleksi Kurasi</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {featuredUMKM.map((umkm) => (
              <UMKMCard key={umkm.id} umkm={umkm} />
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link 
              href="/umkm"
              className="inline-flex items-center gap-3 text-sm uppercase tracking-widest font-semibold text-emerald-800 hover:text-rose-600 transition-colors group"
            >
              Lihat Seluruh Koleksi
              <span className="h-[1px] w-8 bg-current group-hover:w-12 transition-all"></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
