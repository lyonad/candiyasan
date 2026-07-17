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
      import('@/data/umkm').then((module) => {
        setData(module.umkmData);
      });
    }
  }, [searchTerm, data]);

  const isSearching = searchTerm.trim().length > 0;
  
  const results = isSearching && data 
    ? data.filter((umkm) => 
        umkm.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        umkm.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="relative w-full max-w-xl mx-auto mb-16">
      <div className="relative border-b border-stone-300 flex items-center pb-2">
        <Search className="h-5 w-5 text-stone-400 shrink-0" />
        <input
          type="text"
          placeholder="Cari karya atau nama perajin..."
          className="block w-full pl-4 pr-10 py-2 bg-transparent text-stone-900 placeholder-stone-400 focus:outline-none text-lg font-light"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button 
            onClick={() => setSearchTerm('')}
            className="absolute right-0 text-stone-400 hover:text-rose-500 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {isSearching && (
        <div className="absolute z-50 w-full mt-4 bg-white shadow-2xl max-h-96 overflow-y-auto border border-stone-100">
          {results.length > 0 ? (
            <div className="p-4 flex flex-col gap-2">
              {results.map((umkm) => (
                <Link 
                  key={umkm.id} 
                  href={`/umkm/${umkm.id}`}
                  className="flex items-center gap-4 p-4 hover:bg-stone-50 transition-colors group"
                >
                  <div className="relative h-14 w-14 shrink-0 bg-stone-100">
                    <Image src={umkm.imageUrl} alt={umkm.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-stone-900 group-hover:text-emerald-800 transition-colors">{umkm.name}</h4>
                    <p className="text-xs uppercase tracking-widest text-stone-400 mt-1">{umkm.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-stone-500 font-light">
              Karya tidak ditemukan untuk &quot;<span className="italic">{searchTerm}</span>&quot;
            </div>
          )}
        </div>
      )}
    </div>
  );
}
