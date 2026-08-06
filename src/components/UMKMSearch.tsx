"use client";

import { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { UMKM } from '@/types';

export default function UMKMSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState<UMKM[] | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchTerm.length > 0 && !data) {
      import('@/data/umkm').then((m) => setData(m.umkmData));
    }
  }, [searchTerm, data]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const isSearching = searchTerm.trim().length > 0;
  const results = useMemo(() => {
    if (!isSearching || !data) return [];
    const query = searchTerm.toLowerCase().trim();
    return data.filter(
      (u) =>
        u.name.toLowerCase().includes(query) ||
        u.description.toLowerCase().includes(query) ||
        u.category.toLowerCase().includes(query) ||
        u.products.some((p) => p.name.toLowerCase().includes(query))
    );
  }, [isSearching, data, searchTerm]);

  return (
    <div ref={containerRef} className="relative max-w-lg mb-10 w-full">
      <div className="flex items-center gap-3 border-b-2 border-stone-200 focus-within:border-emerald-800 transition-colors pb-2">
        <Search className="h-4 w-4 text-stone-400 shrink-0" aria-hidden="true" />
        <input
          type="text"
          placeholder="Cari nama produsen atau produk..."
          className="w-full bg-transparent text-stone-900 placeholder-stone-400 focus:outline-none text-base"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          aria-label="Cari nama produsen atau produk"
          aria-expanded={isSearching && isOpen}
          aria-controls="search-results-list"
          role="combobox"
        />
        {searchTerm && (
          <button
            onClick={() => {
              setSearchTerm('');
              setIsOpen(false);
            }}
            className="text-stone-400 hover:text-rose-500 transition-colors shrink-0 p-1 min-w-[32px] min-h-[32px] flex items-center justify-center"
            aria-label="Hapus teks pencarian"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Live announcement for screen readers */}
      <div className="sr-only" aria-live="polite">
        {isSearching
          ? `${results.length} hasil ditemukan untuk ${searchTerm}`
          : ''}
      </div>

      {isSearching && isOpen && (
        <div
          id="search-results-list"
          role="listbox"
          className="absolute z-50 top-full mt-2 w-full bg-white border border-stone-200 shadow-xl max-h-80 overflow-y-auto"
        >
          {results.length > 0 ? (
            results.map((umkm) => (
              <Link
                key={umkm.id}
                href={`/umkm/${umkm.id}`}
                role="option"
                aria-selected="false"
                className="flex items-center gap-4 px-4 py-3 hover:bg-stone-50 transition-colors group border-b border-stone-50 last:border-0 min-h-[48px]"
                onClick={() => {
                  setSearchTerm('');
                  setIsOpen(false);
                }}
              >
                <div className="relative h-12 w-12 bg-stone-100 shrink-0 overflow-hidden">
                  <Image
                    src={umkm.imageUrl}
                    alt={umkm.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-stone-900 group-hover:text-emerald-800 transition-colors text-sm">{umkm.name}</p>
                  <p className="eyebrow text-stone-400 mt-0.5">{umkm.category}</p>
                </div>
              </Link>
            ))
          ) : (
            <div className="px-4 py-8 text-center text-stone-400 text-sm italic">
              Tidak ditemukan untuk &ldquo;{searchTerm}&rdquo;
            </div>
          )}
        </div>
      )}
    </div>
  );
}
