"use client";

import { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { UMKM } from '@/types';

// Helper to highlight matching text
function HighlightMatch({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <span>{text}</span>;
  
  const escaped = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === query.trim().toLowerCase() ? (
          <mark key={i} className="bg-emerald-100 text-emerald-950 font-semibold px-0.5 rounded-sm">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </span>
  );
}

export default function UMKMSearch() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState<UMKM[] | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listboxRef = useRef<HTMLDivElement>(null);

  // Lazy load UMKM data when search begins or on initial focus
  const loadData = () => {
    if (!data) {
      import('@/data/umkm').then((m) => setData(m.umkmData));
    }
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      loadData();
    }
  }, [searchTerm]);

  // Global shortcut handler (/ and Ctrl+K / Cmd+K)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;
      const isInputActive =
        activeElement instanceof HTMLInputElement ||
        activeElement instanceof HTMLTextAreaElement ||
        (activeElement as HTMLElement)?.isContentEditable;

      if ((e.key === '/' && !isInputActive) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) {
        e.preventDefault();
        loadData();
        inputRef.current?.focus();
        setIsOpen(true);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  // Handle click outside and Escape key to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setActiveIndex(-1);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        setActiveIndex(-1);
        inputRef.current?.focus();
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
  }, [isOpen]);

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

  // Scroll active item into view
  useEffect(() => {
    if (activeIndex >= 0 && listboxRef.current) {
      const activeEl = listboxRef.current.children[activeIndex] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [activeIndex]);

  // Keyboard navigation through search results
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => (prev <= 0 ? results.length - 1 : prev - 1));
    } else if (e.key === 'Enter' && activeIndex >= 0 && activeIndex < results.length) {
      e.preventDefault();
      const selected = results[activeIndex];
      router.push(`/umkm/${selected.id}`);
      setIsOpen(false);
      setSearchTerm('');
    }
  };

  return (
    <div ref={containerRef} className="relative max-w-lg mb-10 w-full">
      <label htmlFor="umkm-search-input" className="sr-only">
        Cari nama produsen atau produk industri lokal Desa Candiyasan
      </label>
      <div className="flex items-center gap-3 border-b-2 border-stone-300 focus-within:border-emerald-800 transition-colors pb-2">
        <Search className="h-4 w-4 text-stone-500 shrink-0" aria-hidden="true" />
        <input
          ref={inputRef}
          id="umkm-search-input"
          type="search"
          placeholder="Cari nama produsen atau produk..."
          className="w-full bg-transparent text-stone-900 placeholder-stone-500 focus:outline-none text-base"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
            setActiveIndex(-1);
          }}
          onFocus={() => {
            loadData();
            setIsOpen(true);
          }}
          onKeyDown={handleInputKeyDown}
          aria-autocomplete="list"
          aria-expanded={isSearching && isOpen}
          aria-controls="search-results-list"
          aria-activedescendant={activeIndex >= 0 ? `search-item-${results[activeIndex]?.id}` : undefined}
          role="combobox"
        />
        {searchTerm ? (
          <button
            type="button"
            onClick={() => {
              setSearchTerm('');
              setIsOpen(false);
              setActiveIndex(-1);
              inputRef.current?.focus();
            }}
            className="text-stone-500 hover:text-rose-600 transition-colors shrink-0 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none rounded"
            aria-label="Hapus teks pencarian"
          >
            <X className="h-4 w-4" />
          </button>
        ) : (
          <kbd
            className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono text-stone-600 bg-stone-100 border border-stone-300 px-1.5 py-0.5 rounded select-none cursor-pointer"
            onClick={() => {
              loadData();
              inputRef.current?.focus();
            }}
            title="Tekan tombol / untuk mencari"
          >
            /
          </kbd>
        )}
      </div>

      {/* Live announcement for screen readers */}
      <div className="sr-only" aria-live="polite">
        {isSearching
          ? `${results.length} produsen atau produk ditemukan untuk kata kunci ${searchTerm}`
          : ''}
      </div>

      {isSearching && isOpen && (
        <div
          ref={listboxRef}
          id="search-results-list"
          role="listbox"
          className="absolute z-50 top-full mt-2 w-full bg-white border border-stone-200 max-h-80 overflow-y-auto rounded-b-md"
        >
          {results.length > 0 ? (
            results.map((umkm, idx) => (
              <Link
                key={umkm.id}
                id={`search-item-${umkm.id}`}
                href={`/umkm/${umkm.id}`}
                role="option"
                aria-selected={activeIndex === idx}
                className={`flex items-center gap-4 px-4 py-3 transition-colors group border-b border-stone-100 last:border-0 min-h-[56px] ${
                  activeIndex === idx ? 'bg-emerald-50 text-emerald-950 font-medium' : 'hover:bg-stone-50'
                }`}
                onClick={() => {
                  setSearchTerm('');
                  setIsOpen(false);
                }}
              >
                <div className="relative h-12 w-12 bg-stone-100 shrink-0 overflow-hidden rounded border border-stone-200/80">
                  <Image
                    src={umkm.imageUrl}
                    alt={umkm.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="flex-grow min-w-0">
                  <p className="text-stone-900 group-hover:text-emerald-800 transition-colors text-sm truncate">
                    <HighlightMatch text={umkm.name} query={searchTerm} />
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="eyebrow text-stone-500 text-[10px]">{umkm.category}</span>
                    <span className="text-stone-300 text-xs">·</span>
                    <span className="text-stone-500 text-xs font-normal">
                      {umkm.products.length} produk
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="px-4 py-8 text-center text-stone-500 text-sm italic">
              Tidak ditemukan produsen atau produk untuk &ldquo;{searchTerm}&rdquo;
            </div>
          )}
        </div>
      )}
    </div>
  );
}
