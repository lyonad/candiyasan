"use client";

import { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  text: string;
}

export default function ShareButton({ title, text }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (typeof window === 'undefined') return;

    const shareData = {
      title,
      text,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        if ((err as Error)?.name === 'AbortError') return;
      }
    }

    // Fallback: Copy to clipboard
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Graceful fallback
      prompt('Salin tautan berikut:', window.location.href);
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex items-center justify-center gap-2 w-full border border-stone-700 bg-stone-900/90 text-stone-200 hover:text-white hover:bg-stone-800 py-3 px-4 eyebrow text-xs rounded transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 cursor-pointer min-h-[44px]"
      aria-label="Bagikan profil produsen ini"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 text-emerald-400" />
          <span className="text-emerald-400">Tautan Disalin!</span>
        </>
      ) : (
        <>
          <Share2 className="h-4 w-4 text-stone-400" />
          <span>Bagikan Profil</span>
        </>
      )}
    </button>
  );
}
