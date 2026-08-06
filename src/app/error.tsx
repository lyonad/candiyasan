"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console or error tracking service
    console.error('Unhandled Application Error:', error);
  }, [error]);

  return (
    <div className="bg-[#faf9f7] min-h-screen flex items-center justify-center px-5 sm:px-8 py-32 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-xl mx-auto text-center z-10">
        <p className="eyebrow text-rose-600 mb-4">Terjadi Kendala Teknis</p>
        <h1 className="font-serif text-4xl sm:text-5xl text-stone-900 font-light mb-6">
          Sesuatu Tidak Berjalan Semestinya
        </h1>
        <p className="body-lead text-stone-500 mb-10 leading-relaxed">
          Terjadi kesalahan saat memuat halaman ini. Anda dapat mencoba memuat ulang atau kembali ke halaman utama.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 bg-emerald-900 text-stone-50 px-8 py-4 eyebrow hover:bg-emerald-800 transition-colors w-full sm:w-auto cursor-pointer"
          >
            <RefreshCw className="h-4 w-4" />
            Coba Muat Ulang
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border border-stone-300 text-stone-800 px-8 py-4 eyebrow hover:border-stone-900 transition-colors w-full sm:w-auto"
          >
            <Home className="h-4 w-4" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
