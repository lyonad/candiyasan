import { umkmData } from '@/data/umkm';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function UMKMDetail({ params }: { params: any }) {
  const resolvedParams = await params;
  const umkm = umkmData.find((u) => u.id === resolvedParams.id);

  if (!umkm) {
    notFound();
  }

  return (
    <div className="bg-stone-50 bg-batik min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link 
          href="/umkm"
          className="group inline-flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-stone-500 hover:text-rose-600 transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
          Kembali ke Koleksi
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-start">
          
          {/* Main Image */}
          <div className="lg:col-span-7 relative h-[60vh] w-full bg-stone-100">
            <Image 
              src={umkm.imageUrl}
              alt={umkm.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Details */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-emerald-700 mb-4 block">
                {umkm.category}
              </span>
              <h1 className="text-5xl font-serif text-stone-900 leading-[1.1] mb-6">
                {umkm.name}
              </h1>
              <p className="text-stone-500 font-light text-lg leading-relaxed whitespace-pre-line mb-8">
                {umkm.description}
              </p>
            </div>

            <div className="border-t border-b border-stone-200 py-8 mb-10 space-y-4">
              <div className="grid grid-cols-3">
                <span className="text-sm uppercase tracking-widest text-stone-400 font-medium">Perajin</span>
                <span className="col-span-2 text-stone-900">{umkm.ownerName}</span>
              </div>
              <div className="grid grid-cols-3">
                <span className="text-sm uppercase tracking-widest text-stone-400 font-medium">Lokasi</span>
                <span className="col-span-2 text-stone-900">{umkm.address}</span>
              </div>
              {umkm.instagram && (
                <div className="grid grid-cols-3">
                  <span className="text-sm uppercase tracking-widest text-stone-400 font-medium">Sosial</span>
                  <span className="col-span-2 text-emerald-700">{umkm.instagram}</span>
                </div>
              )}
            </div>

            <a 
              href={`https://wa.me/${umkm.whatsapp}?text=Halo, saya melihat profil ${umkm.name} di Web UMKM Candiyasan.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-stone-900 text-stone-50 px-8 py-5 uppercase tracking-widest text-sm font-semibold hover:bg-emerald-800 transition-colors duration-300"
            >
              Hubungi Pemilik (WhatsApp)
            </a>
          </div>
        </div>

        {/* Products Section */}
        <div className="pt-20 border-t border-stone-200">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-stone-900 mb-4">Katalog Karya</h2>
            <p className="text-stone-500 font-light text-lg">Jelajahi produk yang ditawarkan oleh {umkm.name}</p>
          </div>
          
          {umkm.products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {umkm.products.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  whatsappNumber={umkm.whatsapp} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-stone-100">
              <p className="text-stone-500 text-lg font-light italic">Belum ada karya yang dipublikasikan.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export function generateStaticParams() {
  return umkmData.map((umkm) => ({
    id: umkm.id,
  }));
}
