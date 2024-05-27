'use client';

import notebook1 from '@/assets/notebook1.jpg';
import notebook2 from '@/assets/notebook2.jpg';
import notebook3 from '@/assets/notebook3.webp';
import notebook4 from '@/assets/notebook.webp';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const IMAGES = [
  { src: notebook1, alt: 'notebook picture' },
  { src: notebook2, alt: 'notebook picture' },
  { src: notebook3, alt: 'notebook picture' },
  { src: notebook4, alt: 'notebook picture' },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      if (currentIndex + 1 == IMAGES.length) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [currentIndex]);

  return (
    <div className='w-[600px] h-[400px] overflow-hidden relative'>
      {IMAGES.map((image, index) => {
        return (
          <Image
            key={index}
            src={image.src}
            fill
            alt={image.alt}
            className={`absolute rounded-2xl transition-all duration-300 inset-0 w-full h-full object-cover ${
              index === currentIndex
                ? 'opacity-100 scale-100 translate-x-0 rotate-0'
                : 'opacity-0 scale-110 -translate-x-1 rotate-6'
            }`}
          />
        );
      })}
    </div>
  );
}
