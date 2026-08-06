"use client";

import Link from 'next/link';
import Image from 'next/image';
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
          ? 'bg-[#faf9f7]/95 backdrop-blur-md border-stone-200/60'
          : 'bg-transparent border-transparent'
      }`}
      role="navigation"
      aria-label="Navigasi Utama"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3" aria-label="Beranda Candiyasan">
            <Image
              src="/images/elemen/LOGO GIAT 16 Desa Candiyasan.png"
              alt="Logo UNNES Giat 16 Desa Candiyasan"
              width={40}
              height={40}
              className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105"
              unoptimized
              priority
            />
            <div className="flex flex-col leading-none">
              <span className={`font-serif text-[1.55rem] tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-stone-900 group-hover:text-emerald-800' : 'text-stone-100 group-hover:text-emerald-300'
              }`}>
                Candiyasan
              </span>
              <span className={`eyebrow mt-0.5 ${scrolled ? 'text-emerald-700' : 'text-emerald-400'}`}>
                Industri Lokal
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`eyebrow transition-colors duration-200 relative py-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 after:absolute after:bottom-[-3px] after:left-0 after:h-[1px] after:bg-rose-400 after:transition-all ${
                    active ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  } ${
                    useDarkText
                      ? active ? 'text-stone-900 font-bold' : 'text-stone-600 hover:text-stone-950'
                      : active ? 'text-white font-bold' : 'text-stone-200 hover:text-white'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${useDarkText ? 'text-stone-800' : 'text-stone-100'}`}
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
          className="md:hidden bg-[#faf9f7] border-t border-b border-stone-200 max-h-[calc(100vh-5rem)] overflow-y-auto"
          style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom, 0px))' }}
        >
          <div className="px-6 pt-6 pb-10 flex flex-col gap-6">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`font-serif text-3xl py-1 transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                  isActive(href) ? 'text-emerald-800 font-medium' : 'text-stone-800 hover:text-emerald-800'
                }`}
                onClick={() => setIsOpen(false)}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
