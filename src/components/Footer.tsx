import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-400">

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="group inline-flex items-center gap-3.5 mb-6" aria-label="Beranda Candiyasan">
              <Image
                src="/images/elemen/LOGO GIAT 16 Desa Candiyasan.png"
                alt="Logo UNNES Giat 16 Desa Candiyasan"
                width={48}
                height={48}
                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-105"
                unoptimized
              />
              <div>
                <span className="font-serif text-3xl text-stone-100 group-hover:text-emerald-400 transition-colors block">
                  Candiyasan
                </span>
                <span className="block eyebrow text-emerald-500 mt-0.5">Industri &amp; Manufaktur</span>
              </div>
            </Link>
            <p className="text-stone-400 max-w-xs text-base leading-relaxed mb-8">
              Pusat informasi dan katalog digital resmi dari produk industri dan kerajinan lokal Desa Candiyasan ke pasar yang lebih luas.
            </p>
            <a
              href="https://candiyasan-kertek.desa.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 eyebrow text-emerald-400 border-b border-emerald-400/30 pb-1 hover:text-rose-400 hover:border-rose-400/30 transition-colors"
            >
              Website Utama Desa ↗
            </a>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="eyebrow text-stone-300 mb-5">Navigasi</h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Beranda' },
                { href: '/umkm', label: 'Katalog Produsen' },
                { href: '/about', label: 'Latar Belakang' },
                { href: '/others', label: 'Lainnya' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-stone-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded transition-colors text-sm py-1 inline-block">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="eyebrow text-stone-300 mb-5">Informasi & Lokasi</h3>
            <address className="not-italic text-sm text-stone-300 leading-relaxed space-y-2 mb-4">
              <p className="text-stone-100 font-medium">Kantor Desa Candiyasan</p>
              <p>Kecamatan Kertek, Kabupaten Wonosobo</p>
              <p>Jawa Tengah, Indonesia</p>
            </address>
            <a
              href="https://maps.app.goo.gl/rcLMD7fut89sNeT86"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 eyebrow text-xs bg-stone-800 text-emerald-400 hover:bg-stone-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 px-3.5 py-2 transition-colors border border-stone-700 mb-6"
            >
              📍 Petunjuk Arah Google Maps ↗
            </a>

            <div className="pt-4 border-t border-stone-800/80">
              <h4 className="eyebrow text-stone-300 mb-3 text-[11px]">Media Sosial UNNES Giat 16</h4>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="https://www.instagram.com/giat16.desacandiyasan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs bg-stone-800/90 text-stone-200 hover:text-rose-300 hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 px-3 py-1.5 rounded transition-all border border-stone-700/70"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-rose-400" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram ↗</span>
                </a>
                <a
                  href="https://www.tiktok.com/@unnesgiat16.desaca?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs bg-stone-800/90 text-stone-200 hover:text-cyan-300 hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 px-3 py-1.5 rounded transition-all border border-stone-700/70"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-cyan-400" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .56.04.83.1v-3.54a6.34 6.34 0 0 0-.83-.05 6.34 6.34 0 1 0 6.34 6.34V9.33a8.16 8.16 0 0 0 4.77 1.53v-3.4a4.85 4.85 0 0 1-1-.77z"/>
                  </svg>
                  <span>TikTok ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-stone-400">
          <p>&copy; {year} Pemerintah Desa Candiyasan. Semua hak dilindungi.</p>
          <p>Dibangun untuk kemajuan ekonomi lokal.</p>
        </div>
      </div>
    </footer>
  );
}
