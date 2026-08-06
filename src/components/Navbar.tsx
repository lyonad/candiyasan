"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/',       label: 'Beranda' },
  { href: '/umkm',   label: 'Katalog' },
  { href: '/about',  label: 'Tentang' },
  { href: '/others', label: 'Lainnya' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === '/';
  const useDarkText = scrolled;

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-[#faf9f7]/95 backdrop-blur-md shadow-sm border-stone-200/50'
          : 'bg-transparent border-transparent'
      }`}
      role="navigation"
      aria-label="Navigasi Utama"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="group flex flex-col leading-none" aria-label="Beranda Candiyasan">
            <span className={`font-serif text-[1.6rem] tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-stone-900 group-hover:text-emerald-800' : 'text-stone-100 group-hover:text-emerald-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'
            }`}>
              Candiyasan
            </span>
            <span className={`eyebrow mt-0.5 ${scrolled ? 'text-emerald-700' : 'text-emerald-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'}`}>
              Industri Lokal
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`eyebrow transition-colors duration-200 relative py-2 after:absolute after:bottom-[-3px] after:left-0 after:h-[1px] after:bg-rose-400 after:transition-all ${
                    active ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  } ${
                    useDarkText
                      ? active ? 'text-stone-900' : 'text-stone-500 hover:text-stone-900'
                      : active ? 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]' : 'text-stone-200 hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {label}
                </Link>
              );
            })}
            <a
              href="https://candiyasan-kertek.desa.id/"
              target="_blank"
              rel="noopener noreferrer"
              className={`eyebrow px-5 py-2.5 transition-colors duration-200 ${
                useDarkText
                  ? 'bg-emerald-900 text-stone-50 hover:bg-emerald-800'
                  : 'bg-stone-100/20 text-stone-100 border border-stone-100/30 hover:bg-stone-100/30 backdrop-blur-sm shadow-[0_4px_12px_rgba(0,0,0,0.5)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]'
              }`}
            >
              Web Desa ↗
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-sm -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center ${useDarkText ? 'text-stone-800' : 'text-stone-200'}`}
            aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6 stroke-[1.5]" /> : <Menu className="h-6 w-6 stroke-[1.5]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#faf9f7] border-t border-stone-100 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto"
        >
          <div className="px-6 pt-6 pb-10 flex flex-col gap-6">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`font-serif text-3xl py-1 transition-colors ${
                  isActive(href) ? 'text-emerald-800 font-medium' : 'text-stone-800 hover:text-emerald-800'
                }`}
                onClick={() => setIsOpen(false)}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
            <div className="border-t border-stone-200 pt-6">
              <a
                href="https://candiyasan-kertek.desa.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow text-emerald-800 border border-emerald-800/40 px-5 py-3.5 block text-center hover:bg-emerald-800 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Kunjungi Web Utama Desa ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
