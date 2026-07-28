import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Candiyasan — Katalog Industri Lokal Desa",
  description: "Etalase digital resmi produk industri, manufaktur, dan kerajinan lokal dari para produsen Desa Candiyasan, Kertek, Wonosobo, Jawa Tengah.",
  keywords: ["umkm candiyasan", "desa candiyasan", "kertek wonosobo", "produk lokal", "industri lokal", "katalog umkm"],
  openGraph: {
    title: "Candiyasan — Katalog Industri Lokal Desa",
    description: "Etalase digital resmi produk industri dan kerajinan lokal dari Desa Candiyasan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-[#faf9f7] text-stone-900 min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
