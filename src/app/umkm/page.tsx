import { umkmData } from '@/data/umkm';
import UMKMCard from '@/components/UMKMCard';
import UMKMSearch from '@/components/UMKMSearch';
import Link from 'next/link';

export default function UMKMDirectory() {
  const categories = ['Semua', 'Makanan & Minuman', 'Kerajinan', 'Fesyen', 'Agroindustri'];

  const createSlug = (text: string) => {
    return text.toLowerCase().replace(/ & /g, '-').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  };

  return (
    <div className="bg-stone-50 bg-batik min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-rose-500 mb-4 block">Direktori Produsen</span>
          <h1 className="text-5xl font-serif text-stone-900 mb-6">Katalog Produk Industri Lokal</h1>
          <p className="text-lg text-stone-500 font-light leading-relaxed">
            Jelajahi dan dukung seluruh koleksi industri, kerajinan, serta produk manufaktur dari para produsen Desa Candiyasan.
          </p>
        </div>

        {/* Dynamic Search Client */}
        <UMKMSearch />

        {/* Static Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 border-b border-stone-200 pb-8">
          {categories.map((category) => (
            <Link
              key={category}
              href={category === 'Semua' ? '/umkm' : `/umkm/kategori/${createSlug(category)}`}
              className={`uppercase tracking-widest text-xs font-semibold pb-1 transition-all ${
                category === 'Semua' 
                  ? 'text-emerald-800 border-b-2 border-emerald-800' 
                  : 'text-stone-400 hover:text-rose-500'
              }`}
            >
              {category}
            </Link>
          ))}
        </div>

        {/* Results Grid (Server Rendered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {umkmData.map((umkm) => (
            <UMKMCard key={umkm.id} umkm={umkm} />
          ))}
        </div>

      </div>
    </div>
  );
}
