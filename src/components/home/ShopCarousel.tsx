import { useState, useEffect, useCallback } from 'react';

const leftSlides = [
  'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
];

const rightSlides = [
  'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop',
];

const ShopCarousel = () => {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  const nextLeft = useCallback(() => {
    setLeftIndex((prev) => (prev + 1) % leftSlides.length);
  }, []);

  const nextRight = useCallback(() => {
    setRightIndex((prev) => (prev + 1) % rightSlides.length);
  }, []);

  useEffect(() => {
    const leftInterval = setInterval(nextLeft, 3000);
    const rightInterval = setInterval(nextRight, 3500);
    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, [nextLeft, nextRight]);

  return (
    <section className="bg-card mt-4 md:mt-6 mx-2 md:mx-4 lg:mx-8 rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-primary py-3 px-4 flex justify-center items-center">
        <h2 className="font-bold text-sm sm:text-lg md:text-xl text-primary-foreground">
          Check Out From Our Shops
        </h2>
      </div>

      {/* Carousels Container */}
      <div className="flex h-[200px] md:h-[340px] gap-2 p-2 md:p-3">
        {/* Left Carousel */}
        <div className="relative h-full w-full md:w-1/2 overflow-hidden rounded-lg shadow-md">
          {leftSlides.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Shop product ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                index === leftIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {leftSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setLeftIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === leftIndex ? 'bg-white w-4' : 'bg-white/50 w-1.5'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Carousel - Hidden on mobile */}
        <div className="hidden md:block relative h-full w-1/2 overflow-hidden rounded-lg shadow-md border border-border">
          {rightSlides.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Shop product ${index + 6}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                index === rightIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {rightSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setRightIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === rightIndex ? 'bg-white w-4' : 'bg-white/50 w-1.5'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCarousel;