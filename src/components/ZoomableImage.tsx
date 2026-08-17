"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import Image, { ImageProps } from 'next/image';
import { X, ZoomIn } from 'lucide-react';

interface ZoomableImageProps extends Omit<ImageProps, 'onClick'> {
  caption?: string;
  enableZoom?: boolean;
  containerClassName?: string;
}

export default function ZoomableImage({
  src,
  alt,
  caption,
  enableZoom = true,
  containerClassName = '',
  className = '',
  ...imageProps
}: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openModal = useCallback((e?: React.MouseEvent | React.KeyboardEvent) => {
    if (!enableZoom) return;
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsOpen(true);
  }, [enableZoom]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    // Restore focus to trigger element for screen readers & keyboard navigation
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 50);
  }, []);

  // Handle ESC key and focus trapping inside modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    // Auto-focus close button when modal opens
    setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeModal]);

  const imageSrcStr = typeof src === 'string' ? src : (src as any)?.src || '';
  const isFill = Boolean(imageProps.fill);

  // If fill is true, container must be absolute inset-0 w-full h-full unless overridden
  const baseContainerClass = isFill
    ? 'absolute inset-0 w-full h-full group'
    : 'relative inline-block group';

  return (
    <>
      <div
        ref={triggerRef}
        className={`${baseContainerClass} ${enableZoom ? 'cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none' : ''} ${containerClassName}`}
        onClick={openModal}
        role={enableZoom ? 'button' : undefined}
        tabIndex={enableZoom ? 0 : undefined}
        aria-haspopup={enableZoom ? 'dialog' : undefined}
        aria-expanded={enableZoom ? isOpen : undefined}
        onKeyDown={(e) => {
          if (enableZoom && (e.key === 'Enter' || e.key === ' ')) {
            openModal(e);
          }
        }}
        aria-label={enableZoom ? `Perbesar gambar: ${alt || caption || 'Pratinjau'}` : undefined}
      >
        <Image
          src={src}
          alt={alt}
          className={className}
          {...imageProps}
        />

        {enableZoom && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
            <span className="bg-black/40 border border-white/20 text-white p-2 rounded-full inline-flex">
              <ZoomIn className="w-4 h-4" />
            </span>
          </div>
        )}
      </div>

      {/* Lightbox Modal Portal */}
      {isOpen && mounted && createPortal(
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-stone-950/90 backdrop-blur-md p-4 sm:p-8 animate-fadeIn"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={caption || alt || 'Tampilan pembesar gambar'}
        >
          {/* Close button */}
          <button
            ref={closeBtnRef}
            onClick={closeModal}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-stone-300 hover:text-white bg-stone-900/80 hover:bg-stone-800 border border-stone-700 p-3 rounded-full transition-colors duration-200 z-50 focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label="Tutup tampilan gambar"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Content Wrapper */}
          <div
            className="relative max-w-[94vw] max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-w-full max-h-[82vh] overflow-hidden rounded-lg shadow-2xl border border-stone-800 bg-stone-900 flex items-center justify-center">
              <img
                src={imageSrcStr}
                alt={alt}
                className="max-w-[92vw] max-h-[78vh] w-auto h-auto object-contain select-none"
              />
            </div>

            {(caption || alt) && (
              <div className="mt-4 text-center max-w-2xl px-4">
                <p className="text-stone-200 text-sm sm:text-base font-serif leading-relaxed">
                  {caption || alt}
                </p>
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
