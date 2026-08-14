import Image from 'next/image';
import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';
import ZoomableImage from '@/components/ZoomableImage';
import { MapPin, Compass, Mountain, Sprout, Award, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Latar Belakang Booklet & Profil Desa Candiyasan',
  description: 'Informasi resmi Booklet Produk Lokal Desa Candiyasan, profil pedukuhan, potensi pertanian, kopi, tembakau, serta kolaborasi UNNES Giat 16.',
  openGraph: {
    title: 'Latar Belakang & Profil Potensi Desa Candiyasan',
    description: 'Menggali Potensi, Mengangkat Produk Lokal Desa Candiyasan, Kertek, Wonosobo.',
  },
};

const FOKUS_KATALOG = [
  'Pemberdayaan UMKM Lokal',
  'Perluasan Jangkauan Pasar Digital',
  'Peningkatan Ekonomi Warga',
  'Promosi Potensi Desa Candiyasan',
];

const DUSUN_LIST = [
  { name: 'Dusun Jurangjero', desc: 'Sentra olahan pangan (Cimoring, Tahu Aska & Slamet, Donat), Teh Alami Ibu Tarmi, Tembakau Pak Sumarko, serta peternakan Mitra Mandiri Farm.' },
  { name: 'Dusun Kabelukan', desc: 'Sentra hasil bumi unggulan (Nasi Jagung Ibu Marsudi & Ibu Miastro), Oyek & Opak Jagung, serta Kopi Arabica Nastiti ekspor.' },
  { name: 'Dusun Grenjeng', desc: 'Pusat aktivitas pertanian lokal, penyuluhan kesehatan kerja petani, dan fasilitas olahraga pemulihan stamina warga.' },
  { name: 'Dusun Banjaran', desc: 'Kawasan pemukiman dan lahan pertanian produktif masyarakat Desa Candiyasan.' },
];

