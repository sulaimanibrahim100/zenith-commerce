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
    bg: 'from-slate-800 to-slate-900',
  },
  {
    id: 2,
    title: 'iPhone 15 Pro',
    subtitle: 'Titanium. So strong.',
    description: 'Best prices guaranteed',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800',
    link: '/products?category=phones',
    bg: 'from-violet-800 to-indigo-900',
  },
  {
    id: 3,
    title: 'Gaming Gear',
    subtitle: 'Level up your game',
    description: 'PS5, Xbox & Gaming Laptops',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800',
    link: '/products?category=gaming',
    bg: 'from-blue-800 to-cyan-900',
  },
];

const categoryIcons: Record<string, string> = {
  laptops: '💻',
  desktops: '🖥️',
  phones: '📱',
  servers: '🗄️',
  printers: '🖨️',
  gaming: '🎮',
  accessories: '🖱️',
  monitors: '🖥️',
  networking: '📡',
  software: '💿',
  electronics: '🔌',
  cameras: '📷',
  cartridges: '🖨️',
  projectors: '📽️',
  furniture: '🪑',
};

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
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Categories sidebar - Desktop only */}
        <div className="hidden lg:block bg-card rounded-xl border border-border overflow-hidden shadow-sm">
          <div className="p-4 bg-gradient-to-r from-primary to-primary/90">
            <h3 className="font-bold text-primary-foreground flex items-center gap-2">
              <span className="text-lg">☰</span>
              All Categories
            </h3>
          </div>
          <div className="max-h-[340px] overflow-y-auto scrollbar-hide">
            {categories.slice(0, 12).map((cat, index) => (
              <Link
                key={cat.id}
                to={`/products?category=${cat.id}`}
                className="group flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-all duration-200 border-b border-border/30 last:border-0"
              >
                <span className="text-xl w-7 text-center group-hover:scale-110 transition-transform">
                  {categoryIcons[cat.id] || '📦'}
                </span>
                <span className="font-medium flex-1 truncate">{cat.name}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
          <Link
            to="/products"
            className="block p-3 text-center text-sm font-semibold text-primary hover:bg-primary/5 transition-colors border-t border-border"
          >
            View All Categories →
          </Link>
        </div>

        {/* Main carousel */}
        <div className="lg:col-span-3 relative overflow-hidden rounded-xl shadow-lg">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className={`min-w-full bg-gradient-to-br ${slide.bg}`}>
                <div className="relative h-[200px] sm:h-[280px] md:h-[360px]">
                  <div className="absolute inset-0 flex items-center px-6 md:px-12">
                    <div className="grid grid-cols-2 gap-4 w-full items-center">
                      <div className="text-white space-y-3 md:space-y-4">
                        <p className="text-[10px] sm:text-xs text-white/70 font-semibold uppercase tracking-widest">
                          {slide.subtitle}
                        </p>
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
                          {slide.title}
                        </h2>
                        <p className="text-sm sm:text-base text-white/80 font-medium">
                          {slide.description}
                        </p>
                        <Link to={slide.link}>
                          <Button 
                            size="lg"
                            className="mt-2 bg-white text-foreground hover:bg-white/90 font-bold gap-2 h-10 sm:h-12 text-sm px-6 shadow-lg"
                          >
                            Shop Now
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                      <div className="flex justify-center">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="max-h-[140px] sm:max-h-[200px] md:max-h-[280px] object-contain drop-shadow-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-sm"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-sm"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white w-8' 
                    : 'bg-white/40 w-2 hover:bg-white/60'
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
