import Image from 'next/image';
import Link from 'next/link';
import { umkmData } from '@/data/umkm';
import UMKMCard from '@/components/UMKMCard';
import UMKMSearch from '@/components/UMKMSearch';
import ScrollReveal from '@/components/ScrollReveal';
import { notFound } from 'next/navigation';

const CATEGORIES = ['Semua', 'Makanan & Minuman', 'Kerajinan', 'Fesyen', 'Agroindustri'];

const createSlug = (text: string) =>
  text.toLowerCase().replace(/ & /g, '-').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const CATEGORY_IMAGES: Record<string, string> = {
  'Makanan & Minuman': '/images/umkm/cimoring-jhofani.jpg',
  'Kerajinan': '/images/categories/kerajinan.jpg',
  'Fesyen': '/images/categories/fesyen.jpg',
  'Agroindustri': '/images/umkm/kopi-nastiti.jpg',
};

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function UMKMCategory({ params }: PageProps) {
  const resolvedParams = await params;

  const actualCategory = CATEGORIES.find(c => createSlug(c) === resolvedParams.category);
  if (!actualCategory) notFound();

  const filteredData = umkmData.filter(u => u.category === actualCategory);
  const heroImage = CATEGORY_IMAGES[actualCategory] || '';

  return (
    <div className="bg-[#faf9f7] min-h-screen">

      {/* ── Cinematic Hero ──────────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex flex-col justify-end overflow-hidden">
        <Image
          src={heroImage}
          alt={actualCategory}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-stone-900/20" />

        <div className="relative max-w-7xl mx-auto w-full px-5 sm:px-8 pb-14 pt-40">
          <p className="eyebrow text-emerald-400 mb-4">Kategori Produsen</p>
          <h1 className="heading-hero text-stone-100">{actualCategory}</h1>
          <p className="eyebrow text-stone-400 mt-4">{filteredData.length} produsen terdaftar</p>
        </div>
      </section>

      {/* ── Content ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">

        {/* Search + filters */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-12 mb-14">
          <UMKMSearch />
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((category) => {
              const isActive = category === actualCategory;
              return (
                <Link
                  key={category}
                  href={category === 'Semua' ? '/umkm' : `/umkm/kategori/${createSlug(category)}`}
                  className={`eyebrow px-4 py-2 border transition-colors ${
                    isActive
                      ? 'bg-stone-900 text-stone-100 border-stone-900'
                      : 'border-stone-300 text-stone-600 hover:border-stone-900 hover:text-stone-900'
                  }`}
                >
                  {category}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredData.map((umkm, i) => (
              <ScrollReveal key={umkm.id} delay={i * 80}>
                <UMKMCard umkm={umkm} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="bg-stone-50 border border-stone-100 py-24 text-center">
            <p className="font-serif text-2xl text-stone-400 italic">Belum ada produsen untuk kategori ini.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return ['Makanan & Minuman', 'Kerajinan', 'Fesyen', 'Agroindustri'].map((cat) => ({
    category: createSlug(cat),
  }));
}
