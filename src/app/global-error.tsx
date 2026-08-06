"use client";

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Fatal Application Error:', error);
  }, [error]);

  return (
    <html lang="id">
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, sans-serif', backgroundColor: '#faf9f7', color: '#1c1917' }}>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', textAlign: 'center' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#e11d48', marginBottom: '12px' }}>
            Kesalahan Sistem
          </p>
          <h1 style={{ fontSize: '2rem', fontWeight: 400, marginBottom: '16px' }}>
            Gagal Memuat Aplikasi
          </h1>
          <p style={{ color: '#78716c', maxWidth: '480px', marginBottom: '24px', lineHeight: 1.6 }}>
            Terjadi kendala teknis pada sistem. Silakan muat ulang halaman.
          </p>
          <button
            onClick={() => reset()}
            style={{
              backgroundColor: '#064e3b',
              color: '#ffffff',
              border: 'none',
              padding: '14px 28px',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            Muat Ulang
          </button>
        </div>
      </body>
    </html>
  );
}
