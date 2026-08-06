"use client";

import ZoomableImage from '@/components/ZoomableImage';
import { Product } from '@/types';
import { MessageCircle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  whatsappNumber: string;
}

export default function ProductCard({ product, whatsappNumber }: ProductCardProps) {
  const formatPrice = (price: number) => {
    if (!price || price <= 0) return 'Hubungi Produsen';
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
  };

  const rawDigits = (whatsappNumber || '').replace(/[^0-9]/g, '');
  const cleanWaNumber = rawDigits.startsWith('0') ? '62' + rawDigits.slice(1) : rawDigits;
  const orderMessage = encodeURIComponent(`Halo, saya tertarik dengan produk *${product.name}* yang ada di katalog UMKM Candiyasan. Bisa informasikan lebih lanjut?`);
  const waHref = cleanWaNumber ? `https://wa.me/${cleanWaNumber}?text=${orderMessage}` : `https://wa.me/?text=${orderMessage}`;

  return (
    <div className="group relative bg-stone-50 border border-stone-100 hover:border-stone-200 hover:shadow-lg transition-all duration-500 flex flex-col overflow-hidden">
      <div className="relative h-52 bg-stone-200 overflow-hidden">
        <ZoomableImage
          src={product.imageUrl}
          alt={product.name}
          caption={`${product.name} — ${formatPrice(product.price)}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
          containerClassName="w-full h-full"
        />
        {/* Price badge */}
        <div className="absolute bottom-3 left-3 z-20 pointer-events-none">
          <span className="eyebrow bg-stone-900/85 backdrop-blur-sm text-emerald-400 px-3 py-1.5">
            {formatPrice(product.price)}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h4 className="font-serif text-xl text-stone-900 mb-2 leading-snug group-hover:text-emerald-800 transition-colors">{product.name}</h4>
        <p className="body-base text-stone-500 line-clamp-2 mb-5 flex-grow">{product.description}</p>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-emerald-900 text-stone-50 py-3 eyebrow hover:bg-emerald-800 transition-colors duration-300 min-h-[44px]"
          aria-label={`Pesan ${product.name} via WhatsApp`}
        >
          <MessageCircle className="h-3.5 w-3.5" />
          Pesan via WhatsApp
        </a>
      </div>
    </div>
  );
}
