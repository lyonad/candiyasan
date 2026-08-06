import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-400">

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="group inline-block mb-6">
              <span className="font-serif text-3xl text-stone-100 group-hover:text-emerald-400 transition-colors">
                Candiyasan
              </span>
              <span className="block eyebrow text-emerald-500 mt-0.5">Industri & Manufaktur</span>
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
            <h3 className="eyebrow text-stone-500 mb-5">Navigasi</h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Beranda' },
                { href: '/umkm', label: 'Katalog Produsen' },
                { href: '/about', label: 'Latar Belakang' },
                { href: '/others', label: 'Lainnya' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-stone-400 hover:text-stone-100 transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="eyebrow text-stone-500 mb-5">Informasi & Lokasi</h3>
            <address className="not-italic text-sm text-stone-400 leading-relaxed space-y-2 mb-4">
              <p className="text-stone-200 font-medium">Kantor Desa Candiyasan</p>
              <p>Kecamatan Kertek, Kabupaten Wonosobo</p>
              <p>Jawa Tengah, Indonesia</p>
            </address>
            <a
              href="https://maps.app.goo.gl/rcLMD7fut89sNeT86"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 eyebrow text-xs bg-stone-800 text-emerald-400 hover:bg-stone-700 px-3.5 py-2 transition-colors border border-stone-700"
            >
              📍 Petunjuk Arah Google Maps ↗
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-stone-600">
          <p>&copy; {year} Pemerintah Desa Candiyasan. Semua hak dilindungi.</p>
          <p>Dibangun untuk kemajuan ekonomi lokal.</p>
        </div>
      </div>
    </footer>
  );
}
