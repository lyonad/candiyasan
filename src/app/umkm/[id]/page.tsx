import { umkmData } from '@/data/umkm';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowLeft, MapPin, Phone, AtSign, MessageCircle } from 'lucide-react';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function UMKMDetail({ params }: { params: any }) {
  const resolvedParams = await params;
  const umkm = umkmData.find((u) => u.id === resolvedParams.id);

  if (!umkm) notFound();

  return (
    <div className="bg-[#faf9f7] min-h-screen">

      {/* ── Cinematic Hero ────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex flex-col justify-end overflow-hidden">
        <Image
          src={umkm.imageUrl}
          alt={umkm.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-stone-900/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/50 to-transparent" />

        {/* Back nav */}
        <div className="absolute top-0 left-0 right-0 pt-24 px-5 sm:px-8 z-10">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/umkm"
              className="inline-flex items-center gap-2 eyebrow text-stone-300 hover:text-white transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Katalog
            </Link>
          </div>
        </div>

        {/* Title overlay */}
        <div className="relative max-w-7xl mx-auto w-full px-5 sm:px-8 pb-14 pt-40">
          <span className="eyebrow text-emerald-400 block mb-3">{umkm.category}</span>
          <h1 className="heading-hero text-stone-100 max-w-2xl">{umkm.name}</h1>
          <p className="eyebrow text-stone-400 mt-4">{umkm.ownerName}</p>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Main content */}
          <div className="lg:col-span-8">

            {/* Description — editorial style */}
            <ScrollReveal>
              <div className="mb-16">
                <p className="eyebrow text-rose-500 mb-4">Profil Usaha</p>
                <p className="font-serif text-2xl sm:text-3xl text-stone-800 leading-relaxed">
                  {umkm.description}
                </p>
              </div>
            </ScrollReveal>

            {/* Products */}
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-8 border-b border-stone-200 pb-4">
                <h2 className="heading-section text-stone-900">Katalog Produk</h2>
                <span className="eyebrow text-stone-400">{umkm.products.length} item</span>
              </div>

              {umkm.products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {umkm.products.map((product) => (
                    <ProductCard key={product.id} product={product} whatsappNumber={umkm.whatsapp} />
                  ))}
                </div>
              ) : (
                <div className="bg-stone-50 border border-stone-100 py-16 text-center">
                  <p className="text-stone-400 italic">Belum ada produk yang dipublikasikan.</p>
                </div>
              )}
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-stone-900 p-7 sticky top-28 space-y-6">
              <h3 className="eyebrow text-stone-500 pb-4 border-b border-stone-800">Informasi Kontak</h3>

              <div className="space-y-5 text-sm">
                <div className="flex gap-3">
                  <span className="text-stone-500 mt-0.5 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </span>
                  <div>
                    <p className="text-stone-500 text-xs mb-0.5">Pemilik</p>
                    <p className="font-medium text-stone-100">{umkm.ownerName}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin className="h-4 w-4 text-stone-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-stone-500 text-xs mb-0.5">Alamat</p>
                    <p className="text-stone-300">{umkm.address}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone className="h-4 w-4 text-stone-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-stone-500 text-xs mb-0.5">Telepon</p>
                    <p className="text-stone-300">{umkm.phone}</p>
                  </div>
                </div>

                {umkm.instagram && (
                  <div className="flex gap-3">
                    <AtSign className="h-4 w-4 text-stone-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-stone-500 text-xs mb-0.5">Instagram</p>
                      <p className="text-stone-300">{umkm.instagram}</p>
                    </div>
                  </div>
                )}
              </div>

              <a
                href={`https://wa.me/${umkm.whatsapp}?text=${encodeURIComponent(`Halo, saya melihat profil ${umkm.name} di katalog Candiyasan dan ingin bertanya lebih lanjut.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-emerald-800 text-stone-50 py-4 eyebrow hover:bg-emerald-700 transition-colors duration-300"
              >
                <MessageCircle className="h-4 w-4" />
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return umkmData.map((umkm) => ({ id: umkm.id }));
}
