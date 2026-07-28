"use client";

import Image from 'next/image';
import { Product } from '@/types';
import { MessageCircle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  whatsappNumber: string;
}

export default function ProductCard({ product, whatsappNumber }: ProductCardProps) {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);

  const handleOrder = () => {
    const text = encodeURIComponent(`Halo, saya tertarik dengan produk *${product.name}* yang ada di katalog UMKM Candiyasan. Bisa informasikan lebih lanjut?`);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="group relative bg-stone-50 border border-stone-100 hover:border-stone-200 hover:shadow-lg transition-all duration-500 flex flex-col overflow-hidden">
      <div className="relative h-52 bg-stone-200 overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
        />
        {/* Price badge */}
        <div className="absolute bottom-3 left-3">
          <span className="eyebrow bg-stone-900/85 backdrop-blur-sm text-emerald-400 px-3 py-1.5">
            {formatPrice(product.price)}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h4 className="font-serif text-xl text-stone-900 mb-2 leading-snug group-hover:text-emerald-800 transition-colors">{product.name}</h4>
        <p className="body-base text-stone-500 line-clamp-2 mb-5 flex-grow">{product.description}</p>
        <button
          onClick={handleOrder}
          className="flex items-center justify-center gap-2 w-full bg-emerald-900 text-stone-50 py-3 eyebrow hover:bg-emerald-800 transition-colors duration-300"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          Pesan via WhatsApp
        </button>
      </div>
    </div>
  );
}
