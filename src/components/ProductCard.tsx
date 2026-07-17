import Image from 'next/image';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  whatsappNumber: string;
}

export default function ProductCard({ product, whatsappNumber }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleOrderClick = () => {
    const text = encodeURIComponent(`Halo, saya tertarik dengan produk ${product.name} yang ada di katalog UMKM Candiyasan.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="group flex flex-col h-full bg-white">
      <div className="relative h-72 w-full overflow-hidden bg-stone-100">
        <Image 
          src={product.imageUrl} 
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button 
            onClick={handleOrderClick}
            className="bg-rose-600 text-white px-6 py-3 text-sm uppercase tracking-widest font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            Pesan Sekarang
          </button>
        </div>
      </div>
      
      <div className="pt-5 pb-4 flex flex-col flex-grow text-center">
        <h4 className="font-serif text-xl text-stone-900 mb-2">{product.name}</h4>
        <p className="text-stone-500 font-light text-sm mb-4 line-clamp-2 px-2 flex-grow">
          {product.description}
        </p>
        <div className="font-medium text-emerald-800 tracking-wide mt-auto">
          {formatPrice(product.price)}
        </div>
      </div>
    </div>
  );
}
