import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: 'MacBook Pro M3',
    subtitle: 'Power meets performance',
    description: 'Up to 30% OFF on selected models',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
    link: '/products?category=laptops',
    bg: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700',
  },
  {
    id: 2,
    title: 'iPhone 15 Pro',
    subtitle: 'Titanium. So strong.',
    description: 'Best prices guaranteed',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800',
    link: '/products?category=phones',
    bg: 'bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-700',
  },
  {
    id: 3,
    title: 'Gaming Gear',
    subtitle: 'Level up your game',
    description: 'PS5, Xbox & Gaming Laptops',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800',
    link: '/products?category=gaming',
    bg: 'bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700',
  },
  {
    id: 4,
    title: 'Home Office',
    subtitle: 'Work from anywhere',
    description: 'Monitors & Accessories',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800',
    link: '/products?category=monitors',
    bg: 'bg-gradient-to-br from-emerald-900 via-teal-800 to-green-700',
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div 
      className="relative overflow-hidden rounded-2xl shadow-xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={`min-w-full ${slide.bg}`}>
            <div className="relative h-[160px] sm:h-[200px] md:h-[300px] lg:h-[360px]">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full px-4 md:px-8 lg:px-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div className="text-white space-y-2 md:space-y-4">
                      <p className="text-[10px] sm:text-xs md:text-sm text-white/70 font-medium uppercase tracking-wider">
                        {slide.subtitle}
                      </p>
                      <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                        {slide.title}
                      </h2>
                      <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-sm">
                        {slide.description}
                      </p>
                      <Link to={slide.link}>
                        <Button 
                          size="sm"
                          className="mt-1 md:mt-3 bg-white text-slate-900 hover:bg-white/90 font-bold gap-2 h-8 md:h-11 text-xs md:text-sm px-4 md:px-6 shadow-lg"
                        >
                          Shop Now
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                    <div className="hidden md:flex justify-center items-center">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="max-h-[200px] lg:max-h-[280px] object-contain drop-shadow-2xl"
                      />
                    </div>
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
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 h-8 w-8 md:h-11 md:w-11 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-md shadow-lg"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 h-8 w-8 md:h-11 md:w-11 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-md shadow-lg"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-6 shadow-md' 
                : 'bg-white/40 w-2 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;