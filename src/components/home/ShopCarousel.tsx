import { useState, useEffect, useCallback } from 'react';

const leftImages = [
  'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
  'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800',
  'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800',
];

const rightImages = [
  'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800',
  'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800',
  'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800',
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
    const leftInterval = setInterval(nextLeft, 3000);
    const rightInterval = setInterval(nextRight, 3500);
    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, [nextLeft, nextRight]);

  return (
    <section className="container section-spacing">
      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <div className="bg-primary text-primary-foreground py-2.5 px-4 text-center">
          <h2 className="font-semibold text-sm sm:text-base">Check Out From Our Shops</h2>
        </div>
        
        <div className="flex gap-2 p-2 sm:p-3 h-[160px] sm:h-[220px] md:h-[280px]">
          {/* Left carousel */}
          <div className="flex-1 relative rounded-md overflow-hidden">
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
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {leftImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setLeftIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === leftIndex ? 'bg-white w-4' : 'bg-white/50 w-1.5'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Right carousel - hidden on mobile */}
          <div className="hidden md:block flex-1 relative rounded-md overflow-hidden">
            {rightImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Shop ${i + 4}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  i === rightIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {rightImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setRightIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === rightIndex ? 'bg-white w-4' : 'bg-white/50 w-1.5'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCarousel;
