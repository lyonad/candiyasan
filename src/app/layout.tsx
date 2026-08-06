import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0a2218" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Candiyasan — Katalog Industri Lokal Desa",
    template: "%s | Candiyasan",
  },
  description: "Etalase digital resmi produk industri, manufaktur, agroindustri, dan kerajinan lokal dari para produsen Desa Candiyasan, Kertek, Wonosobo, Jawa Tengah.",
  keywords: [
    "umkm candiyasan",
    "desa candiyasan",
    "kertek wonosobo",
    "produk lokal",
    "industri lokal candiyasan",
    "kopi arabika candiyasan",
    "katalog umkm wonosobo"
  ],
  authors: [{ name: "Pemerintah Desa Candiyasan & UNNES Giat 16" }],
  creator: "UNNES Giat 16",
  metadataBase: new URL("https://candiyasan-kertek.desa.id"),
  openGraph: {
    title: "Candiyasan — Katalog Industri Lokal Desa",
    description: "Etalase digital resmi produk industri, manufaktur, dan kerajinan lokal dari Desa Candiyasan.",
    url: "/",
    siteName: "Katalog Industri Candiyasan",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Candiyasan — Katalog Industri Lokal Desa",
    description: "Etalase digital resmi produk industri lokal dari Desa Candiyasan, Wonosobo.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://img.youtube.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
      </head>
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
