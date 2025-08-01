'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpg',
  '/images/gallery5.jpg',
  '/images/gallery6.jpg',
  '/images/gallery7.jpg',
  '/images/gallery8.jpg',
];

export default function GallerySlider({ title = 'Explore Our Activities' }) {
  const [startIndex, setStartIndex] = useState(0);
  const visibleImages = 4;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, images.length - visibleImages)
    );
  };

  return (
    <div className="py-16 px-6 md:px-20 bg-white" data-aos="zoom-in-up">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">
        {title}
      </h2>

      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md border border-primary/20 hover:bg-primary/10 text-primary disabled:opacity-50"
          disabled={startIndex === 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md border border-primary/20 hover:bg-primary/10 text-primary disabled:opacity-50"
          disabled={startIndex + visibleImages >= images.length}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 gap-4"
            style={{
              transform: `translateX(-${startIndex * (100 / visibleImages)}%)`,
              width: `${(images.length / visibleImages) * 100}%`,
            }}
          >
            {images.map((src, idx) => (
              <div
                key={idx}
                className="flex-none w-1/4 rounded-lg overflow-hidden shadow-md border border-primary/10"
              >
                <img
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}