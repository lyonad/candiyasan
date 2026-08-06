import { UMKM } from '@/types';

export const umkmData: UMKM[] = [
  {
    id: 'kopi-arabica-nastiti',
    name: 'Kopi Arabica Nastiti',
    ownerName: 'Kelompok Tani Nastiti (Pak Kadus)',
    category: 'Makanan & Minuman',
    description: 'Kopi hasil produksi musiman dari dusun Kabelukan. Kualitas kopi ini sudah terbukti hingga menembus pasar luar kota dan bahkan Korea (dalam bentuk green bean melalui eksportir di Salatiga). Proses produksi dilakukan secara tradisional dan teliti, mulai dari pemetikan, pengeringan, hingga roasting. Satu batang pohon kopi berkualitas dapat menghasilkan hingga 20kg.',
    address: 'Dusun Kabelukan, Desa Candiyasan',
    phone: '-',
    whatsapp: '',
    instagram: '',
    mapsUrl: 'https://maps.app.goo.gl/rcLMD7fut89sNeT86',
    imageUrl: '/images/umkm/kopi-nastiti.jpg',
    products: [
      {
        id: 'p-kopi-1',
        name: 'Kopi Arabica Bubuk (1 kg)',
        description: 'Kopi Arabica bubuk murni, sangat disukai oleh konsumen rumah tangga.',
        price: 25000,
        imageUrl: '/images/umkm/kopi-nastiti.jpg',
      },
      {
        id: 'p-kopi-2',
        name: 'Green Bean Kopi Arabica',
        description: 'Biji kopi mentah (green bean) kualitas ekspor.',
        price: 0,
        imageUrl: '/images/umkm/kopi-nastiti.jpg',
      }
    ]
  },
  {
    id: 'pabrik-tahu-jurang-jero',
    name: 'Pabrik Tahu Jurang Jero',
    ownerName: 'Warga Jurang Jero',
    category: 'Makanan & Minuman',
    description: 'Pabrik pembuatan tahu lokal yang mendistribusikan produknya untuk wilayah Wonosobo dan pasar-pasar di sekitarnya. Saat ini mempekerjakan 7 orang warga lokal (3 perempuan, 4 laki-laki). Tahu diproduksi segar setiap hari.',
    address: 'Dusun Jurang Jero, Desa Candiyasan',
    phone: '088215629804',
    whatsapp: '088215629804',
    mapsUrl: 'https://maps.app.goo.gl/rcLMD7fut89sNeT86',
    imageUrl: '/images/umkm/pabrik-tahu.jpg',
    products: [
      {
        id: 'p-tahu-1',
        name: 'Tahu Segar (Plastik isi 10)',
        description: 'Tahu putih segar dalam kemasan plastik praktis isi 10 buah.',
        price: 5000,
        imageUrl: '/images/umkm/pabrik-tahu.jpg',
      },
      {
        id: 'p-tahu-2',
        name: 'Tahu Grosir (Ember 75kg)',
        description: 'Pembelian tahu skala besar/grosir menggunakan kemasan ember 75kg untuk pedagang pasar.',
        price: 0,
        imageUrl: '/images/umkm/pabrik-tahu.jpg',
      }
    ]
  },
  {
    id: 'produksi-teh-lokal',
    name: 'Produksi Teh Lokal Candiyasan',
    ownerName: 'Warga Jurang Jero',
    category: 'Makanan & Minuman',
    description: 'Produksi teh asli yang diolah langsung oleh warga. Produksi dilakukan sekitar 15 hari sekali menyesuaikan dengan kondisi cuaca (panas matahari). Teh ini sangat diminati oleh warga sekitar dan juga menerima permintaan dari luar desa.',
    address: 'Jalan bawah depan posko, Dusun Jurang Jero',
    phone: '-',
    whatsapp: '',
    mapsUrl: 'https://maps.app.goo.gl/rcLMD7fut89sNeT86',
    imageUrl: '/images/umkm/teh-candiyasan.jpg',
    products: [
      {
        id: 'p-teh-1',
        name: 'Teh Kering Lokal (1 kg)',
        description: 'Daun teh kering olahan asli Candiyasan. Kemasan dan berat bisa disesuaikan dengan permintaan pembeli.',
        price: 80000,
        imageUrl: '/images/umkm/teh-candiyasan.jpg',
      }
    ]
  },
  {
    id: 'cimoring-jhofani',
    name: 'Cimoring Jhofani',
    ownerName: 'Mbak Murni (RT 2 Jurang Jero)',
    category: 'Makanan & Minuman',
    description: 'Cimoring Jhofani merupakan usaha rumahan produksi camilan cimol kering (cimoring) khas Dusun Jurang Jero yang sangat diminati oleh warga Desa Candiyasan, Wonosobo, hingga melayani pesanan ke luar kota. Berkat ketekunan Mbak Murni dalam menjaga kualitas dan berinovasi, camilan renyah dan gurih ini selalu konsisten diminati pelanggan.',
    address: 'Dusun Jurang Jero, RT 2, Desa Candiyasan',
    phone: '-',
    whatsapp: '',
    youtubeId: 'uwhfARqJeQo',
    mapsUrl: 'https://maps.app.goo.gl/rcLMD7fut89sNeT86',
    imageUrl: '/images/umkm/cimoring-jhofani.jpg',
    products: [
      {
        id: 'p-cimoring-1',
        name: 'Cimoring Jhofani (1 kg)',
        description: 'Cimol kering kiloan bercita rasa gurih dan renyah, cocok untuk camilan keluarga atau dijual kembali (reseller).',
        price: 45000,
        imageUrl: '/images/umkm/cimoring-jhofani.jpg',
      }
    ]
  },
  {
    id: 'nasi-jagung-kabelukan',
    name: 'Nasi Jagung Ibu Marsudi & Ibu Miastro',
    ownerName: 'Ibu Marsudi & Ibu Miastro',
    category: 'Makanan & Minuman',
    description: 'Produksi makanan tradisional Nasi Jagung (beras jagung) yang diolah secara higienis perorangan. Produksi dalam jumlah terbesar saat ini dilakukan oleh Ibu Marsudi.',
    address: 'Dusun Kabelukan, Desa Candiyasan',
    phone: '-',
    whatsapp: '',
    mapsUrl: 'https://maps.app.goo.gl/rcLMD7fut89sNeT86',
    imageUrl: '/images/umkm/nasi-jagung.jpg',
    products: [
      {
        id: 'p-jagung-1',
        name: 'Nasi Jagung / Beras Jagung (1 kg)',
        description: 'Olahan jagung murni higienis dan gurih, kaya serat pangan alami, cocok untuk makanan pokok sehat pengganti atau campuran beras.',
        price: 20000,
        imageUrl: '/images/umkm/nasi-jagung.jpg',
      }
    ]
  },
  {
    id: 'mitra-mandiri-farm',
    name: 'Mitra Mandiri Farm',
    ownerName: 'Bapak Yayan (Area rumah)',
    category: 'Agroindustri',
    description: 'Peternakan yang berfokus pada budidaya hewan ternak, mendukung ketahanan pangan dan agroindustri lokal di Desa Candiyasan.',
    address: 'Dekat rumah Pak Yayan, Dusun Jurang Jero',
    phone: '-',
    whatsapp: '',
    mapsUrl: 'https://maps.app.goo.gl/rcLMD7fut89sNeT86',
    imageUrl: '/images/umkm/mitra-farm.jpg',
    products: [
      {
        id: 'p-ternak-1',
        name: 'Hewan Ternak Unggul (Kambing / Domba)',
        description: 'Hewan ternak terawat dan berkualitas untuk kebutuhan bibit unggul, aqiqah, maupun qurban.',
        price: 0,
        imageUrl: '/images/umkm/mitra-farm.jpg',
      }
    ]
  }
];
