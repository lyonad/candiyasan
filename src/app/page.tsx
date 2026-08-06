import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { umkmData } from '@/data/umkm';
import UMKMCard from '@/components/UMKMCard';
import ScrollReveal from '@/components/ScrollReveal';
import CountUp from '@/components/CountUp';

const TICKER_ITEMS = [
  'Kopi Arabika Sindoro',
  'Carica Wonosobo',
  'Kerajinan Bambu',
  'Konveksi Garmen',
  'Industri Lokal',
  'Desa Candiyasan',
  'Lereng Sindoro',
  'Anyaman Tradisional',
];

export default function Home() {
  const [featured, ...rest] = umkmData;

  return (
    <div className="flex flex-col min-h-screen bg-[#faf9f7]">

      {/* ── CINEMATIC HERO — full bleed ────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <Image
          src="/images/hero/candiyasan-landscape.jpg"
          alt="Produk Industri Lokal Desa Candiyasan"
          fill
          className="object-cover"
          priority
        />
        {/* Multi-layer gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/50 to-transparent" />

        {/* Hero content */}
        <div className="relative max-w-7xl mx-auto w-full px-5 sm:px-8 pb-20 sm:pb-28 pt-40">
          <div className="max-w-3xl">
            <p className="eyebrow text-emerald-400 mb-6">Direktori Produsen · Desa Candiyasan</p>

            <h1 className="heading-hero text-stone-100 mb-8">
              Produk<br />
              <em className="text-emerald-400 font-medium">Industri Lokal.</em>
            </h1>

            <p className="body-lead text-stone-300 mb-12 max-w-lg">
              Etalase resmi para produsen dan pelaku manufaktur Desa Candiyasan, Kertek, Wonosobo. Temukan produk berkualitas, hubungi langsung.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/umkm"
                className="group inline-flex items-center gap-3 bg-emerald-800 text-stone-50 px-8 py-4 hover:bg-emerald-700 transition-colors duration-300"
              >
                <span className="eyebrow">Lihat Katalog</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 border border-stone-400/40 text-stone-200 px-8 py-4 hover:bg-stone-100/10 hover:text-white transition-colors duration-300"
              >
                <span className="eyebrow">Latar Belakang</span>
              </Link>
            </div>
          </div>

          {/* Pull quote — bottom right */}
          <div className="hidden lg:block absolute bottom-28 right-8">
            <div className="border-l-2 border-rose-400 pl-4 max-w-xs">
              <p className="font-serif italic text-stone-300 text-xl leading-snug">
                &ldquo;Kualitas yang berbicara<br />sendiri.&rdquo;
              </p>
              <p className="eyebrow text-stone-500 mt-2">Wonosobo, Jawa Tengah</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 scroll-indicator">
          <ArrowDown className="h-5 w-5 text-stone-400" />
        </div>
      </section>

      {/* ── MARQUEE TICKER ─────────────────────────────────────────── */}
      <div className="overflow-hidden border-b border-stone-200 bg-stone-50 py-4 select-none">
        <div className="flex whitespace-nowrap marquee-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-8">
              <span className="eyebrow text-stone-500 tracking-widest">{item}</span>
              <span className="text-rose-400 text-sm font-light">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS BAR ─────────────────────────────────────────────── */}
      <section className="bg-stone-900 text-stone-300">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-3 divide-x divide-stone-800">
            {[
              { target: 50, suffix: '+', label: 'Lini Produk' },
              { target: 24, suffix: '',  label: 'Produsen Aktif' },
              { target: 4,  suffix: '',  label: 'Sektor Industri' },
            ].map(({ target, suffix, label }) => (
              <div key={label} className="flex flex-col items-center py-10 sm:py-14">
                <CountUp
                  target={target}
                  suffix={suffix}
                  className="font-serif text-5xl sm:text-7xl lg:text-8xl text-stone-100 leading-none"
                />
                <span className="eyebrow text-stone-500 mt-4 text-center">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDITORIAL INTRO — 2-column context ────────────────────── */}
      <section className="py-24 lg:py-32 px-5 sm:px-8 dot-grid">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow text-rose-500 mb-4">Tentang Direktori</p>
              <h2 className="heading-section text-stone-900">
                Dari Lereng<br />Sindoro, ke<br />Pasar Nasional
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 lg:pt-3 space-y-5 body-lead text-stone-500">
              <p>
                Desa Candiyasan, Kecamatan Kertek, Kabupaten Wonosobo — sebuah desa di lereng Gunung Sindoro yang menyimpan potensi industri luar biasa, dari kopi arabika hingga konveksi garmen.
              </p>
              <p>
                Platform ini dibangun sebagai jembatan digital antara produsen lokal dan pasar yang lebih luas. Bukan sekadar katalog, melainkan etalase identitas ekonomi desa.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── FEATURED PRODUCERS ────────────────────────────────────── */}
      <section className="py-10 lg:py-20 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">

          <ScrollReveal>
            <div className="flex items-end justify-between mb-12 border-b border-stone-200 pb-6">
              <div>
                <p className="eyebrow text-rose-500 mb-2">Pilihan Editor</p>
                <h2 className="heading-section text-stone-900">Produsen Unggulan</h2>
              </div>
              <Link
                href="/umkm"
                className="hidden sm:inline-flex items-center gap-2 eyebrow text-emerald-800 hover:text-rose-600 transition-colors group"
              >
                Lihat Semua
                <span className="h-px w-6 bg-current group-hover:w-10 transition-all duration-300" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Asymmetric editorial grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4">
            {featured && (
              <ScrollReveal className="lg:col-span-2">
                <UMKMCard umkm={featured} size="large" />
              </ScrollReveal>
            )}

            <div className="flex flex-col gap-3 lg:gap-4">
              {rest.slice(0, 2).map((umkm, i) => (
                <ScrollReveal key={umkm.id} delay={i * 100}>
                  <UMKMCard umkm={umkm} size="small" />
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Remaining producers — smaller row */}
          {rest.length > 2 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mt-3 lg:mt-4">
              {rest.slice(2).map((umkm, i) => (
                <ScrollReveal key={umkm.id} delay={i * 80}>
                  <UMKMCard umkm={umkm} size="medium" />
                </ScrollReveal>
              ))}
            </div>
          )}

          <div className="mt-10 flex sm:hidden justify-center">
            <Link href="/umkm" className="eyebrow text-emerald-800 border-b border-emerald-800 pb-1">
              Lihat Semua Produsen
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-emerald-950 py-28 lg:py-36 px-5 sm:px-8">
        <div className="absolute inset-0 batik-accent opacity-10" />
        {/* Giant watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-serif text-[18vw] font-bold text-white opacity-[0.03] leading-none select-none tracking-tighter">
            LOKAL
          </span>
        </div>

        <ScrollReveal>
          <div className="relative max-w-3xl mx-auto text-center">
            <p className="eyebrow text-emerald-400 mb-4">Bergabung dalam Direktori</p>
            <h2 className="heading-section text-stone-100 mb-6">
              Anda Seorang Produsen Lokal?
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Daftarkan usaha Anda ke dalam direktori digital desa dan jangkau pembeli lebih luas tanpa biaya apapun.
            </p>
            <a
              href="https://candiyasan-kertek.desa.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-stone-300/40 text-stone-100 px-8 py-4 hover:bg-stone-100/10 transition-colors"
            >
              <span className="eyebrow">Hubungi Perangkat Desa ↗</span>
            </a>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