export default function AboutPage() {
  return (
    <div className="bg-[#faf9f7] min-h-screen">

      {/* ── Cinematic Full-Bleed Hero ──────────────────────────── */}
      <section className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden">
        <Image
          src="/images/hero/candiyasan-landscape.jpg"
          alt="Lanskap lereng Gunung Sindoro-Sumbing Desa Candiyasan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-stone-900/20" />

        <div className="relative max-w-7xl mx-auto w-full px-5 sm:px-8 pb-20 pt-40">
          <p className="eyebrow text-emerald-400 mb-4">Booklet &amp; Profil Resmi</p>
          <h1 className="heading-hero text-stone-100 max-w-4xl mb-6">
            Produk Lokal<br />
            <em className="text-emerald-400 font-normal">Desa Candiyasan.</em>
          </h1>
          <p className="font-serif italic text-2xl text-stone-200 mb-6">
            &ldquo;Menggali Potensi, Mengangkat Produk Lokal.&rdquo;
          </p>
          <p className="body-lead text-stone-300 max-w-2xl">
            Panduan dan etalase digital resmi potensi industri olahan pangan, pertanian, tembakau, teh, dan kopi Desa Candiyasan, Kecamatan Kertek, Kabupaten Wonosobo.
          </p>
        </div>
      </section>

      {/* ── Fokus Katalog Bar ────────────────────────── */}
      <section className="bg-emerald-950 border-b border-emerald-900/80 py-5 text-stone-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="eyebrow text-emerald-400 text-center mb-3">Visi &amp; Fokus Utama Katalog</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-stone-300">
            {FOKUS_KATALOG.map((item, i) => (
              <span key={i} className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kata Pengantar Section ──────────────────────────────── */}
      <section className="py-20 lg:py-28 px-5 sm:px-8 dot-grid">
        <div className="max-w-4xl mx-auto bg-white border border-stone-200 p-8 sm:p-14 shadow-sm relative">
          <div className="absolute top-0 left-0 w-2 h-full bg-emerald-800" />
          <p className="eyebrow text-rose-600 mb-3">Kata Pengantar Booklet</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mb-6">Prakata KKN UNNES Giat 16</h2>
          
          <div className="space-y-4 body-lead text-stone-700 leading-relaxed font-sans text-base sm:text-lg">
            <p>
              Puji syukur atas kehadirat Tuhan Yang Maha Esa atas tersusunnya booklet &amp; direktori digital <strong>“Produk Lokal Desa Candiyasan”</strong>.
            </p>
            <p>
              Booklet ini disusun secara kolaboratif oleh mahasiswa Kuliah Kerja Nyata (KKN) Program Giat 16 Universitas Negeri Semarang (UNNES) sebagai wujud pengabdian masyarakat.
            </p>
            <p className="bg-stone-50 border-l-4 border-emerald-600 p-4 italic text-stone-800 font-serif text-lg">
              Tujuan Utama: Mendukung promosi potensi desa melalui penyediaan informasi yang mudah dipahami dan dapat dimanfaatkan oleh masyarakat umum, pelaku usaha, maupun mitra kerja sama pihak terkait.
            </p>
          </div>
        </div>
      </section>

      {/* ── Profil & Potensi Desa ──────────────────────────────── */}
      <section className="py-20 lg:py-28 px-5 sm:px-8 bg-stone-900 text-stone-100 relative overflow-hidden">
        <div className="absolute inset-0 batik-accent opacity-10" />
        
        <div className="relative max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <p className="eyebrow text-emerald-400 mb-3">Geografis &amp; Komoditas</p>
              <h2 className="heading-section text-white mb-6">Profil &amp; Potensi Desa Candiyasan</h2>
              <p className="body-lead text-stone-300">
                Terletak indah di lereng pegunungan dengan keanekaragaman hasil bumi dan semangat kewirausahaan warga lokal.
              </p>
            </div>
          </ScrollReveal>

          {/* Key Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="bg-stone-800/80 border border-stone-700/60 p-6 flex items-start gap-4">
              <div className="p-3 bg-emerald-900/60 text-emerald-400 rounded">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="eyebrow text-stone-400 mb-1">Lokasi Wilayah</h3>
                <p className="font-serif text-2xl text-white">Kec. Kertek</p>
                <p className="text-sm text-stone-300 mt-1">Kabupaten Wonosobo, Jawa Tengah</p>
              </div>
            </div>

            <div className="bg-stone-800/80 border border-stone-700/60 p-6 flex items-start gap-4">
              <div className="p-3 bg-emerald-900/60 text-emerald-400 rounded">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h3 className="eyebrow text-stone-400 mb-1">Luas Wilayah</h3>
                <p className="font-serif text-2xl text-white">± 6 km²</p>
                <p className="text-sm text-stone-300 mt-1">Meliputi 4 wilayah pedukuhan (dusun)</p>
              </div>
            </div>

            <div className="bg-stone-800/80 border border-stone-700/60 p-6 flex items-start gap-4">
              <div className="p-3 bg-emerald-900/60 text-emerald-400 rounded">
                <Mountain className="w-6 h-6" />
              </div>
              <div>
                <h3 className="eyebrow text-stone-400 mb-1">Pemandangan Alam</h3>
                <p className="font-serif text-2xl text-white">Sindoro - Sumbing</p>
                <p className="text-sm text-stone-300 mt-1">Panorama lereng pegunungan vulkanik yang subur</p>
              </div>
            </div>
          </div>

          {/* Sektor Potensi Desa */}
          <ScrollReveal>
            <div className="mb-20">
              <h3 className="eyebrow text-emerald-400 mb-8 tracking-widest text-center">3 Pilar Potensi Sektor Desa</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div className="bg-stone-800/50 border border-stone-700/40 p-8 rounded-sm">
                  <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mb-6">
                    <Sprout className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl text-stone-100 mb-3">1. Pertanian (Tembakau)</h4>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    Tembakau diposisikan sebagai <strong>komoditas unggulan utama</strong> masyarakat Desa Candiyasan dengan cita rasa rajangan khas lereng pegunungan.
                  </p>
                </div>

                <div className="bg-stone-800/50 border border-stone-700/40 p-8 rounded-sm">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6">
                    <Award className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl text-stone-100 mb-3">2. Perhutanan Sosial (Kopi)</h4>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    Budidaya Kopi Arabika unggulan hasil kerja sama kemitraan masyarakat. Produk green bean telah berhasil diekspor hingga ke Korea.
                  </p>
                </div>

                <div className="bg-stone-800/50 border border-stone-700/40 p-8 rounded-sm">
                  <div className="w-12 h-12 bg-rose-500/20 text-rose-400 rounded-full flex items-center justify-center mb-6">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl text-stone-100 mb-3">3. Hortikultura &amp; Hasil Bumi</h4>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    Pemanfaatan lahan pertanian untuk aneka produk hortikultura, olahan jagung (oyek, opak, nasi jagung), serta teh olahan alami sebagai mata pencaharian warga.
                  </p>
                </div>

              </div>
            </div>
          </ScrollReveal>

          {/* 4 Pedukuhan Grid */}
          <ScrollReveal>
            <div>
              <div className="flex items-center justify-between border-b border-stone-800 pb-4 mb-8">
                <h3 className="font-serif text-3xl text-white">4 Pedukuhan (Dusun) Desa Candiyasan</h3>
                <span className="eyebrow text-emerald-400">Wilayah Administratif</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {DUSUN_LIST.map((dusun, i) => (
                  <div key={dusun.name} className="bg-stone-800/90 border border-stone-700/60 p-6 flex flex-col justify-between">
                    <div>
                      <span className="eyebrow text-rose-400 block mb-2">Dusun 0{i + 1}</span>
                      <h4 className="font-serif text-2xl text-stone-100 mb-3">{dusun.name}</h4>
                      <p className="text-stone-300 text-xs leading-relaxed">{dusun.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ── Full Width Image Documentation ─────────────────────── */}
      <section className="py-20 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="relative w-full h-[45vh] lg:h-[58vh] overflow-hidden mb-16 border border-stone-200">
              <ZoomableImage
                src="/images/tim/Foto Bersama Kepsek dan Para Guru.jpg"
                alt="Dokumentasi KKN UNNES Giat 16 Desa Candiyasan"
                caption="Dokumentasi Pelaksanaan Program Kerja KKN UNNES Giat 16 di Desa Candiyasan"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
                containerClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/25 to-transparent pointer-events-none" />
              <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 max-w-md pointer-events-none z-20">
                <div className="border-l-2 border-emerald-400 pl-5">
                  <p className="font-serif italic text-stone-100 text-xl sm:text-2xl leading-snug">
                    &ldquo;Bersama menggali potensi lokal, membawa karya warga Desa Candiyasan mendunia.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Official Village Portal Disclaimer ────────────────────── */}
      <section className="bg-stone-900 text-stone-200 py-16 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow text-rose-400 mb-3">Portal Administratif Resmi</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-100 mb-4">
            Informasi Pemerintahan &amp; Pelayanan Publik
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Situs ini difokuskan sebagai etalase produk dan industri lokal Desa Candiyasan. Untuk informasi birokrasi, kependudukan, dan layanan administrasi desa, silakan kunjungi portal pemerintah desa.
          </p>
          <a
            href="https://candiyasan-kertek.desa.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-emerald-500/50 text-emerald-300 hover:bg-emerald-950 px-8 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-colors eyebrow rounded-sm"
          >
            Buka Portal Utama candiyasan-kertek.desa.id ↗
          </a>
        </div>
      </section>

    </div>
  );
}
