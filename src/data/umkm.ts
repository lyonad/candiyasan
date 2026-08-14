import { UMKM } from '@/types';

export const umkmData: UMKM[] = [
  {
    id: 'aska-tahu',
    name: 'Aska Tahu',
    ownerName: 'Masyarakat Desa Candiyasan',
    category: 'Makanan & Minuman',
    dusun: 'Dusun Jurangjero',
    description: 'Produk olahan kedelai yang dibuat dengan proses pengolahan secara sederhana oleh masyarakat Desa Candiyasan. Menghasilkan tahu putih dan tahu kuning berkualitas, lembut, dan gurih alami.',
    address: 'RT. 001/RW. 003, Dusun Jurangjero, Desa Candiyasan, Kec. Kertek, Wonosobo',
    phone: '088215629804',
    whatsapp: '088215629804',
    imageUrl: '/images/umkm/pabrik-tahu.jpg',
    products: [
      {
        id: 'p-aska-1',
        name: 'Tahu Ember Grosir (150 biji)',
        description: 'Tahu segar berkualitas dalam kemasan ember untuk pedagang dan konsumsi acara besar.',
        price: 22000,
        priceFormatted: 'Rp 22.000 / 150 biji (ember)',
        variants: ['Tahu Putih', 'Tahu Kuning'],
        imageUrl: '/images/umkm/pabrik-tahu.jpg',
      },
      {
        id: 'p-aska-2',
        name: 'Tahu Plastik Eceran (10 biji)',
        description: 'Kemasan plastik praktis isi 10 biji tahu segar siap masak.',
        price: 4000,
        priceFormatted: 'Rp 4.000 / 10 biji (plastik)',
        variants: ['Tahu Putih', 'Tahu Kuning'],
        imageUrl: '/images/umkm/pabrik-tahu.jpg',
      }
    ]
  },
  {
    id: 'cimoring-jhofani',
    name: 'Cimoring Jhofani',
    ownerName: 'Mbak Murni',
    category: 'Makanan & Minuman',
    dusun: 'Dusun Jurangjero',
    description: 'Camilan renyah dan gurih dari tepung pilihan dengan racikan rempah bawang putih, garam, dan penyedap rasa berkualitas. Diminati oleh warga lokal hingga luar kota.',
    address: 'RT. 002/RW. 004, Dusun Jurangjero, Desa Candiyasan, Kec. Kertek, Wonosobo',
    phone: '081977732605',
    whatsapp: '081977732605',
    youtubeId: 'uwhfARqJeQo',
    imageUrl: '/images/umkm/cimoring-jhofani.jpg',
    products: [
      {
        id: 'p-cimoring-1',
        name: 'Cimoring Jhofani (500 gram)',
        description: 'Cimol kering super renyah dengan aneka pilihan rasa gurih dan pedas.',
        price: 22000,
        priceFormatted: 'Rp 22.000 / 500 gram',
        variants: ['Original', 'Pedas', 'Balado', 'Jagung Manis'],
        imageUrl: '/images/umkm/cimoring-jhofani.jpg',
      }
    ]
  },
  {
    id: 'donat-mini-pancake',
    name: 'Donat Mini Pancake',
    ownerName: 'Produsen Donat Mini Candiyasan',
    category: 'Makanan & Minuman',
    dusun: 'Dusun Jurangjero',
    description: 'Camilan manis berukuran mini bertekstur lembut dengan berbagai pilihan topping lezat dan rasa kekinian yang digemari anak-anak hingga dewasa.',
    address: 'RT. 001/RW. 004, Dusun Jurangjero, Desa Candiyasan, Kec. Kertek, Wonosobo',
    phone: '08871252706',
    whatsapp: '08871252706',
    imageUrl: '/images/umkm/cimoring-jhofani.jpg',
    products: [
      {
        id: 'p-donatmini-1',
        name: 'Donat Mini Aneka Rasa & Topping',
        description: 'Pilihan varian rasa: Cokelat, Strawberry, Matcha, Taro, Keju, Vanilla, Redvelvet, Bubble gum, Tiramisu, Mangga. Topping: Oreo, Ceres Rainbow, Ceres Coklat, Keju, Springkle.',
        price: 1000,
        priceFormatted: 'Rp 1.000 / biji',
        variants: ['Cokelat', 'Strawberry', 'Matcha', 'Taro', 'Keju', 'Vanilla', 'Redvelvet', 'Bubble gum', 'Tiramisu', 'Mangga'],
        imageUrl: '/images/umkm/cimoring-jhofani.jpg',
      }
    ]
  },
  {
    id: 'hana-donat',
    name: 'Hana Donat',
    ownerName: 'Produsen Hana Donat',
    category: 'Makanan & Minuman',
    dusun: 'Dusun Jurangjero',
    description: 'Donat dengan bahan baku berkualitas premium dengan harga terjangkau, rasa lezat, dan tekstur empuk yang tahan lama.',
    address: 'RT. 001/RW. 003, Dusun Jurangjero, Desa Candiyasan, Kec. Kertek, Wonosobo',
    phone: '081238676988',
    whatsapp: '081238676988',
    imageUrl: '/images/umkm/cimoring-jhofani.jpg',
    products: [
      {
        id: 'p-hana-1',
        name: 'Hana Donat Glaze Premium',
        description: 'Varian glaze: Blueberry, Cokelat, Matcha, Taro, Tiramisu, Strawberry.',
        price: 2500,
        priceFormatted: 'Rp 2.500 / biji',
        variants: ['Blueberry', 'Cokelat', 'Matcha', 'Taro', 'Tiramisu', 'Strawberry'],
        imageUrl: '/images/umkm/cimoring-jhofani.jpg',
      },
      {
        id: 'p-hana-2',
        name: 'Hana Donat Cokelat Padat',
        description: 'Varian cokelat padat: Cokelat, Matcha, Taro, Vanilla.',
        price: 2000,
        priceFormatted: 'Rp 2.000 / biji',
        variants: ['Cokelat', 'Matcha', 'Taro', 'Vanilla'],
        imageUrl: '/images/umkm/cimoring-jhofani.jpg',
      }
    ]
  },
  {
    id: 'slamet-tahu',
    name: 'Slamet Tahu',
    ownerName: 'Pak Slamet',
    category: 'Makanan & Minuman',
    dusun: 'Dusun Jurangjero',
    description: 'Produk olahan kedelai yang diproduksi oleh masyarakat Desa Candiyasan untuk mendukung kegiatan usaha lokal dan pemenuhan konsumsi masyarakat.',
    address: 'RT. 004/RW. 003, Dusun Jurangjero, Desa Candiyasan, Kec. Kertek, Wonosobo',
    phone: '081238676988',
    whatsapp: '081238676988',
    imageUrl: '/images/umkm/pabrik-tahu.jpg',
    products: [
      {
        id: 'p-slamet-1',
        name: 'Tahu Plastik Slamet (10 biji)',
        description: 'Tahu putih & tahu kuning olahan alami berkualitas.',
        price: 4000,
        priceFormatted: 'Rp 4.000 / 10 biji (plastik)',
        variants: ['Tahu Putih', 'Tahu Kuning'],
        imageUrl: '/images/umkm/pabrik-tahu.jpg',
      }
    ]
  },
  {
    id: 'oyek-opak-jagung',
    name: 'Oyek & Opak Jagung Kabelukan',
    ownerName: 'Pengrajin Olahan Jagung Kabelukan',
    category: 'Makanan & Minuman',
    dusun: 'Dusun Kabelukan',
    description: 'Olahan jagung khas Desa Candiyasan. Oyek basah berwarna oranye alami, sedangkan oyek kering berwarna putih karena melalui proses penjemuran panas matahari, serta opak jagung renyah khas pedesaan.',
    address: 'RT. 001/RW. 005, Dusun Kabelukan, Desa Candiyasan, Kec. Kertek, Wonosobo',
    phone: '08871252890',
    whatsapp: '08871252890',
    imageUrl: '/images/umkm/nasi-jagung.jpg',
    products: [
      {
        id: 'p-oyek-1',
        name: 'Oyek Basah (Oranye)',
        description: 'Oyek basah segar khas berbahan jagung murni.',
        price: 12000,
        priceFormatted: 'Rp 12.000 / rantang',
        imageUrl: '/images/umkm/nasi-jagung.jpg',
      },
      {
        id: 'p-oyek-2',
        name: 'Oyek Kering (Putih)',
        description: 'Oyek kering tahan lama, siap diolah kapan saja.',
        price: 20000,
        priceFormatted: 'Rp 20.000 / kg',
        imageUrl: '/images/umkm/nasi-jagung.jpg',
      },
      {
        id: 'p-oyek-3',
        name: 'Opak Jagung Renyah',
        description: 'Opak jagung gurih renyah cemilan sehat tradisional.',
        price: 12000,
        priceFormatted: 'Rp 12.000 / ½ kg',
        imageUrl: '/images/umkm/nasi-jagung.jpg',
      }
    ]
  },
  {
    id: 'teh-ibu-tarmi',
    name: 'Teh Ibu Tarmi',
    ownerName: 'Ibu Tarmi',
    category: 'Agroindustri',
    dusun: 'Dusun Jurangjero',
    description: 'Produk teh alami yang diolah dari bahan pilihan tanpa bahan kimia pengawet, memiliki aroma dan rasa khas yang terjaga dari pegunungan Sindoro-Sumbing.',
    address: 'RT. 002/RW. 003, Dusun Jurangjero, Desa Candiyasan, Kec. Kertek, Wonosobo',
    phone: '083131734050',
    whatsapp: '083131734050',
    imageUrl: '/images/umkm/teh-candiyasan.jpg',
    products: [
      {
        id: 'p-teh-1',
        name: 'Teh Alami Candiyasan (1 kg)',
        description: 'Daun teh olahan alami tanpa pengawet atau pewarna buatan.',
        price: 85000,
        priceFormatted: 'Rp 85.000 / kg',
        imageUrl: '/images/umkm/teh-candiyasan.jpg',
      }
    ]
  },
  {
    id: 'tembakau-pak-sumarko',
    name: 'Tembakau Pak Sumarko',
    ownerName: 'Pak Sumarko',
    category: 'Agroindustri',
    dusun: 'Dusun Jurangjero',
    description: 'Produk tembakau olahan khas masyarakat lokal Desa Candiyasan. Tembakau merupakan salah satu komoditas pertanian unggulan utama desa.',
    address: 'RT. 002/RW. 003, Dusun Jurangjero, Desa Candiyasan, Kec. Kertek, Wonosobo',
    phone: '083131734050',
    whatsapp: '083131734050',
    imageUrl: '/images/umkm/kopi-nastiti.jpg',
    products: [
      {
        id: 'p-tembakau-1',
        name: 'Tembakau Olahan Khas (1 kg)',
        description: 'Hasil rajangan tembakau asli lereng Gunung Sindoro-Sumbing.',
        price: 85000,
        priceFormatted: 'Rp 85.000 / kg',
        imageUrl: '/images/umkm/kopi-nastiti.jpg',
      }
    ]
  },
  {
    id: 'kopi-arabica-nastiti',
    name: 'Kopi Arabica Nastiti',
    ownerName: 'Kelompok Tani Nastiti',
    category: 'Agroindustri',
    dusun: 'Dusun Kabelukan',
    description: 'Produk kopi dari kelompok tani Kopi Arabica Nastiti yang diproduksi secara musiman sesuai ketersediaan dan pesanan. Dipasarkan hingga luar kota dan diekspor dalam bentuk green bean (biji kopi mentah) ke Korea.',
    address: 'RT. 002/RW. 003, Dusun Kabelukan, Desa Candiyasan, Kec. Kertek, Wonosobo',
    phone: '083131734050',
    whatsapp: '083131734050',
    imageUrl: '/images/umkm/kopi-nastiti.jpg',
    products: [
      {
        id: 'p-kopi-1',
        name: 'Kopi Arabica Bubuk / Biji (1 kg)',
        description: 'Kopi Arabica racikan murni dengan aroma khas lereng gunung.',
        price: 25000,
        priceFormatted: 'Rp 25.000 / kg',
        imageUrl: '/images/umkm/kopi-nastiti.jpg',
      },
      {
        id: 'p-kopi-2',
        name: 'Green Bean Kopi Arabica (Ekspor)',
        description: 'Biji kopi mentah pilihan siap ekspor.',
        price: 25000,
        priceFormatted: 'Green Bean (Sesuai Pesanan)',
        imageUrl: '/images/umkm/kopi-nastiti.jpg',
      }
    ]
  }
];
