import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { umkmData } from '@/data/umkm';
import UMKMCard from '@/components/UMKMCard';
import UMKMSearch from '@/components/UMKMSearch';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Katalog Produk & Industri Lokal Desa Candiyasan',
  description: 'Eksplorasi seluruh olahan pangan, hasil bumi, teh, kopi, dan tembakau dari Dusun Jurangjero, Dusun Kabelukan, Dusun Grenjeng & Dusun Banjaran Desa Candiyasan.',
  openGraph: {
    title: 'Katalog Produk & Industri Lokal — Desa Candiyasan',
    description: 'Direktori resmi produk lokal dan produsen industri Desa Candiyasan, Kertek, Wonosobo.',
  },
};

const CATEGORIES = ['Semua', 'Makanan & Minuman', 'Agroindustri'];

const createSlug = (text: string) =>
  text.toLowerCase().replace(/ & /g, '-').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const CATEGORY_IMAGES: Record<string, string> = {
  'Makanan & Minuman': '/images/umkm/Cimoring Jhofani.jpg',
  'Agroindustri': '/images/umkm/Kopi Nastiti.jpg',
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
          alt="Katalog Produk Lokal Desa Candiyasan"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-stone-900/20" />

        <div className="relative max-w-7xl mx-auto w-full px-5 sm:px-8 pb-16 pt-40">
          <p className="eyebrow text-emerald-400 mb-4">Booklet &amp; Direktori Resmi</p>
          <h1 className="heading-hero text-stone-100 mb-5">
            Katalog Produk<br />
            <em className="text-emerald-400 font-normal">Lokal Desa Candiyasan</em>
          </h1>
          <p className="body-lead text-stone-300 max-w-xl">
            Eksplorasi seluruh produk olahan pangan, teh, kopi, tembakau, dan hasil bumi dari 4 pedukuhan resmi Desa Candiyasan.
          </p>
        </div>
      </section>

      {/* ── Category visual cards ──────────────────────────────── */}
      <section className="bg-stone-900 py-12 px-5 sm:px-8" aria-label="Jelajahi Berdasarkan Sektor">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {categoryCounts.map(({ name, count }) => (
              <Link
                key={name}
                href={`/umkm/kategori/${createSlug(name)}`}
                className="group relative h-48 sm:h-56 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
                aria-label={`Sektor ${name} — ${count} Produsen`}
              >
                <Image
                  src={CATEGORY_IMAGES[name] || ''}
                  alt={`Sektor ${name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/35 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
                  <span className="eyebrow text-stone-200 group-hover:text-white transition-colors">{name}</span>
                  <span className="font-serif text-3xl sm:text-4xl text-white mt-1">{count}</span>
                  <span className="eyebrow text-stone-300 text-[0.65rem] mt-1">Produsen / Usaha</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Content ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">

        {/* Search + filters row */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-12 mb-10">
          <UMKMSearch />
          <div className="flex flex-wrap gap-2.5" role="toolbar" aria-label="Filter Sektor">
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
        <div className="flex items-center justify-between mb-8 border-b border-stone-200 pb-4">
          <h2 className="heading-card text-stone-900">Semua Produk &amp; Usaha Lokal</h2>
          <span className="eyebrow text-stone-600">{umkmData.length} Usaha Terdaftar</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {umkmData.map((umkm, i) => (
            <ScrollReveal key={umkm.id} delay={i * 60}>
              <UMKMCard umkm={umkm} />
            </ScrollReveal>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 border border-stone-200 bg-stone-50 px-6 py-5 text-center">
          <p className="text-sm text-stone-500 leading-relaxed">
            <span className="font-semibold text-stone-600">Catatan:</span> Katalog ini belum mencakup seluruh pelaku usaha di Desa Candiyasan. Beberapa produsen belum berkesempatan ditemui atau belum teridentifikasi oleh tim pengembang dan KKN UNNES Giat 16 selama periode pengabdian. Pembaruan data akan dilakukan secara berkala.
          </p>
        </div>

      </div>
    </div>
  );
}
