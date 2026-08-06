import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import ZoomableImage from '@/components/ZoomableImage';

const FOCUS_POINTS = [
  {
    num: '01',
    title: 'Inventarisasi Terpusat',
    desc: 'Mendokumentasikan seluruh lini produksi desa dalam satu direktori digital yang dapat diakses siapa pun, kapan pun. Data yang akurat adalah fondasi dari ekosistem ekonomi yang sehat.',
  },
  {
    num: '02',
    title: 'Promosi Langsung',
    desc: 'Menghubungkan produsen langsung ke pembeli tanpa perantara yang membebani. Setiap halaman produsen berfungsi sebagai etalase mandiri yang siap menerima kontak B2C dan B2B.',
  },
  {
    num: '03',
    title: 'Jangkauan B2B',
    desc: 'Membuka jalur kerjasama bisnis ke bisnis — memungkinkan distributor, retailer, dan agregator menemukan pemasok lokal berkualitas langsung dari sumbernya.',
  },
  {
    num: '04',
    title: 'Ekosistem Digital',
    desc: 'Berperan sebagai "satelit digital" dari portal administrasi resmi desa. Spesifik pada sektor industri, komplementer terhadap kebutuhan informasi warga lainnya.',
  },
];

const META_TAGS = ['UNNES Giat 16', '2026', 'Desa Candiyasan', 'Kec. Kertek', 'Kab. Wonosobo'];

export default function AboutPage() {
  return (
    <div className="bg-[#faf9f7] min-h-screen">

      {/* ── Cinematic Full-Bleed Hero ──────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden">
        <Image
          src="/images/hero/candiyasan-landscape.jpg"
          alt="Lanskap pegunungan dan Desa Candiyasan"
          fill
          className="object-cover"
          priority
        />
        {/* Multi-stop gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-900/15" />

        <div className="relative max-w-7xl mx-auto w-full px-5 sm:px-8 pb-20 pt-40">
          <p className="eyebrow text-emerald-400 mb-6">Latar Belakang Program</p>
          <h1 className="heading-hero text-stone-100 max-w-4xl mb-8">
            Katalis Industri &amp;<br />
            <em className="text-emerald-400 font-normal">Ekonomi Digital</em> Desa.
          </h1>
          <p className="body-lead text-stone-300 max-w-2xl">
            Inisiatif strategis untuk mendigitalisasi rantai pasok dan etalase promosi produk manufaktur, agroindustri, serta kriya Desa Candiyasan langsung ke pasar nasional.
          </p>
        </div>
      </section>

      {/* ── Meta strip ──────────────────────────────────────────── */}
      <div className="bg-emerald-950 border-b border-emerald-900/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4">
          <div className="flex flex-wrap gap-x-8 gap-y-1.5 items-center">
            {META_TAGS.map((item, i) => (
              <span key={i} className="eyebrow text-stone-400">{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Context — editorial 2-col heading/body ──────────────── */}
      <section className="py-24 lg:py-32 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">

          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 lg:mb-28">
              {/* Left: Heading */}
              <div className="lg:col-span-4">
                <p className="eyebrow text-rose-500 mb-4">Mengapa Ini Penting</p>
                <h2 className="heading-section text-stone-900">
                  Kapasitas Besar,<br />Jangkauan<br />Terbatas
                </h2>
              </div>
              {/* Right: Body */}
              <div className="lg:col-span-7 lg:col-start-6 lg:pt-3 space-y-5 body-lead text-stone-500">
                <p>
                  Desa Candiyasan menaungi sentra produksi unggulan — dari agroindustri yang mengolah hasil panen lokal hingga industri garmen dan manufaktur kriya berskala rumahan.
                </p>
                <p>
                  Namun kapasitas produksi ini kerap tidak teroptimalisasi akibat minimnya jembatan informasi digital ke distributor dan pembeli. Tanpa etalase terpadu, peluang pasar terlewatkan setiap harinya.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Full-width image with pull quote */}
          <ScrollReveal>
            <div className="relative w-full h-[45vh] lg:h-[58vh] overflow-hidden mb-24 lg:mb-32">
              <ZoomableImage
                src="/images/tim/Foto Bersama Kepsek dan Para Guru.jpg"
                alt="Foto Bersama Kepala Sekolah dan Para Guru Desa Candiyasan"
                caption="Dokumentasi Kegiatan Tim UNNES Giat 16 Candiyasan bersama Kepala Sekolah & Para Guru"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
                containerClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/25 to-transparent pointer-events-none" />
              <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 max-w-sm pointer-events-none z-20">
                <div className="border-l-2 border-emerald-400 pl-5">
                  <p className="font-serif italic text-stone-100 text-xl sm:text-2xl leading-snug">
                    &ldquo;Produk berkualitas<br />butuh jembatan yang tepat.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Editorial numbered manifesto */}
          <div className="max-w-4xl mx-auto lg:mx-0">
            <p className="eyebrow text-rose-500 mb-10">Fokus Program</p>
            <div className="divide-y divide-stone-100">
              {FOCUS_POINTS.map(({ num, title, desc }, i) => (
                <ScrollReveal key={num} delay={i * 70}>
                  <div className="grid grid-cols-12 gap-4 sm:gap-8 py-9 items-start">
                    {/* Large ordinal number */}
                    <div className="col-span-3 sm:col-span-2">
                      <span className="font-serif text-5xl sm:text-6xl text-emerald-800 font-semibold leading-none select-none">
                        {num}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="col-span-9 sm:col-span-10 pt-1 sm:pt-2">
                      <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 mb-3">{title}</h3>
                      <p className="body-base text-stone-500 max-w-xl">{desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Distinction note ────────────────────────────────────── */}
      <section className="bg-stone-900 relative overflow-hidden py-24 lg:py-32 px-5 sm:px-8">
        <div className="absolute inset-0 batik-accent opacity-10" />
        {/* Watermark word */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-serif font-bold text-white leading-none select-none"
            style={{ fontSize: '18vw', opacity: 0.03 }}>
            DESA
          </span>
        </div>
        <ScrollReveal>
          <div className="relative max-w-3xl mx-auto text-center">
            <p className="eyebrow text-rose-400 mb-4">Penting untuk Diketahui</p>
            <h2 className="heading-section text-stone-100 mb-6">
              Ini Bukan Pengganti<br />Website Utama Desa
            </h2>
            <p className="text-stone-400 text-base leading-relaxed mb-10 max-w-xl mx-auto">
              Situs ini difokuskan sepenuhnya pada katalog produksi. Untuk keperluan administratif, birokrasi, dan berita desa, silakan kunjungi portal resmi.
            </p>
            <a
              href="https://candiyasan-kertek.desa.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-stone-500/40 text-stone-200 px-8 py-4 hover:bg-stone-100/10 transition-colors eyebrow"
            >
              candiyasan-kertek.desa.id ↗
            </a>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
