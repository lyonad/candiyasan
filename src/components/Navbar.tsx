"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent absolute top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center border-b border-stone-200/50">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="group flex flex-col">
              <span className="font-serif text-2xl text-stone-900 tracking-tight leading-none group-hover:text-emerald-800 transition-colors">
                Candiyasan
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-700 font-semibold mt-1">
                Koleksi Lokal
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-sm uppercase tracking-wider font-medium text-stone-600 hover:text-rose-500 transition-colors">
              Beranda
            </Link>
            <Link href="/umkm" className="text-sm uppercase tracking-wider font-medium text-stone-600 hover:text-rose-500 transition-colors">
              Katalog
            </Link>
            <Link href="/about" className="text-sm uppercase tracking-wider font-medium text-stone-600 hover:text-rose-500 transition-colors">
              Tentang
            </Link>
            <a 
              href="https://candiyasan-kertek.desa.id/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-wider font-semibold text-emerald-800 border border-emerald-800/30 px-6 py-2.5 rounded hover:bg-emerald-800 hover:text-stone-50 transition-all duration-300"
            >
              Web Desa
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-800 focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7 stroke-[1.5]" /> : <Menu className="h-7 w-7 stroke-[1.5]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-stone-50/95 backdrop-blur-xl border-b border-stone-200 absolute w-full shadow-2xl">
          <div className="px-6 py-8 flex flex-col gap-6">
            <Link 
              href="/" 
              className="text-2xl font-serif text-stone-900 hover:text-rose-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </Link>
            <Link 
              href="/umkm" 
              className="text-2xl font-serif text-stone-900 hover:text-rose-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Katalog Produk
            </Link>
            <Link 
              href="/about" 
              className="text-2xl font-serif text-stone-900 hover:text-rose-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Tentang Program
            </Link>
            <div className="pt-6 border-t border-stone-200">
              <a 
                href="https://candiyasan-kertek.desa.id/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm uppercase tracking-wider font-semibold text-emerald-800 border border-emerald-800 px-6 py-3 hover:bg-emerald-800 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Kunjungi Web Utama Desa
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
