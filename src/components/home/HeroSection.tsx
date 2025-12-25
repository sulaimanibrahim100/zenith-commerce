import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Phone, Store, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200',
    alt: 'MacBook Pro',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=1200',
    alt: 'iPhone 15',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=1200',
    alt: 'Gaming',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="container py-2">
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_200px] gap-2">
        {/* Categories sidebar - Desktop only */}
        <div className="hidden lg:block bg-card rounded shadow-sm overflow-hidden">
          <div className="max-h-[320px] overflow-y-auto scrollbar-hide">
            {categories.slice(0, 12).map((cat) => (
              <Link
                key={cat.id}
                to={`/products?category=${cat.id}`}
                className="flex items-center gap-2 px-3 py-2 text-xs text-foreground hover:bg-accent hover:text-primary transition-colors border-b border-border/50 last:border-0"
              >
                <span className="text-sm">{cat.icon}</span>
                <span className="truncate">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Main carousel */}
        <div className="relative overflow-hidden rounded shadow-sm bg-card">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="min-w-full">
                <div className="relative aspect-[16/7] sm:aspect-[16/6] bg-gradient-to-br from-primary/10 to-primary/5">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-card/90 hover:bg-card text-foreground rounded-full flex items-center justify-center shadow-sm"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-card/90 hover:bg-card text-foreground rounded-full flex items-center justify-center shadow-sm"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-primary w-4' 
                    : 'bg-foreground/30 w-1.5 hover:bg-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right sidebar - Desktop only */}
        <div className="hidden lg:flex flex-col gap-2">
          <div className="bg-card rounded shadow-sm p-3 flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold">CALL TO ORDER</span>
            </div>
            <p className="text-xs text-muted-foreground">0700-600-0000</p>
            <p className="text-xs text-muted-foreground">020188...</p>
          </div>
          <Link to="/sell" className="bg-card rounded shadow-sm p-3 hover:bg-accent transition-colors">
            <div className="flex items-center gap-2">
              <Store className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold">Sell on Clarity</span>
            </div>
          </Link>
          <Link to="/delivery" className="bg-card rounded shadow-sm p-3 hover:bg-accent transition-colors">
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold">Send Your Packages</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;