import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Katalog UMKM Candiyasan | Etalase Digital Produk Lokal",
  description: "Wadah promosi digital untuk produk-produk lokal unggulan dari para pelaku UMKM di Desa Candiyasan, Kertek, Wonosobo.",
  keywords: ["umkm candiyasan", "desa candiyasan", "kertek wonosobo", "produk lokal", "katalog umkm"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
