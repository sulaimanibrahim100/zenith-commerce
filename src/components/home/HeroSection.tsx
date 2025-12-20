import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const slides = [
  {
    id: 1,
    title: 'MacBook Pro M3',
    subtitle: 'Power meets performance',
    description: 'Up to 30% OFF on selected models',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
    link: '/products?category=laptops',
    bg: 'bg-gradient-to-br from-slate-800 to-slate-900',
  },
  {
    id: 2,
    title: 'iPhone 15 Pro',
    subtitle: 'Titanium. So strong.',
    description: 'Best prices guaranteed',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800',
    link: '/products?category=phones',
    bg: 'bg-gradient-to-br from-violet-800 to-indigo-900',
  },
  {
    id: 3,
    title: 'Gaming Gear',
    subtitle: 'Level up your game',
    description: 'PS5, Xbox & Gaming Laptops',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800',
    link: '/products?category=gaming',
    bg: 'bg-gradient-to-br from-blue-800 to-cyan-900',
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
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="container py-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
        {/* Categories sidebar - Desktop only */}
        <div className="hidden lg:block bg-card rounded-lg border border-border overflow-hidden">
          <div className="p-3 bg-primary text-primary-foreground">
            <h3 className="font-semibold text-sm">All Categories</h3>
          </div>
          <div className="max-h-[320px] overflow-y-auto">
            {categories.slice(0, 12).map((cat) => (
              <Link
                key={cat.id}
                to={`/products?category=${cat.id}`}
                className="flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-secondary transition-colors border-b border-border/50 last:border-0"
              >
                <span>{cat.icon}</span>
                <span className="truncate">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Main carousel */}
        <div className="lg:col-span-3 relative overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className={`min-w-full ${slide.bg}`}>
                <div className="relative h-[180px] sm:h-[240px] md:h-[320px]">
                  <div className="absolute inset-0 flex items-center px-6 md:px-10">
                    <div className="grid grid-cols-2 gap-4 w-full items-center">
                      <div className="text-white space-y-2 md:space-y-3">
                        <p className="text-[10px] sm:text-xs text-white/70 font-medium uppercase tracking-wider">
                          {slide.subtitle}
                        </p>
                        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight">
                          {slide.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-white/80">
                          {slide.description}
                        </p>
                        <Link to={slide.link}>
                          <Button 
                            size="sm"
                            className="mt-2 bg-white text-foreground hover:bg-white/90 font-semibold gap-1.5 h-8 sm:h-9 text-xs px-4"
                          >
                            Shop Now
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Button>
                        </Link>
                      </div>
                      <div className="flex justify-center">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="max-h-[120px] sm:max-h-[180px] md:max-h-[260px] object-contain drop-shadow-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-white/20 hover:bg-white/40 text-white rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-white/20 hover:bg-white/40 text-white rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-white w-5' 
                    : 'bg-white/40 w-1.5'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
