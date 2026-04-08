"use client";

import React, { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
  alt: string;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({ 
  isOpen, 
  onClose, 
  images, 
  currentIndex, 
  onNext, 
  onPrev,
  alt 
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight' && images.length > 1) onNext();
    if (e.key === 'ArrowLeft' && images.length > 1) onPrev();
  }, [isOpen, onClose, onNext, onPrev, images.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Prevent scrolling when the lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted) return null;

  const lightboxContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Close Button - More intuitive position */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-xl z-[10000]"
            aria-label="Cerrar"
          >
            <X size={28} />
          </button>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-all bg-white/5 hover:bg-white/10 p-4 rounded-full backdrop-blur-md z-[10000] border border-white/10 active:scale-95"
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={36} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-all bg-white/5 hover:bg-white/10 p-4 rounded-full backdrop-blur-md z-[10000] border border-white/10 active:scale-95"
                aria-label="Siguiente imagen"
              >
                <ChevronRight size={36} />
              </button>
            </>
          )}

          {/* Image Container */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full h-[80vh] flex flex-col items-center justify-center px-4 md:px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-6xl flex items-center justify-center">
              <Image
                src={images[currentIndex]}
                alt={`${alt} - Imagen ${currentIndex + 1}`}
                fill
                className="object-contain drop-shadow-2xl select-none"
                priority
              />
            </div>
            
            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-[-40px] text-white/60 font-medium text-sm bg-white/5 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/5">
                {currentIndex + 1} / {images.length}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(lightboxContent, document.body);
};

export default ImageLightbox;
