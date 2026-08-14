import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Katalog Industri Lokal Desa Candiyasan',
    short_name: 'Candiyasan',
    description: 'Etalase digital resmi produk industri, manufaktur, agroindustri, dan kerajinan lokal dari para produsen Desa Candiyasan, Kertek, Wonosobo.',
    start_url: '/',
    display: 'standalone',
    background_color: '#faf9f7',
    theme_color: '#faf9f7',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/images/elemen/LOGO GIAT 16 Desa Candiyasan.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/elemen/LOGO GIAT 16 Desa Candiyasan.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
