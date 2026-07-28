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
    imageUrl: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    products: [
      {
        id: 'p-kopi-1',
        name: 'Kopi Arabica Bubuk (1 kg)',
        description: 'Kopi Arabica bubuk murni, sangat disukai oleh konsumen rumah tangga.',
        price: 25000,
        imageUrl: 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      },
      {
        id: 'p-kopi-2',
        name: 'Green Bean Kopi Arabica',
        description: 'Biji kopi mentah (green bean) kualitas ekspor.',
        price: 0,
        imageUrl: 'https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1627308595171-d1b5d6721584?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    products: [
      {
        id: 'p-tahu-1',
        name: 'Tahu Segar (Plastik isi 10)',
        description: 'Tahu putih segar dalam kemasan plastik praktis isi 10 buah.',
        price: 5000,
        imageUrl: 'https://images.unsplash.com/photo-1596649281358-86d11a28a3f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      },
      {
        id: 'p-tahu-2',
        name: 'Tahu Grosir (Ember 75kg)',
        description: 'Pembelian tahu skala besar/grosir menggunakan kemasan ember 75kg untuk pedagang pasar.',
        price: 0,
        imageUrl: 'https://images.unsplash.com/photo-1596649281358-86d11a28a3f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1597481499750-3e6b22687e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    products: [
      {
        id: 'p-teh-1',
        name: 'Teh Kering Lokal (1 kg)',
        description: 'Daun teh kering olahan asli Candiyasan. Kemasan dan berat bisa disesuaikan dengan permintaan pembeli.',
        price: 80000,
        imageUrl: 'https://images.unsplash.com/photo-1597481499750-3e6b22687e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      }
    ]
  },
  {
    id: 'cimolring-pak-rt',
    name: 'Cimolring Pak RT 2',
    ownerName: 'Bapak RT 2 Jurang Jero',
    category: 'Makanan & Minuman',
    description: 'Produsen camilan cimolring (cimol kering) skala rumah tangga yang renyah dan gurih. Saat ini berfokus sebagai produsen suplai murni dan belum merambah ke marketplace online.',
    address: 'Dusun Jurang Jero, RT 2, Desa Candiyasan',
    phone: '-',
    whatsapp: '',
    imageUrl: 'https://images.unsplash.com/photo-1599507963248-283fb24240a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // snack placeholder
    products: [
      {
        id: 'p-cimol-1',
        name: 'Cimolring (1 kg)',
        description: 'Cimol kering kiloan, cocok untuk camilan atau dijual kembali.',
        price: 45000,
        imageUrl: 'https://images.unsplash.com/photo-1599507963248-283fb24240a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1532008709559-0a6b7d59b4c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // corn / grain placeholder
    products: []
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
    imageUrl: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // farm placeholder
    products: []
  }
];
