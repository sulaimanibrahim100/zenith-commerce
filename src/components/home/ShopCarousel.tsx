import { useState, useEffect, useCallback } from 'react';

const leftImages = [
  'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
  'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800',
  'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800',
  'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800',
];

const rightImages = [
  'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800',
  'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800',
  'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800',
  'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800',
];

const ShopCarousel = () => {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  const nextLeft = useCallback(() => {
    setLeftIndex((prev) => (prev + 1) % leftImages.length);
  }, []);

  const nextRight = useCallback(() => {
    setRightIndex((prev) => (prev + 1) % rightImages.length);
  }, []);

  useEffect(() => {
    const leftTimer = setInterval(nextLeft, 3000);
    const rightTimer = setInterval(nextRight, 3500);
    return () => {
      clearInterval(leftTimer);
      clearInterval(rightTimer);
    };
  }, [nextLeft, nextRight]);

  return (
    <div className="container mb-3">
      <div className="bg-card rounded shadow-sm overflow-hidden">
        {/* Header */}
        <div className="jumia-section-header">
          <span className="jumia-section-title">Check Out From Our Shops</span>
        </div>
        
        {/* Carousels */}
        <div className="p-2">
          <div className="flex gap-2 h-[150px] sm:h-[200px] md:h-[280px]">
            {/* Left Carousel */}
            <div className="flex-1 relative overflow-hidden rounded">
              {leftImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Shop ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    i === leftIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              {/* Dots */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {leftImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setLeftIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === leftIndex ? 'bg-primary w-3' : 'bg-white/60 w-1.5'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Carousel - Hidden on mobile */}
            <div className="hidden md:block flex-1 relative overflow-hidden rounded">
              {rightImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Shop ${i + 5}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    i === rightIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              {/* Dots */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {rightImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setRightIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === rightIndex ? 'bg-primary w-3' : 'bg-white/60 w-1.5'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCarousel;