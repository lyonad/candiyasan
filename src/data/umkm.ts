import { UMKM } from '@/types';

export const umkmData: UMKM[] = [
  {
    id: 'kopi-candiyasan',
    name: 'Kopi Arabika Candiyasan',
    ownerName: 'Bapak Budi Santoso',
    category: 'Makanan & Minuman',
    description: 'Biji kopi Arabika pilihan yang ditanam di lereng Gunung Sindoro. Dipetik merah dan diproses dengan standar tinggi untuk menghasilkan cita rasa kopi yang khas dengan notes fruity dan floral.',
    address: 'Dusun Krajan, RT 01/RW 02, Desa Candiyasan, Kertek, Wonosobo',
    phone: '081234567890',
    whatsapp: '081234567890',
    instagram: '@kopicandiyasan',
    imageUrl: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    products: [
      {
        id: 'p1',
        name: 'Kopi Arabika Roast Beans (250g)',
        description: 'Biji kopi sangrai siap giling. Level roasting medium.',
        price: 65000,
        imageUrl: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      },
      {
        id: 'p2',
        name: 'Kopi Arabika Bubuk (200g)',
        description: 'Kopi bubuk halus cocok untuk tubruk atau espresso.',
        price: 55000,
        imageUrl: 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      }
    ]
  },
  {
    id: 'keripik-carica-maju',
    name: 'Keripik & Manisan Carica "Maju Jaya"',
    ownerName: 'Ibu Siti Aminah',
    category: 'Makanan & Minuman',
    description: 'Produksi olahan buah carica khas Wonosobo. Kami memproduksi manisan carica segar dan keripik carica yang renyah tanpa bahan pengawet buatan.',
    address: 'Dusun Puntuk, RT 03/RW 01, Desa Candiyasan, Kertek',
    phone: '085712345678',
    whatsapp: '085712345678',
    imageUrl: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    products: [
      {
        id: 'p3',
        name: 'Manisan Carica Cup Kecil (6 pcs)',
        description: 'Manisan buah carica dalam sirup gula asli.',
        price: 15000,
        imageUrl: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      },
      {
        id: 'p4',
        name: 'Keripik Carica (150g)',
        description: 'Keripik renyah dari irisan buah carica.',
        price: 20000,
        imageUrl: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      }
    ]
  },
  {
    id: 'kerajinan-bambu-lestari',
    name: 'Kerajinan Bambu Lestari',
    ownerName: 'Bapak Sukamto',
    category: 'Kerajinan',
    description: 'Menyediakan berbagai macam kerajinan anyaman bambu untuk kebutuhan rumah tangga dan dekorasi. Dibuat secara manual (handmade) dengan bambu berkualitas dari Candiyasan.',
    address: 'Dusun Wonosari, RT 02/RW 03, Desa Candiyasan',
    phone: '081398765432',
    whatsapp: '081398765432',
    imageUrl: 'https://images.unsplash.com/photo-1590080826978-0056637de257?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    products: [
      {
        id: 'p5',
        name: 'Tampah Bambu (Ukuran Sedang)',
        description: 'Tampah anyaman bambu rapi dan kuat.',
        price: 25000,
        imageUrl: 'https://images.unsplash.com/photo-1590080826978-0056637de257?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      },
      {
        id: 'p6',
        name: 'Lampu Hias Bambu',
        description: 'Kap lampu artistik dari susunan bambu.',
        price: 85000,
        imageUrl: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      }
    ]
  },
  {
    id: 'jasa-jahit-indah',
    name: 'Rumah Jahit Indah',
    ownerName: 'Ibu Indah Pertiwi',
    category: 'Jasa',
    description: 'Melayani jasa jahit pakaian wanita, pria, dan seragam. Kualitas jahitan rapi dengan harga terjangkau. Menerima pesanan dalam jumlah besar maupun satuan.',
    address: 'Jalan Raya Candiyasan KM 2, RT 01/RW 01',
    phone: '082211223344',
    whatsapp: '082211223344',
    imageUrl: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    products: [
      {
        id: 'p7',
        name: 'Jasa Jahit Kebaya',
        description: 'Jasa jahit kebaya modern atau tradisional (belum termasuk kain).',
        price: 150000,
        imageUrl: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      },
      {
        id: 'p8',
        name: 'Jasa Jahit Seragam (per set)',
        description: 'Jahit kemeja dan celana/rok seragam.',
        price: 120000,
        imageUrl: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      }
    ]
  }
];
