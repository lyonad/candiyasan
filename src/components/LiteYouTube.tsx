"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface LiteYouTubeProps {
  youtubeId: string;
  title: string;
  className?: string;
  aspectRatio?: 'video' | 'auto';
}

export default function LiteYouTube({
  youtubeId,
  title,
  className = '',
  aspectRatio = 'video',
}: LiteYouTubeProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // YouTube HQ thumbnail fallback
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  if (isPlaying) {
    return (
      <div className={`relative w-full ${aspectRatio === 'video' ? 'aspect-video' : 'h-full'} ${className}`}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${
        aspectRatio === 'video' ? 'aspect-video' : 'h-full min-h-[260px]'
      } bg-stone-900 overflow-hidden cursor-pointer group focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none ${className}`}
      onClick={() => setIsPlaying(true)}
      role="button"
      tabIndex={0}
      aria-label={`Putar video: ${title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsPlaying(true);
        }
      }}
    >
      <Image
        src={thumbnailUrl}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-stone-950/30 group-hover:bg-stone-950/10 transition-colors duration-300" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-900/90 text-stone-50 flex items-center justify-center backdrop-blur-sm group-hover:bg-emerald-700 group-hover:scale-105 transition-all duration-300">
          <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" />
        </div>
      </div>
    </div>
  );
}
