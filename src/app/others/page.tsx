import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export default function OthersPage() {
  const videos = [
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
    {
      id: 'v5',
      title: 'Produk Unggulan: Kopi Arabika Candiyasan',
      description: 'Liputan khusus tentang proses produksi dan keunggulan kopi arabika asli lereng Sindoro dari Desa Candiyasan.',
      youtubeId: 'M7FIvfx5J10',
    },
    {
      id: 'v6',
      title: 'Penutupan & Kenangan UNNES Giat 16',
      description: 'Momen haru penutupan dan perpisahan tim mahasiswa UNNES Giat 16 bersama warga Desa Candiyasan.',
      youtubeId: 'fRh_vgS2dFE',
    },
  ];

  const members = [
    { id: 'm1',  name: 'Rayhan Raynata Marton',         prodi: 'S1 Manajemen',                                    faculty: 'FE',    role: 'Kormades' },
    { id: 'm2',  name: 'Damar Maulana Ramadhan',        prodi: 'S1 Pendidikan Jasmani, Kesehatan, dan Rekreasi', faculty: 'FIK',   role: 'Wakil Kormades' },
    { id: 'm3',  name: 'Tazhafina Klarisa',             prodi: 'S1 Ilmu Politik',                                 faculty: 'FIS',   role: 'Sekretaris' },
    { id: 'm4',  name: 'Salsabila Zain Anisah',         prodi: 'S1 Akuntansi',                                    faculty: 'FE',    role: 'Bendahara' },
    { id: 'm5',  name: 'Deswita Maharani',              prodi: 'S1 Manajemen',                                    faculty: 'FE',    role: 'Humas' },
    { id: 'm6',  name: 'Fazarani Hasnan Afisah',        prodi: 'S1 Ilmu Politik',                                 faculty: 'FIS',   role: 'Humas' },
    { id: 'm7',  name: 'Lyon Ambrosio Djuanda',         prodi: 'S1 Teknik Informatika',                           faculty: 'FMIPA', role: 'PDD' },
    { id: 'm8',  name: 'Anisa Yulina Rahmawati',        prodi: 'S1 Pendidikan IPA',                               faculty: 'FMIPA', role: 'PDD' },
    { id: 'm9',  name: 'Zalfa Shofiyatun Nabila',       prodi: 'S1 Pendidikan Seni Rupa',                         faculty: 'FBS',   role: 'PDD' },
    { id: 'm10', name: 'Adnin Djiogasa Harahap',        prodi: 'S1 Teknik Mesin',                                 faculty: 'FT',    role: 'Logistik' },
    { id: 'm11', name: 'Nisfa Laila Kamila',            prodi: 'S1 Pendidikan Guru Sekolah Dasar',                faculty: 'FIP',   role: 'Logistik' },
  ];

  const initials = (name: string) =>
    name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();

  const [featuredVideo, ...restVideos] = videos;

  return (
    <div className="bg-[#faf9f7] min-h-screen">

      {/* ── Cinematic Full-Bleed Hero ──────────────────────────── */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=85"
          alt="Tim bekerja bersama"
          fill
          className="object-cover"
          priority
        />
        {/* Multi-stop gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-900/15" />

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
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${featuredVideo.youtubeId}`}
                    title={featuredVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
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
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 mb-24">
            {members.map((member, i) => (
              <ScrollReveal key={member.id} delay={i * 50}>
                <div className="group border-l border-stone-700/50 pl-5 hover:border-emerald-500 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center font-serif text-lg text-emerald-400 shrink-0 group-hover:bg-emerald-900 group-hover:text-emerald-300 transition-colors">
                      {initials(member.name)}
                    </div>
                    <div>
                      <p className="eyebrow text-emerald-500 mb-0.5">{member.role}</p>
                    </div>
                  </div>
                  <h4 className="font-serif text-xl text-stone-100 mb-2">{member.name}</h4>
                  <p className="text-sm text-stone-400">{member.prodi}</p>
                  <p className="text-xs text-stone-500 mt-1 uppercase tracking-widest">{member.faculty}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* DPL Section */}
          <ScrollReveal>
            <div className="border-t border-stone-800 pt-16">
              <div className="max-w-2xl">
                <p className="eyebrow text-rose-500 mb-8">Dosen Pembimbing Lapangan</p>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-900/50 border border-emerald-800 flex items-center justify-center font-serif text-2xl text-emerald-300 shrink-0">
                    CY
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl text-stone-100 mb-2">Dr. Drs. Cahyo Yuwono, M.Pd.</h3>
                    <p className="body-lead text-stone-400 mb-2">Universitas Negeri Semarang</p>
                    <p className="text-sm text-stone-500 leading-relaxed max-w-lg">
                      Terima kasih atas bimbingan, arahan, dan dukungan tanpa henti selama pelaksanaan program UNNES Giat 16 di Desa Candiyasan.
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
