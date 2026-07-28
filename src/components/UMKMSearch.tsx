"use client";

import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { UMKM } from '@/types';

export default function UMKMSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState<UMKM[] | null>(null);

  useEffect(() => {
    if (searchTerm.length > 0 && !data) {
      import('@/data/umkm').then((m) => setData(m.umkmData));
    }
  }, [searchTerm, data]);

  const isSearching = searchTerm.trim().length > 0;
  const results = isSearching && data
    ? data.filter((u) =>
        u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="relative max-w-lg mb-10">
      <div className="flex items-center gap-3 border-b-2 border-stone-200 focus-within:border-emerald-800 transition-colors pb-2">
        <Search className="h-4 w-4 text-stone-400 shrink-0" />
        <input
          type="text"
          placeholder="Cari nama produsen atau produk..."
          className="w-full bg-transparent text-stone-900 placeholder-stone-400 focus:outline-none text-base"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button onClick={() => setSearchTerm('')} className="text-stone-400 hover:text-rose-500 transition-colors shrink-0">
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {isSearching && (
        <div className="absolute z-50 top-full mt-2 w-full bg-white border border-stone-200 shadow-xl max-h-80 overflow-y-auto">
          {results.length > 0 ? (
            results.map((umkm) => (
              <Link
                key={umkm.id}
                href={`/umkm/${umkm.id}`}
                className="flex items-center gap-4 px-4 py-3 hover:bg-stone-50 transition-colors group border-b border-stone-50 last:border-0"
                onClick={() => setSearchTerm('')}
              >
                <div className="relative h-12 w-12 bg-stone-100 shrink-0 overflow-hidden">
                  <Image src={umkm.imageUrl} alt={umkm.name} fill className="object-cover" />
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
