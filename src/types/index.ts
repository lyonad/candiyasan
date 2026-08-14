export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  priceFormatted?: string;
  variants?: string[];
  imageUrl: string;
}

export type DusunName = 'Dusun Jurangjero' | 'Dusun Kabelukan' | 'Dusun Grenjeng' | 'Dusun Banjaran';

export interface UMKM {
  id: string;
  name: string;
  ownerName: string;
  category: 'Makanan & Minuman' | 'Agroindustri';
  dusun: DusunName;
  description: string;
  address: string;
  phone: string;
  whatsapp: string;
  instagram?: string;
  imageUrl: string;
  youtubeId?: string;

  products: Product[];
}
