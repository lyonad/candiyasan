import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-stone-400 py-16 md:py-24 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="md:col-span-5">
            <Link href="/" className="group flex flex-col mb-6 inline-block">
              <span className="font-serif text-3xl text-stone-100 tracking-tight leading-none group-hover:text-rose-300 transition-colors">
                Candiyasan
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-500 font-semibold mt-2">
                Koleksi Lokal
              </span>
            </Link>
            <p className="text-stone-400 mb-8 max-w-sm text-lg font-light leading-relaxed">
              Mengangkat mahakarya lokal dan produk autentik dari para pelaku UMKM di Desa Candiyasan ke panggung digital.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-stone-100 font-medium mb-6 text-sm uppercase tracking-widest">Eksplorasi</h3>
            <ul className="space-y-4 font-light">
              <li>
                <Link href="/" className="hover:text-rose-400 transition-colors">Beranda</Link>
              </li>
              <li>
                <Link href="/umkm" className="hover:text-rose-400 transition-colors">Katalog Koleksi</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-rose-400 transition-colors">Latar Belakang</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-stone-100 font-medium mb-6 text-sm uppercase tracking-widest">Informasi</h3>
            <ul className="space-y-4 font-light">
              <li>
                <span className="block text-stone-200 mb-1">Balai Desa Candiyasan</span>
                Kec. Kertek, Kab. Wonosobo<br />Jawa Tengah, Indonesia
              </li>
              <li className="pt-4">
                <a href="https://candiyasan-kertek.desa.id/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-rose-400 transition-colors inline-flex items-center gap-2">
                  <span className="h-[1px] w-4 bg-current"></span>
                  Website Utama Desa
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="mt-20 pt-8 border-t border-emerald-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light">
          <p>
            &copy; {new Date().getFullYear()} Pemerintah Desa Candiyasan.
          </p>
          <p>
            Didesain untuk Ekonomi Lokal.
          </p>
        </div>
      </div>
    </footer>
  );
}
