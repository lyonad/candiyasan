import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { UMKM } from '@/types';

type CardSize = 'large' | 'medium' | 'small';

const heightMap: Record<CardSize, string> = {
  large:  'h-[520px]',
  medium: 'h-80',
  small:  'h-60',
};

interface UMKMCardProps {
  umkm: UMKM;
  size?: CardSize;
}

export default function UMKMCard({ umkm, size = 'medium' }: UMKMCardProps) {
  return (
    <Link
      href={`/umkm/${umkm.id}`}
      className={`group relative block overflow-hidden bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 ${heightMap[size]}`}
      aria-label={`Lihat profil produsen ${umkm.name}`}
    >
      {/* Photo */}
      <Image
        src={umkm.imageUrl}
        alt={umkm.name}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Gradient overlay — always present, intensifies on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Top-right arrow — only visible on hover */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
        <div className="bg-stone-100/20 backdrop-blur-sm border border-white/20 p-2">
          <ArrowUpRight className="h-4 w-4 text-white" />
        </div>
      </div>

      {/* Content at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-400 ease-out">
        <span className="eyebrow text-emerald-400 block mb-2">{umkm.category}</span>
        <h3 className={`font-serif text-stone-100 leading-snug mb-3 ${
          size === 'large' ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl'
        }`}>
          {umkm.name}
        </h3>
        <div className="flex items-center justify-between border-t border-white/15 pt-3">
          <span className="eyebrow text-stone-400">{umkm.ownerName}</span>
          <span className="eyebrow text-stone-400 group-hover:text-white transition-colors">Lihat Detail →</span>
        </div>
      </div>
    </Link>
  );
}
