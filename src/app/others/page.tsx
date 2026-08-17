import Image from 'next/image';
import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';
import LiteYouTube from '@/components/LiteYouTube';
import ZoomableImage from '@/components/ZoomableImage';

export const metadata: Metadata = {
  title: 'Dokumentasi, Galeri Program & Tim',
  description: 'Galeri foto kegiatan, dokumentasi video usaha & kesehatan, peta program kerja, serta profil tim pengabdi UNNES Giat 16 di Desa Candiyasan.',
  openGraph: {
    title: 'Dokumentasi & Tim — Candiyasan',
    description: 'Dokumentasi video, galeri kegiatan pengabdian, dan profil tim UNNES Giat 16 Desa Candiyasan.',
  },
};

export default function OthersPage() {
  const videos = [
    {
      id: 'v-cedera',
      title: 'Tutorial Pelatihan Pemulihan Otot & Penanganan Pertama Cedera',
      description: 'Video panduan dan edukasi kesehatan pemulihan otot serta pertolongan pertama pada cedera oleh tim UNNES Giat 16 Desa Candiyasan.',
      youtubeId: '4Q7l4_cOiSM',
    },
    {
      id: 'v-cimoring',
      title: 'Profil UMKM: CIMORING JHOFANI Jurangjero',
      description: 'Liputan profil usaha rumahan Cimoring Jhofani oleh Mbak Murni di Dusun Jurangjero, Desa Candiyasan yang diminati hingga luar kota.',
      youtubeId: 'uwhfARqJeQo',
    },
    {
      id: 'v1',
      title: 'Perkenalan UNNES Giat 16 Desa Candiyasan',
      description: 'Video perkenalan tim mahasiswa UNNES Giat 16 yang bertugas di Desa Candiyasan, Kertek, Wonosobo.',
      youtubeId: 'dQw4w9WgXcQ',
    },
    {
      id: 'v2',
      title: 'Kegiatan Pemetaan UMKM Lokal',
      description: 'Dokumentasi kegiatan pemetaan dan pendataan UMKM produsen di seluruh dusun Desa Candiyasan.',
      youtubeId: 'ScMzIvxBSi4',
    },
    {
      id: 'v3',
      title: 'Workshop Digitalisasi Produk Lokal',
      description: 'Workshop bersama para pelaku industri lokal mengenai promosi digital dan manajemen katalog online.',
      youtubeId: '2Vv-BfVoq4g',
    },
    {
      id: 'v4',
      title: 'Vlog Kehidupan KKN di Candiyasan',
      description: 'Cerita keseharian tim Giat 16 selama menjalani program pengabdian masyarakat di Desa Candiyasan.',
      youtubeId: 'kJQP7kiw5Fk',
    },
  ];

  const members = [
    { id: 'm1',  name: 'Rayhan Raynata Marton',         prodi: 'S1 Manajemen',                                    faculty: 'FEB',   role: 'Kormades',        image: '/images/tim/Rayhan.jpg' },
    { id: 'm2',  name: 'Damar Maulana Ramadhan',        prodi: 'S1 Pendidikan Jasmani, Kesehatan, dan Rekreasi', faculty: 'FIK',   role: 'Wakil Kormades',  image: '/images/tim/Damar.jpg' },
    { id: 'm3',  name: 'Tazhafina Klarisa',             prodi: 'S1 Ilmu Politik',                                 faculty: 'FISIP', role: 'Sekretaris',      image: '/images/tim/Klarisa.jpg' },
    { id: 'm4',  name: 'Salsabila Zain Anisah',         prodi: 'S1 Akuntansi',                                    faculty: 'FEB',   role: 'Bendahara',       image: '/images/tim/Zain.jpg' },
    { id: 'm5',  name: 'Deswita Maharani',              prodi: 'S1 Manajemen',                                    faculty: 'FEB',   role: 'Humas',           image: '/images/tim/Deswita.jpg' },
    { id: 'm6',  name: 'Fazarani Hasnan Afisah',        prodi: 'S1 Ilmu Politik',                                 faculty: 'FISIP', role: 'Humas',           image: '/images/tim/Fazarani.jpg' },
    { id: 'm7',  name: 'Lyon Ambrosio Djuanda',         prodi: 'S1 Teknik Informatika',                           faculty: 'FMIPA', role: 'PDD',             image: '/images/tim/Lyon.jpg' },
    { id: 'm8',  name: 'Anisa Yulina Rahmawati',        prodi: 'S1 Pendidikan IPA',                               faculty: 'FMIPA', role: 'PDD',             image: '/images/tim/Anisa.jpg' },
    { id: 'm9',  name: 'Zalfa Shofiyatun Nabila',       prodi: 'S1 Pendidikan Seni Rupa',                         faculty: 'FBS',   role: 'PDD',             image: '/images/tim/Zalfa.jpg' },
    { id: 'm10', name: 'Adnin Djiogasa Harahap',        prodi: 'S1 Teknik Mesin',                                 faculty: 'FT',    role: 'Logistik',        image: '/images/tim/Adnin.jpg' },
    { id: 'm11', name: 'Nisfa Laila Kamila',            prodi: 'S1 Pendidikan Guru Sekolah Dasar',                faculty: 'FIPP',  role: 'Logistik',        image: '/images/tim/Nisfa.jpg' },
  ];

  const [featuredVideo, ...restVideos] = videos;

  return (
    <div className="bg-[#faf9f7] min-h-screen">

      {/* ── Cinematic Full-Bleed Hero ──────────────────────────── */}
      <section className="relative min-h-[88vh] lg:min-h-[92vh] flex flex-col justify-end overflow-hidden">
        <ZoomableImage
          src="/images/tim/Foto Bersama Perangkat Desa Candiyasan.jpg"
          alt="Tim UNNES Giat 16 Desa Candiyasan bersama Perangkat Desa"
          caption="Foto Bersama Mahasiswa UNNES Giat 16 Candiyasan dengan Perangkat Desa Candiyasan"
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
          containerClassName="absolute inset-0 w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-stone-900/20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto w-full px-5 sm:px-8 pb-20 sm:pb-24 pt-44 sm:pt-52">
          <p className="eyebrow text-emerald-400 mb-6">UNNES Giat 16 — Desa Candiyasan</p>
          <h1 className="heading-hero text-stone-100 max-w-4xl mb-6">
            Dokumentasi &amp;<br />
            <em className="text-emerald-400 font-normal">Tim Pengabdian.</em>
          </h1>
          <p className="body-lead text-stone-300 max-w-2xl mb-6">
            Kumpulan video dokumentasi kegiatan dan profil mahasiswa UNNES Giat 16 yang bertugas mendampingi pemberdayaan ekonomi dan industri lokal Desa Candiyasan.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.instagram.com/giat16.desacandiyasan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium bg-white/10 hover:bg-white/20 text-stone-200 hover:text-white px-4 py-2.5 rounded-full border border-white/20 hover:border-white/40 transition-all backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <svg className="w-4 h-4 fill-current text-stone-200" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram @giat16.desacandiyasan ↗</span>
            </a>
            <a
              href="https://www.tiktok.com/@unnesgiat16.desaca?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium bg-white/10 hover:bg-white/20 text-stone-200 hover:text-white px-4 py-2.5 rounded-full border border-white/20 hover:border-white/40 transition-all backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <svg className="w-4 h-4 fill-current text-stone-200" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .56.04.83.1v-3.54a6.34 6.34 0 0 0-.83-.05 6.34 6.34 0 1 0 6.34 6.34V9.33a8.16 8.16 0 0 0 4.77 1.53v-3.4a4.85 4.85 0 0 1-1-.77z"/>
              </svg>
              <span>TikTok @unnesgiat16.desaca ↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Video Section ────────────────────────────────────────── */}
      <section className="py-16 px-5 sm:px-8 dot-grid">
        <div className="max-w-7xl mx-auto">
          
          <ScrollReveal>
            <div className="mb-16">
              <p className="eyebrow text-rose-500 mb-4">Galeri Video</p>
              <h2 className="heading-section text-stone-900">Jejak Langkah</h2>
            </div>
          </ScrollReveal>

          {/* Featured Video */}
          <ScrollReveal delay={100}>
            <div className="bg-white border border-stone-100 mb-8 lg:mb-12 group hover:shadow-lg transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative w-full aspect-video lg:aspect-auto lg:h-full">
                  <LiteYouTube
                    youtubeId={featuredVideo.youtubeId}
                    title={featuredVideo.title}
                    aspectRatio="auto"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center bg-stone-50">
                  <p className="eyebrow text-emerald-600 mb-3">Sorotan Utama</p>
                  <h3 className="heading-card text-stone-900 mb-4">{featuredVideo.title}</h3>
                  <p className="body-lead text-stone-500">{featuredVideo.description}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Other Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {restVideos.map((video, i) => (
              <ScrollReveal key={video.id} delay={i * 100}>
                <div className="bg-white border border-stone-100 group hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  <div className="relative w-full aspect-video">
                    <LiteYouTube
                      youtubeId={video.youtubeId}
                      title={video.title}
                      aspectRatio="video"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h4 className="font-serif text-xl text-stone-900 mb-3 leading-snug">{video.title}</h4>
                    <p className="body-base text-stone-500 flex-grow">{video.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── Photo Gallery Section ─────────────────────────────────── */}
      <section className="py-16 px-5 sm:px-8 bg-[#f5f3ef] border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Section Header */}
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="eyebrow text-emerald-700 mb-3">Dokumentasi Momen</p>
              <h2 className="heading-section text-stone-900 mb-4">Galeri Foto Kegiatan</h2>
              <p className="body-lead text-stone-600">
                Dokumentasi rangkaian pengabdian mahasiswa UNNES Giat 16 di Desa Candiyasan — mencakup koordinasi pemerintahan desa, pendampingan pendidikan, workshop kreativitas anak, hingga pelatihan kesehatan kelompok tani.
              </p>
            </div>
          </ScrollReveal>

          {/* ── Sub-section 1: Pemerintahan Desa & Monitoring DPL ────── */}
          <div className="space-y-6">
            <ScrollReveal>
              <div className="flex items-center gap-3 border-b border-stone-300/80 pb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                <h3 className="font-serif text-2xl text-stone-900">
                  Pemerintahan Desa &amp; Monitoring DPL
                </h3>
              </div>
            </ScrollReveal>

            {/* 2 Landscape Cards for Perangkat Desa (4:3 aspect ratio) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Card 1: Sinergi Perangkat Desa */}
              <ScrollReveal delay={100}>
                <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
                  <div className="relative w-full aspect-video bg-stone-950 overflow-hidden">
                    <ZoomableImage
                      src="/images/tim/Foto Bersama Perangkat Desa Candiyasan.jpg"
                      alt="Foto Bersama Perangkat Desa Candiyasan"
                      caption="Foto Bersama Tim UNNES Giat 16 Candiyasan dengan Perangkat Desa Candiyasan"
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 z-20 eyebrow bg-amber-900/90 text-amber-300 px-3 py-1 text-xs rounded-md shadow-sm">
                      Pemerintahan Desa
                    </span>
                  </div>
                  <div className="p-4 sm:p-5 flex flex-col flex-grow bg-white">
                    <h4 className="font-serif text-lg font-bold text-stone-900 mb-2 group-hover:text-emerald-800 transition-colors">
                      Sinergi Bersama Perangkat Desa Candiyasan
                    </h4>
                    <p className="text-sm text-stone-600 leading-relaxed flex-grow">
                      Foto bersama seluruh jajaran Perangkat Desa Candiyasan sebagai wujud kolaborasi dan dukungan penuh dari pihak pemerintahan desa terhadap kelancaran program pengabdian UNNES Giat 16.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 2: Pemaparan Proker */}
              <ScrollReveal delay={150}>
                <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
                  <div className="relative w-full aspect-video bg-stone-950 overflow-hidden">
                    <ZoomableImage
                      src="/images/tim/Foto Bersama Perangkat Desa Candiyasan Setelah Pemaparan Proker.jpg"
                      alt="Foto Bersama Perangkat Desa Setelah Pemaparan Program Kerja"
                      caption="Foto Bersama Perangkat Desa Candiyasan Setelah Pemaparan Program Kerja UNNES Giat 16"
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 z-20 eyebrow bg-stone-900/90 text-stone-200 px-3 py-1 text-xs rounded-md shadow-sm">
                      Program Kerja
                    </span>
                  </div>
                  <div className="p-4 sm:p-5 flex flex-col flex-grow bg-white">
                    <h4 className="font-serif text-lg font-bold text-stone-900 mb-2 group-hover:text-emerald-800 transition-colors">
                      Pemaparan Program Kerja Kepada Perangkat Desa
                    </h4>
                    <p className="text-sm text-stone-600 leading-relaxed flex-grow">
                      Momen setelah sesi pemaparan program kerja dan diskusi rencana pengabdian UNNES Giat 16 kepada seluruh jajaran perangkat Desa Candiyasan sebagai langkah awal koordinasi kegiatan.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* ── Sub-section 2: Edukasi Sekolah & Evaluasi DPL ────────── */}
          <div className="space-y-6">
            <ScrollReveal>
              <div className="flex items-center gap-3 border-b border-stone-300/80 pb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                <h3 className="font-serif text-2xl text-stone-900">
                  Edukasi Sekolah &amp; Evaluasi Lapangan DPL
                </h3>
              </div>
            </ScrollReveal>

            {/* Featured Landscape: Kepsek & Guru */}
            <ScrollReveal delay={100}>
              <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                  <div className="lg:col-span-7 relative w-full aspect-video bg-stone-950 overflow-hidden">
                    <ZoomableImage
                      src="/images/tim/Foto Bersama Kepsek dan Para Guru.jpg"
                      alt="Foto Bersama Kepala Sekolah dan Para Guru Desa Candiyasan"
                      caption="Foto Bersama Tim UNNES Giat 16 Candiyasan dengan Kepala Sekolah dan Para Guru"
                      fill
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 z-20 eyebrow bg-emerald-900/90 text-emerald-300 px-3 py-1 text-xs rounded-md shadow-sm">
                      Edukasi &amp; Sekolah
                    </span>
                  </div>
                  <div className="lg:col-span-5 p-5 sm:p-8 flex flex-col justify-center bg-white">
                    <h4 className="font-serif text-xl font-bold text-stone-900 mb-2 group-hover:text-emerald-800 transition-colors">
                      Pendampingan Edukasi Bersama Kepala Sekolah &amp; Guru
                    </h4>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      Dokumentasi kebersamaan tim mahasiswa UNNES Giat 16 Candiyasan bersama Bapak/Ibu Kepala Sekolah serta dewan guru dalam pelaksanaan program pendampingan pendidikan dan sosialisasi di lingkungan sekolah setempat.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2 Portrait Cards (3:4 aspect ratio): Anak SD & DPL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Card 1: Anak-anak SD */}
              <ScrollReveal delay={100}>
                <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
                  <div className="relative w-full aspect-square bg-stone-950 overflow-hidden">
                    <ZoomableImage
                      src="/images/tim/Foto Bersama Anak-anak SD Candiyasan.jpg"
                      alt="Foto Bersama Anak-Anak SD Candiyasan"
                      caption="Foto Bersama Tim UNNES Giat 16 Candiyasan bersama Siswa-Siswi SD Candiyasan"
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 z-20 eyebrow bg-emerald-900/90 text-emerald-300 px-3 py-1 text-xs rounded-md shadow-sm">
                      Edukasi &amp; Sekolah
                    </span>
                  </div>
                  <div className="p-4 sm:p-5 flex flex-col flex-grow bg-white">
                    <h4 className="font-serif text-lg font-bold text-stone-900 mb-2 group-hover:text-emerald-800 transition-colors">
                      Keceriaan Bersama Siswa-Siswi SD Candiyasan
                    </h4>
                    <p className="text-sm text-stone-600 leading-relaxed flex-grow">
                      Keceriaan dan kebersamaan tim mahasiswa UNNES Giat 16 Candiyasan bersama para siswa-siswi SD Candiyasan dalam kegiatan sosialisasi dan pendampingan pendidikan di sekolah.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 2: DPL Dr. Drs. Cahyo Yuwono */}
              <ScrollReveal delay={150}>
                <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
                  <div className="relative w-full aspect-square bg-stone-950 overflow-hidden">
                    <ZoomableImage
                      src="/images/tim/Foto Bersama DPL.jpeg"
                      alt="Foto Bersama DPL Dr. Drs. Cahyo Yuwono, M.Pd."
                      caption="Foto Bersama Tim UNNES Giat 16 Candiyasan bersama DPL Dr. Drs. Cahyo Yuwono, M.Pd."
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 z-20 eyebrow bg-rose-900/90 text-rose-200 px-3 py-1 text-xs rounded-md shadow-sm">
                      Monitoring &amp; Pengabdian
                    </span>
                  </div>
                  <div className="p-4 sm:p-5 flex flex-col flex-grow bg-white">
                    <h4 className="font-serif text-lg font-bold text-stone-900 mb-2 group-hover:text-emerald-800 transition-colors">
                      Monitoring &amp; Evaluasi Lapangan Bersama DPL
                    </h4>
                    <p className="text-sm text-stone-600 leading-relaxed flex-grow">
                      Momen kebersamaan seluruh tim mahasiswa UNNES Giat 16 Candiyasan bersama Dosen Pembimbing Lapangan (Dr. Drs. Cahyo Yuwono, M.Pd.) saat evaluasi dan pendampingan program pengabdian di lokasi.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* ── Sub-section 3: Program Kerja Workshop Sampah Plastik ─── */}
          <div className="space-y-6">
            <ScrollReveal>
              <div className="flex items-center gap-3 border-b border-stone-300/80 pb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-600" />
                <h3 className="font-serif text-2xl text-stone-900">
                  Workshop Kreativitas Sampah Tutup Botol Plastik
                </h3>
              </div>
            </ScrollReveal>

            {/* Featured Landscape: Full Team Action (4:3) */}
            <ScrollReveal delay={100}>
              <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                  <div className="lg:col-span-7 relative w-full aspect-video bg-stone-950 overflow-hidden">
                    <ZoomableImage
                      src="/images/tim/Foto Bersama Proker Workshop Pemanfaatan Sampah Tutup Botol Plastik Menjadi Ganci.jpg"
                      alt="Foto Bersama Kegiatan Workshop Pemanfaatan Sampah Tutup Botol Plastik"
                      caption="Foto Bersama Seluruh Tim dalam Program Kerja Workshop Pemanfaatan Sampah Tutup Botol Plastik Menjadi Gantungan Kunci"
                      fill
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 z-20 eyebrow bg-cyan-900/90 text-cyan-300 px-3 py-1 text-xs rounded-md shadow-sm">
                      Program Kerja Unggulan
                    </span>
                  </div>
                  <div className="lg:col-span-5 p-5 sm:p-8 flex flex-col justify-center bg-white">
                    <h4 className="font-serif text-xl font-bold text-stone-900 mb-2 group-hover:text-emerald-800 transition-colors">
                      Pelaksanaan Workshop Pemanfaatan Sampah Plastik
                    </h4>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      Dokumentasi seluruh tim mahasiswa UNNES Giat 16 Candiyasan dalam penyelenggaraan program kerja inovatif: daur ulang sampah tutup botol plastik menjadi cinderamata gantungan kunci bernilai ekonomis dan ramah lingkungan.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 3 Portrait Cards (3:4 aspect ratio) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Card 1: Panitia Workshop */}
              <ScrollReveal delay={100}>
                <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
                  <div className="relative w-full aspect-square bg-stone-950 overflow-hidden">
                    <ZoomableImage
                      src="/images/tim/Foto Bersama Photobooth Panitia Workshop Pemanfaatan Tutup Botol Plastik.jpg"
                      alt="Foto Photobooth Panitia Workshop Pemanfaatan Tutup Botol Plastik"
                      caption="Foto Bersama Panitia Workshop Pemanfaatan Tutup Botol Plastik Menjadi Gantungan Kunci"
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 z-20 eyebrow bg-cyan-900/90 text-cyan-300 px-3 py-1 text-xs rounded-md shadow-sm">
                      Panitia Workshop
                    </span>
                  </div>
                  <div className="p-4 sm:p-5 flex flex-col flex-grow bg-white">
                    <h4 className="font-serif text-lg font-bold text-stone-900 mb-2 group-hover:text-emerald-800 transition-colors">
                      Panitia Workshop Tutup Botol Plastik
                    </h4>
                    <p className="text-sm text-stone-600 leading-relaxed flex-grow">
                      Tim panitia pelaksana kegiatan workshop pengolahan limbah plastik menjadi kreasi gantungan kunci di Desa Candiyasan.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 2: Panitia & Anak Peserta */}
              <ScrollReveal delay={150}>
                <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
                  <div className="relative w-full aspect-square bg-stone-950 overflow-hidden">
                    <ZoomableImage
                      src="/images/tim/Foto Bersama Photobooth Panitia & Anak Peserta Workshop Pemanfaatan Tutup Botol Plastik.jpg"
                      alt="Foto Panitia dan Anak Peserta Workshop Tutup Botol Plastik"
                      caption="Foto Bersama Panitia dan Anak-Anak Peserta Workshop Tutup Botol Plastik Menjadi Gantungan Kunci"
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 z-20 eyebrow bg-cyan-900/90 text-cyan-300 px-3 py-1 text-xs rounded-md shadow-sm">
                      Kreativitas Bersama
                    </span>
                  </div>
                  <div className="p-4 sm:p-5 flex flex-col flex-grow bg-white">
                    <h4 className="font-serif text-lg font-bold text-stone-900 mb-2 group-hover:text-emerald-800 transition-colors">
                      Panitia &amp; Anak-Anak Peserta
                    </h4>
                    <p className="text-sm text-stone-600 leading-relaxed flex-grow">
                      Momen kebersamaan panitia bersama anak-anak peserta workshop usai menyelesaikan karya kerajinan gantungan kunci buatan sendiri.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 3: Anak Peserta Workshop */}
              <ScrollReveal delay={200}>
                <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
                  <div className="relative w-full aspect-square bg-stone-950 overflow-hidden">
                    <ZoomableImage
                      src="/images/tim/Foto Anak Peserta Workshop Pemanfaatan Tutup Botol Plastik.jpg"
                      alt="Foto Anak-Anak Peserta Workshop Pemanfaatan Tutup Botol Plastik"
                      caption="Anak-Anak Peserta Workshop Kreatif Pemanfaatan Tutup Botol Plastik Menjadi Gantungan Kunci"
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 z-20 eyebrow bg-rose-900/90 text-rose-200 px-3 py-1 text-xs rounded-md shadow-sm">
                      Pemberdayaan Anak
                    </span>
                  </div>
                  <div className="p-4 sm:p-5 flex flex-col flex-grow bg-white">
                    <h4 className="font-serif text-lg font-bold text-stone-900 mb-2 group-hover:text-emerald-800 transition-colors">
                      Antusiasme Anak-Anak Peserta
                    </h4>
                    <p className="text-sm text-stone-600 leading-relaxed flex-grow">
                      Semangat dan keceriaan anak-anak desa dalam mempraktikkan proses daur ulang sampah plastik untuk menumbuhkan kepedulian lingkungan sejak dini.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* ── Sub-section 4: Program Pelatihan Pemulihan Otot (Dusun Grenjeng) ─ */}
          <div className="space-y-6">
            <ScrollReveal>
              <div className="flex items-center gap-3 border-b border-stone-300/80 pb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                <h3 className="font-serif text-2xl text-stone-900">
                  Pelatihan Pemulihan Otot &amp; Penanganan Cedera (Dusun Grenjeng)
                </h3>
              </div>
            </ScrollReveal>

            {/* 3 Landscape Cards (4:3 aspect ratio) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Petani I Card */}
              <ScrollReveal delay={100}>
                <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
                  <div className="relative w-full aspect-video bg-stone-950 overflow-hidden">
                    <ZoomableImage
                      src="/images/tim/Foto Bersama Kelompok Petani I - Dusun Grenjeng - Proker Pelatihan Pemulihan Otot & Penanganan Pertama Cidera.jpg"
                      alt="Foto Bersama Kelompok Petani I Dusun Grenjeng - Pelatihan Pemulihan Otot"
                      caption="Foto Bersama Kelompok Petani I Dusun Grenjeng — Proker Pelatihan Pemulihan Otot & Penanganan Pertama Cedera"
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 z-20 eyebrow bg-rose-900/90 text-rose-200 px-3 py-1 text-xs rounded-md shadow-sm">
                      Dusun Grenjeng
                    </span>
                  </div>
                  <div className="p-4 sm:p-5 flex flex-col flex-grow bg-white">
                    <h4 className="font-serif text-lg font-bold text-stone-900 mb-2 group-hover:text-emerald-800 transition-colors">
                      Pelatihan Bersama Kelompok Petani I
                    </h4>
                    <p className="text-sm text-stone-600 leading-relaxed flex-grow">
                      Pelatihan pemulihan stamina otot dan pertolongan pertama cedera fisik bersama para warga dan Kelompok Petani I di Dusun Grenjeng.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Petani II Card */}
              <ScrollReveal delay={150}>
                <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
                  <div className="relative w-full aspect-video bg-stone-950 overflow-hidden">
                    <ZoomableImage
                      src="/images/tim/Foto Bersama Kelompok Petani II - Dusun Grenjeng - Proker Pelatihan Pemulihan Otot & Penanganan Pertama Cidera.jpg"
                      alt="Foto Bersama Kelompok Petani II Dusun Grenjeng - Pelatihan Pemulihan Otot"
                      caption="Foto Bersama Kelompok Petani II Dusun Grenjeng — Proker Pelatihan Pemulihan Otot & Penanganan Pertama Cedera"
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 z-20 eyebrow bg-rose-900/90 text-rose-200 px-3 py-1 text-xs rounded-md shadow-sm">
                      Dusun Grenjeng
                    </span>
                  </div>
                  <div className="p-4 sm:p-5 flex flex-col flex-grow bg-white">
                    <h4 className="font-serif text-lg font-bold text-stone-900 mb-2 group-hover:text-emerald-800 transition-colors">
                      Pelatihan Bersama Kelompok Petani II
                    </h4>
                    <p className="text-sm text-stone-600 leading-relaxed flex-grow">
                      Penyuluhan peregangan otot, pencegahan kram kerja, serta penanganan awal cedera fisik untuk mendukung stamina para petani lokal.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Kelompok Jurangjero Card */}
              <ScrollReveal delay={200}>
                <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
                  <div className="relative w-full aspect-video bg-stone-950 overflow-hidden">
                    <ZoomableImage
                      src="/images/tim/Foto Bersama Kelompok Petani - Dusun Jurangjero - Proker Pelatihan Pemulihan Otot & Penanganan Pertama Cidera.jpg"
                      alt="Foto Bersama Kelompok Petani Dusun Jurangjero"
                      caption="Foto Bersama Kelompok Petani Dusun Jurangjero — Pelatihan Pemulihan Otot & Penanganan Pertama Cedera"
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 z-20 eyebrow bg-rose-900/90 text-rose-200 px-3 py-1 text-xs rounded-md shadow-sm">
                      Dusun Jurangjero
                    </span>
                  </div>
                  <div className="p-4 sm:p-5 flex flex-col flex-grow bg-white">
                    <h4 className="font-serif text-lg font-bold text-stone-900 mb-2 group-hover:text-emerald-800 transition-colors">
                      Pelatihan Bersama Petani Jurangjero
                    </h4>
                    <p className="text-sm text-stone-600 leading-relaxed flex-grow">
                      Kebersamaan tim UNNES Giat 16 bersama kelompok petani Dusun Jurangjero usai mempraktikkan metode relaksasi otot dan penanganan cedera.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

        </div>
      </section>

      {/* ── Members Section (Dark Editorial) ─────────────────────── */}
      <section className="bg-stone-900 py-24 lg:py-32 px-5 sm:px-8 relative overflow-hidden">
        <div className="absolute inset-0 batik-accent opacity-5" />
        
        <div className="relative max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3.5 mb-4">
                  <Image
                    src="/images/elemen/LOGO GIAT 16 Desa Candiyasan.png"
                    alt="Logo UNNES Giat 16 Desa Candiyasan"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                    unoptimized
                  />
                  <p className="eyebrow text-rose-400">Mahasiswa KKN</p>
                </div>
                <h2 className="heading-section text-stone-100">
                  Tim Penggerak<br />Program
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6 lg:pt-3 body-lead text-stone-400">
                <p>
                  Kolaborasi lintas disiplin ilmu dari mahasiswa Universitas Negeri Semarang. Bersama masyarakat Desa Candiyasan, tim Giat 16 mendedikasikan waktu dan tenaga untuk mewujudkan digitalisasi industri lokal.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Members Grid */}
          <style>{`
            @keyframes matrix-fall {
              0%   { transform: translateY(-100%); opacity: 0; }
              10%  { opacity: 1; }
              90%  { opacity: 0.6; }
              100% { transform: translateY(400%); opacity: 0; }
            }
            .matrix-col {
              position: absolute;
              top: 0;
              font-family: 'Courier New', monospace;
              font-size: 11px;
              color: rgba(34, 211, 238, 0.5);
              animation: matrix-fall linear infinite;
              user-select: none;
              writing-mode: vertical-lr;
              letter-spacing: 6px;
            }
          `}</style>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-24">
            {members.map((member, i) => {
              const isDev = member.id === 'm7';
              return (
                <ScrollReveal key={member.id} delay={i * 50}>
                  {isDev ? (
                    <div className="group relative bg-stone-950/60 border border-stone-800 p-5 rounded-lg h-full flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:bg-stone-950">

                      {/* Matrix rain — visible on hover only */}
                      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-lg" aria-hidden="true">
                        {Array.from({ length: 10 }).map((_, col) => (
                          <span
                            key={col}
                            className="matrix-col"
                            style={{
                              left: `${col * 10}%`,
                              animationDelay: `${col * 0.18}s`,
                              animationDuration: `${1.4 + (col % 3) * 0.45}s`,
                            }}
                          >
                            {['1', '0', '<', '>', '{', '}', '/', ';', '=', '('][col]}
                          </span>
                        ))}
                      </div>

                      {/* Glowing top accent line */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="relative w-16 h-16 rounded-full overflow-hidden bg-stone-800 border-2 border-stone-700 group-hover:border-cyan-400 group-hover:shadow-[0_0_16px_rgba(34,211,238,0.55)] transition-all duration-500 shrink-0">
                            <ZoomableImage
                              src={member.image}
                              alt={member.name}
                              caption={`${member.name} — ${member.role} (${member.prodi})`}
                              fill
                              unoptimized
                              sizes="64px"
                              className="object-cover group-hover:brightness-110 transition-all duration-500"
                            />
                          </div>
                          <div>
                            <span className="inline-block eyebrow px-2 py-0.5 rounded text-[11px] mb-1 transition-all duration-300 text-emerald-400 bg-emerald-950/80 group-hover:text-cyan-300 group-hover:bg-cyan-950/80">
                              <span className="group-hover:hidden">{member.role}</span>
                              <span className="hidden group-hover:inline font-mono">{'<'}/Web Dev{'>'}</span>
                            </span>
                            <p className="text-xs uppercase tracking-wider transition-colors duration-300 text-stone-400 group-hover:text-cyan-600">{member.faculty}</p>
                          </div>
                        </div>
                        <h4 className="font-serif text-lg mb-1 transition-colors duration-300 text-stone-100 group-hover:text-cyan-300">
                          {member.name}
                          <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 inline-block w-[2px] h-[0.9em] bg-cyan-400 align-middle animate-pulse" />
                        </h4>
                      </div>

                      <div className="relative z-10 mt-2 border-t pt-2 transition-colors duration-300 border-stone-800/80 group-hover:border-cyan-900/60">
                        <p className="text-xs text-stone-400 group-hover:hidden">{member.prodi}</p>
                        <p className="hidden group-hover:block text-xs font-mono text-cyan-500 tracking-wide">Next.js · TypeScript · CSS</p>
                      </div>
                    </div>
                  ) : (
                    <div className="group bg-stone-950/60 border border-stone-800 p-5 rounded-lg hover:border-emerald-500 transition-all duration-300 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="relative w-16 h-16 rounded-full overflow-hidden bg-stone-800 border-2 border-stone-700 group-hover:border-emerald-400 transition-colors shrink-0 shadow-md">
                            <ZoomableImage
                              src={member.image}
                              alt={member.name}
                              caption={`${member.name} — ${member.role} (${member.prodi})`}
                              fill
                              unoptimized
                              sizes="64px"
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <span className="inline-block eyebrow text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded text-[11px] mb-1">
                              {member.role}
                            </span>
                            <p className="text-xs text-stone-400 uppercase tracking-wider">{member.faculty}</p>
                          </div>
                        </div>
                        <h4 className="font-serif text-lg text-stone-100 mb-1 group-hover:text-emerald-300 transition-colors">{member.name}</h4>
                      </div>
                      <p className="text-xs text-stone-400 mt-2 border-t border-stone-800/80 pt-2">{member.prodi}</p>
                    </div>
                  )}
                </ScrollReveal>
              );
            })}
          </div>

          {/* DPL Section */}
          <ScrollReveal>
            <div className="border-t border-stone-800 pt-16">
              <div className="bg-stone-950/70 border border-stone-800/80 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
                  {/* Photo Column */}
                  <div className="md:col-span-4 lg:col-span-3 flex justify-center">
                    <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-stone-700/80 group shadow-xl hover:border-emerald-400 transition-all duration-500 bg-gradient-to-b from-stone-850 to-stone-950 shrink-0">
                      <ZoomableImage
                        src="/images/tim/Cahyo.png"
                        alt="Dr. Drs. Cahyo Yuwono, M.Pd. — Dosen Pembimbing Lapangan"
                        caption="Dr. Drs. Cahyo Yuwono, M.Pd. — Dosen Pembimbing Lapangan UNNES Giat 16 Desa Candiyasan"
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 208px, 208px"
                        className="object-contain p-0 scale-[1.12] group-hover:scale-[1.18] transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Info Column */}
                  <div className="md:col-span-8 lg:col-span-9 text-center md:text-left">
                    <span className="inline-block eyebrow text-rose-400 bg-rose-950/60 border border-rose-900/50 px-3 py-1 rounded-full text-xs mb-3">
                      Dosen Pembimbing Lapangan
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-stone-100 mb-1">
                      Dr. Drs. Cahyo Yuwono, M.Pd.
                    </h3>
                    <p className="body-lead text-emerald-400 mb-4 font-medium">
                      Universitas Negeri Semarang
                    </p>
                    <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-2xl">
                      Terima kasih sebesar-besarnya atas bimbingan, arahan, dan dedikasi tanpa henti selama pelaksanaan program pengabdian UNNES Giat 16 di Desa Candiyasan, Kecamatan Kertek, Kabupaten Wonosobo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

    </div>
  );
}
