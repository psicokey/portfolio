"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  imageUrls: string[];
  alt: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ imageUrls, alt }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (!imageUrls || imageUrls.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-48 overflow-hidden" ref={emblaRef}>
      <div className="flex h-full">
        {imageUrls.map((url, index) => (
          <div className="relative flex-[0_0_100%] h-full" key={index}>
            <Image
              src={url}
              alt={`${alt} - Imagen ${index + 1}`}
              fill
              className="object-fill"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {imageUrls.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/75 transition-colors"
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/75 transition-colors"
            aria-label="Siguiente imagen"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;