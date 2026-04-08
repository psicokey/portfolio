import React, { useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

interface ImageCarouselProps {
  imageUrls: string[];
  alt: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ imageUrls, alt }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextLightboxImage = useCallback(() => {
    setActiveLightboxIndex((prev) => (prev + 1) % imageUrls.length);
  }, [imageUrls.length]);

  const prevLightboxImage = useCallback(() => {
    setActiveLightboxIndex((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);
  }, [imageUrls.length]);

  if (!imageUrls || imageUrls.length === 0) {
    return null;
  }

  return (
    <>
      <div className="relative w-full h-48 overflow-hidden group/carousel" ref={emblaRef}>
        <div className="flex h-full">
          {imageUrls.map((url, index) => (
            <div 
              className="relative flex-[0_0_100%] h-full cursor-zoom-in" 
              key={index}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={url}
                alt={`${alt} - Imagen ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover/carousel:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/carousel:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="text-white drop-shadow-lg" size={32} />
              </div>
            </div>
          ))}
        </div>

        {imageUrls.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); scrollPrev(); }}
              className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/75 transition-colors opacity-0 group-hover/carousel:opacity-100"
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); scrollNext(); }}
              className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/75 transition-colors opacity-0 group-hover/carousel:opacity-100"
              aria-label="Siguiente imagen"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
        
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10">
          {imageUrls.map((_, i) => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === activeLightboxIndex ? 'bg-white' : 'bg-white/50'}`} />
          ))}
        </div>
      </div>

      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={imageUrls}
        currentIndex={activeLightboxIndex}
        onNext={nextLightboxImage}
        onPrev={prevLightboxImage}
        alt={alt}
      />
    </>
  );
};

export default ImageCarousel;