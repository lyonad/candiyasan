import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import LiteYouTube from '@/components/LiteYouTube';
import ZoomableImage from '@/components/ZoomableImage';

export default function OthersPage() {
  const videos = [
    {
      id: 'v-cedera',
      title: 'Tutorial Pelatihan Pemulihan Otot & Penanganan Pertama Cidera',
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
    { id: 'm1',  name: 'Rayhan Raynata Marton',         prodi: 'S1 Manajemen',                                    faculty: 'FE',    role: 'Kormades',        image: '/images/tim/Rayhan.jpg' },
    { id: 'm2',  name: 'Damar Maulana Ramadhan',        prodi: 'S1 Pendidikan Jasmani, Kesehatan, dan Rekreasi', faculty: 'FIK',   role: 'Wakil Kormades',  image: '/images/tim/Damar.jpg' },
    { id: 'm3',  name: 'Tazhafina Klarisa',             prodi: 'S1 Ilmu Politik',                                 faculty: 'FIS',   role: 'Sekretaris',      image: '/images/tim/Klarisa.jpg' },
    { id: 'm4',  name: 'Salsabila Zain Anisah',         prodi: 'S1 Akuntansi',                                    faculty: 'FE',    role: 'Bendahara',       image: '/images/tim/Zain.jpg' },
    { id: 'm5',  name: 'Deswita Maharani',              prodi: 'S1 Manajemen',                                    faculty: 'FE',    role: 'Humas',           image: '/images/tim/Deswita.jpg' },
    { id: 'm6',  name: 'Fazarani Hasnan Afisah',        prodi: 'S1 Ilmu Politik',                                 faculty: 'FIS',   role: 'Humas',           image: '/images/tim/Fazarani.jpg' },
    { id: 'm7',  name: 'Lyon Ambrosio Djuanda',         prodi: 'S1 Teknik Informatika',                           faculty: 'FMIPA', role: 'PDD',             image: '/images/tim/Lyon.jpg' },
    { id: 'm8',  name: 'Anisa Yulina Rahmawati',        prodi: 'S1 Pendidikan IPA',                               faculty: 'FMIPA', role: 'PDD',             image: '/images/tim/Anisa.jpg' },
    { id: 'm9',  name: 'Zalfa Shofiyatun Nabila',       prodi: 'S1 Pendidikan Seni Rupa',                         faculty: 'FBS',   role: 'PDD',             image: '/images/tim/Zalfa.jpg' },
    { id: 'm10', name: 'Adnin Djiogasa Harahap',        prodi: 'S1 Teknik Mesin',                                 faculty: 'FT',    role: 'Logistik',        image: '/images/tim/Adnin.jpg' },
    { id: 'm11', name: 'Nisfa Laila Kamila',            prodi: 'S1 Pendidikan Guru Sekolah Dasar',                faculty: 'FIP',   role: 'Logistik',        image: '/images/tim/Nisfa.jpg' },
  ];

  const [featuredVideo, ...restVideos] = videos;

  return (
    <div className="bg-[#faf9f7] min-h-screen">

      {/* ── Cinematic Full-Bleed Hero ──────────────────────────── */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
        <ZoomableImage
          src="/images/tim/Foto Bersama DPL.jpeg"
          alt="Tim UNNES Giat 16 Desa Candiyasan bersama DPL"
          caption="Foto Bersama Mahasiswa UNNES Giat 16 Desa Candiyasan dengan DPL Dr. Drs. Cahyo Yuwono, M.Pd."
          fill
          sizes="100vw"
          className="object-cover"
          containerClassName="absolute inset-0 w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/65 to-stone-900/25 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto w-full px-5 sm:px-8 pb-16 pt-40">
          <p className="eyebrow text-emerald-400 mb-6">UNNES Giat 16 — Desa Candiyasan</p>
          <h1 className="heading-hero text-stone-100 max-w-4xl mb-6">
            Dokumentasi &amp;<br />
            <em className="text-emerald-400 font-normal">Tim Pengabdian.</em>
          </h1>
          <p className="body-lead text-stone-300 max-w-2xl">
            Kumpulan video dokumentasi kegiatan dan profil mahasiswa UNNES Giat 16 yang bertugas mendampingi pemberdayaan ekonomi dan industri lokal Desa Candiyasan.
          </p>
        </div>
      </section>

      {/* ── Video Section ────────────────────────────────────────── */}
      <section className="py-24 px-5 sm:px-8 dot-grid">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
      <section className="py-20 px-5 sm:px-8 bg-stone-100/70 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-14">
              <p className="eyebrow text-emerald-700 mb-3">Dokumentasi Momen</p>
              <h2 className="heading-section text-stone-900">Galeri Foto Kegiatan</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Kepsek & Guru Photo Card */}
            <ScrollReveal delay={100}>
              <div className="bg-white border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
                <div className="relative w-full aspect-[16/10] bg-stone-900 overflow-hidden">
                  <ZoomableImage
                    src="/images/tim/Foto Bersama Kepsek dan Para Guru.jpg"
                    alt="Foto Bersama Kepala Sekolah dan Para Guru Desa Candiyasan"
                    caption="Foto Bersama Tim UNNES Giat 16 Candiyasan dengan Kepala Sekolah dan Para Guru"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 z-20 eyebrow bg-emerald-900/90 text-emerald-300 px-3 py-1 text-xs">
                    Edukasi &amp; Sekolah
                  </span>
                </div>
                <div className="p-6 sm:p-8 flex flex-col flex-grow bg-white">
                  <h3 className="font-serif text-2xl text-stone-900 mb-3 group-hover:text-emerald-800 transition-colors">
                    Pendampingan Edukasi Bersama Kepala Sekolah &amp; Para Guru
                  </h3>
                  <p className="body-base text-stone-600 leading-relaxed flex-grow">
                    Dokumentasi kebersamaan tim mahasiswa UNNES Giat 16 Candiyasan bersama Bapak/Ibu Kepala Sekolah serta jajaran guru dalam pelaksanaan sosialisasi dan program pengabdian di lingkungan sekolah setempat.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* DPL & Team Photo Card */}
            <ScrollReveal delay={200}>
              <div className="bg-white border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
                <div className="relative w-full aspect-[16/10] bg-stone-900 overflow-hidden">
                  <ZoomableImage
                    src="/images/tim/Foto Bersama DPL.jpeg"
                    alt="Foto Bersama DPL Dr. Drs. Cahyo Yuwono, M.Pd."
                    caption="Foto Bersama Tim UNNES Giat 16 Candiyasan bersama DPL Dr. Drs. Cahyo Yuwono, M.Pd."
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 z-20 eyebrow bg-rose-900/90 text-rose-200 px-3 py-1 text-xs">
                    Monitoring &amp; Pengabdian
                  </span>
                </div>
                <div className="p-6 sm:p-8 flex flex-col flex-grow bg-white">
                  <h3 className="font-serif text-2xl text-stone-900 mb-3 group-hover:text-emerald-800 transition-colors">
                    Monitoring &amp; Evaluasi Lapangan Bersama DPL
                  </h3>
                  <p className="body-base text-stone-600 leading-relaxed flex-grow">
                    Momen kebersamaan seluruh anggota mahasiswa UNNES Giat 16 Desa Candiyasan bersama Dosen Pembimbing Lapangan (Dr. Drs. Cahyo Yuwono, M.Pd.) saat evaluasi dan pendampingan program pengabdian.
                  </p>
                </div>
              </div>
            </ScrollReveal>
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
                <p className="eyebrow text-rose-400 mb-4">Mahasiswa KKN</p>
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
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <p className="eyebrow text-rose-400 mb-3">Dosen Pembimbing Lapangan</p>
                  <h3 className="font-serif text-3xl sm:text-4xl text-stone-100 mb-2">Dr. Drs. Cahyo Yuwono, M.Pd.</h3>
                  <p className="body-lead text-emerald-400 mb-4">Universitas Negeri Semarang</p>
                  <p className="text-sm text-stone-400 leading-relaxed max-w-xl">
                    Terima kasih sebesar-besarnya atas bimbingan, arahan, dan dedikasi tanpa henti selama pelaksanaan program pengabdian UNNES Giat 16 di Desa Candiyasan, Kecamatan Kertek, Kabupaten Wonosobo.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-stone-700/80 shadow-2xl group">
                    <ZoomableImage
                      src="/images/tim/Foto Bersama DPL.jpeg"
                      alt="Foto Bersama DPL UNNES Giat 16 Desa Candiyasan"
                      caption="Foto Bersama Tim UNNES Giat 16 dengan Dosen Pembimbing Lapangan Dr. Drs. Cahyo Yuwono, M.Pd."
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
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
