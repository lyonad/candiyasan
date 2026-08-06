# Website Direktori Industri & UMKM Desa Candiyasan

Portal katalog digital dan informasi produsen industri lokal Desa Candiyasan, Kertek, Wonosobo. Dibangun menggunakan Next.js (App Router), TailwindCSS, TypeScript, dan performa tinggi yang dioptimalkan untuk Vercel.

---

## 🚀 Cara Deploy ke Vercel

### Opsi 1: Deploy Otomatis via GitHub (Sangat Direkomendasikan)

1. **Push Proyek ke Repository GitHub**:
   ```bash
   git add .
   git commit -m "Deploy siap Vercel"
   git push origin main
   ```

2. **Hubungkan ke Vercel**:
   - Buka [Vercel Dashboard](https://vercel.com/dashboard).
   - Klik **"Add New..."** &rarr; **"Project"**.
   - Pilih repository GitHub proyek `Proyek Website Desa Candiyasan v2`.
   - Vercel akan secara otomatis mendeteksi Framework **Next.js**.

3. **Deploy**:
   - Klik tombol **"Deploy"**.
   - Vercel akan menjalankan `npm run build` dan mempublikasikan website secara otomatis dengan domain HTTPS bawaan (misal: `candiyasan.vercel.app`).

---

### Opsi 2: Deploy Cepat via Vercel CLI

Jika Anda memiliki Vercel CLI terpasang di komputer:

```bash
# Login ke Vercel CLI
npx vercel login

# Jalankan deploy (pilih opsi default)
npx vercel --prod
```

---

## 🛠️ Konfigurasi Vercel yang Telah Disiapkan

1. **`next.config.ts`**:
   - Mendukung Vercel Native Image Optimization (AVIF/WebP) untuk gambar internal dan domain eksternal (`images.unsplash.com`, `img.youtube.com`, `i.ytimg.com`).
   - Prerendering Statis (SSG) 17 rute otomatis saat prapublikasi.

2. **`vercel.json`**:
   - Pengaturan header keamanan bawaan (`X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, `Referrer-Policy`).
   - Caching immutable untuk aset statis di `public/images/`.

---

## 💻 Menjalankan Secara Lokal

```bash
# Install dependensi
npm install

# Jalankan dev server
npm run dev

# Uji build produksi
npm run build
```
