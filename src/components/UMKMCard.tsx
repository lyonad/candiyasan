import Link from 'next/link';
import Image from 'next/image';
import { UMKM } from '@/types';
import { ArrowRight } from 'lucide-react';

interface UMKMCardProps {
  umkm: UMKM;
}

export default function UMKMCard({ umkm }: UMKMCardProps) {
  return (
    <Link 
      href={`/umkm/${umkm.id}`}
      className="group flex flex-col h-full bg-white transition-all duration-500 hover:-translate-y-1"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image 
          src={umkm.imageUrl} 
          alt={umkm.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur text-stone-100 px-3 py-1 text-xs uppercase tracking-widest font-medium">
          {umkm.category}
        </div>
      </div>
      
      <div className="pt-6 pb-4 flex flex-col flex-grow">
        <h3 className="font-serif text-2xl text-stone-900 mb-3 group-hover:text-emerald-800 transition-colors">
          {umkm.name}
        </h3>
        <p className="text-stone-500 font-light leading-relaxed mb-6 line-clamp-2 flex-grow">
          {umkm.description}
        </p>
        
        <div className="mt-auto flex items-center text-sm font-medium text-emerald-800 group-hover:text-rose-600 transition-colors">
          <span className="uppercase tracking-widest mr-2">Eksplorasi Profil</span>
          <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
