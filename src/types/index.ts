export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface UMKM {
  id: string;
  name: string;
  ownerName: string;
  category: 'Makanan & Minuman' | 'Kerajinan' | 'Fesyen' | 'Agroindustri' | 'Jasa' | 'Lainnya';
  description: string;
  address: string;
  phone: string;
  whatsapp: string;
  instagram?: string;
  imageUrl: string;
  youtubeId?: string;
  mapsUrl?: string;
  products: Product[];
}
