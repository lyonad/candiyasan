import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-[#faf9f7] min-h-screen flex items-center justify-center px-5 sm:px-8 py-32 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
      
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          className="font-serif font-bold text-stone-900 leading-none select-none"
          style={{ fontSize: '28vw', opacity: 0.03 }}
        >
          404
        </span>
      </div>

      <div className="relative max-w-xl mx-auto text-center z-10">
        <p className="eyebrow text-rose-500 mb-4">Halaman Tidak Ditemukan</p>
        <h1 className="font-serif text-5xl sm:text-7xl text-stone-900 font-light mb-6">
          404
        </h1>
        <p className="body-lead text-stone-500 mb-10 leading-relaxed">
          Maaf, halaman atau profil produsen yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-emerald-900 text-stone-50 px-8 py-4 eyebrow hover:bg-emerald-800 transition-colors w-full sm:w-auto"
          >
            <Home className="h-4 w-4" />
            Kembali ke Beranda
          </Link>
          <Link
            href="/umkm"
            className="inline-flex items-center justify-center gap-2 border border-stone-300 text-stone-800 px-8 py-4 eyebrow hover:border-stone-900 transition-colors w-full sm:w-auto"
          >
            <ArrowLeft className="h-4 w-4" />
            Jelajahi Katalog
          </Link>
        </div>
      </div>
    </div>
  );
}
