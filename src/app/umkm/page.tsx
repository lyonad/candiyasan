import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { umkmData } from '@/data/umkm';
import UMKMCard from '@/components/UMKMCard';
import UMKMSearch from '@/components/UMKMSearch';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Katalog Industri & Produsen Lokal',
  description: 'Eksplorasi seluruh lini produksi dan komoditas unggulan dari para produsen dan pengrajin resmi Desa Candiyasan, Kertek, Wonosobo.',
  openGraph: {
    title: 'Katalog Industri & Produsen Lokal — Candiyasan',
    description: 'Direktori resmi produsen, pabrik, dan industri lokal Desa Candiyasan.',
  },
};

const CATEGORIES = ['Semua', 'Makanan & Minuman', 'Kerajinan', 'Fesyen', 'Agroindustri'];

const createSlug = (text: string) =>
  text.toLowerCase().replace(/ & /g, '-').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const CATEGORY_IMAGES: Record<string, string> = {
  'Makanan & Minuman': '/images/umkm/cimoring-jhofani.jpg',
  'Kerajinan': '/images/categories/kerajinan.jpg',
  'Fesyen': '/images/categories/fesyen.jpg',
  'Agroindustri': '/images/umkm/kopi-nastiti.jpg',
};

export default function UMKMDirectory() {
  const categoryCounts = CATEGORIES.slice(1).map(cat => ({
    name: cat,
    count: umkmData.filter(u => u.category === cat).length,
  }));

  return (
    <div className="bg-[#faf9f7] min-h-screen">

      {/* ── Cinematic Hero ──────────────────────────────────────── */}
      <section className="relative min-h-[65vh] flex flex-col justify-end overflow-hidden">
        <Image
          src="/images/hero/candiyasan-landscape.jpg"
          alt="Katalog Industri Lokal Desa Candiyasan"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-stone-900/20" />

        <div className="relative max-w-7xl mx-auto w-full px-5 sm:px-8 pb-16 pt-40">
          <p className="eyebrow text-emerald-400 mb-4">Direktori Produsen</p>
          <h1 className="heading-hero text-stone-100 mb-5">
            Katalog Produk<br />
            <em className="text-emerald-400 font-normal">Industri Lokal</em>
          </h1>
          <p className="body-lead text-stone-300 max-w-xl">
            Eksplorasi seluruh lini produksi dari para produsen dan pengrajin resmi Desa Candiyasan.
          </p>
        </div>
      </section>

      {/* ── Category visual cards ──────────────────────────────── */}
      <section className="bg-stone-900 py-12 px-5 sm:px-8" aria-label="Jelajahi Berdasarkan Kategori">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {categoryCounts.map(({ name, count }) => (
              <Link
                key={name}
                href={`/umkm/kategori/${createSlug(name)}`}
                className="group relative h-36 sm:h-44 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
                aria-label={`Kategori ${name} — ${count} Produsen`}
              >
                <Image
                  src={CATEGORY_IMAGES[name] || ''}
                  alt={`Kategori ${name}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/35 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
                  <span className="eyebrow text-stone-200 group-hover:text-white transition-colors">{name}</span>
                  <span className="font-serif text-3xl sm:text-4xl text-white mt-1">{count}</span>
                  <span className="eyebrow text-stone-300 text-[0.65rem] mt-1">Produsen</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Content ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">

        {/* Search + filters row */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-12 mb-14">
          <UMKMSearch />
          <div className="flex flex-wrap gap-3" role="toolbar" aria-label="Filter Kategori">
            {CATEGORIES.map((category) => (
              <Link
                key={category}
                href={category === 'Semua' ? '/umkm' : `/umkm/kategori/${createSlug(category)}`}
                className={`eyebrow px-4 py-2 border transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 ${
                  category === 'Semua'
                    ? 'bg-stone-900 text-stone-100 border-stone-900'
                    : 'border-stone-300 text-stone-700 hover:border-stone-900 hover:text-stone-900'
                }`}
                aria-current={category === 'Semua' ? 'page' : undefined}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        {/* Produsen count */}
        <div className="flex items-center gap-4 mb-8 border-b border-stone-200 pb-4">
          <h2 className="heading-card text-stone-900">Semua Produsen</h2>
          <span className="eyebrow text-stone-600">{umkmData.length} terdaftar</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {umkmData.map((umkm, i) => (
            <ScrollReveal key={umkm.id} delay={i * 80}>
              <UMKMCard umkm={umkm} />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </div>
  );
}
