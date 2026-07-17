import { umkmData } from '@/data/umkm';
import UMKMCard from '@/components/UMKMCard';
import UMKMSearch from '@/components/UMKMSearch';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function UMKMCategory({ params }: { params: any }) {
  const resolvedParams = await params;
  const categories = ['Semua', 'Makanan & Minuman', 'Kerajinan', 'Jasa', 'Lainnya'];
  
  const createSlug = (text: string) => {
    return text.toLowerCase().replace(/ & /g, '-').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  };
  
  const actualCategory = categories.find(
    c => createSlug(c) === resolvedParams.category
  );

  if (!actualCategory) {
    notFound();
  }

  const filteredData = umkmData.filter(u => u.category === actualCategory);

  return (
    <div className="bg-stone-50 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-rose-500 mb-4 block">Kategori Spesifik</span>
          <h1 className="text-5xl font-serif text-stone-900 mb-6">{actualCategory}</h1>
          <p className="text-lg text-stone-500 font-light leading-relaxed">
            Menampilkan karya eksklusif dan jasa dari para pelaku UMKM lokal dalam klasifikasi {actualCategory.toLowerCase()}.
          </p>
        </div>

        {/* Dynamic Search Client */}
        <UMKMSearch />

        {/* Static Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 border-b border-stone-200 pb-8">
          {categories.map((category) => {
            const isActive = category === actualCategory;
            return (
              <Link
                key={category}
                href={category === 'Semua' ? '/umkm' : `/umkm/kategori/${createSlug(category)}`}
                className={`uppercase tracking-widest text-xs font-semibold pb-1 transition-all ${
                  isActive
                    ? 'text-emerald-800 border-b-2 border-emerald-800' 
                    : 'text-stone-400 hover:text-rose-500'
                }`}
              >
                {category}
              </Link>
            );
          })}
        </div>

        {/* Results Grid (Server Rendered) */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredData.map((umkm) => (
              <UMKMCard key={umkm.id} umkm={umkm} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-stone-100">
            <p className="text-stone-500 text-lg font-light italic">Belum ada karya untuk kategori ini.</p>
          </div>
        )}

      </div>
    </div>
  );
}

export function generateStaticParams() {
  const categories = ['Makanan & Minuman', 'Kerajinan', 'Jasa', 'Lainnya'];
  
  const createSlug = (text: string) => {
    return text.toLowerCase().replace(/ & /g, '-').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  };
  
  return categories.map((category) => ({
    category: createSlug(category),
  }));
}
