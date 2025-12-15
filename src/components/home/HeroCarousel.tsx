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
    gradient: 'from-slate-900 via-slate-800 to-slate-700',
  },
  {
    id: 2,
    title: 'iPhone 15 Pro',
    subtitle: 'Titanium. So strong.',
    description: 'Best prices guaranteed',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800',
    link: '/products?category=phones',
    gradient: 'from-violet-900 via-purple-800 to-indigo-700',
  },
  {
    id: 3,
    title: 'Gaming Gear',
    subtitle: 'Level up your game',
    description: 'PS5, Xbox & Gaming Laptops',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800',
    link: '/products?category=gaming',
    gradient: 'from-blue-900 via-blue-800 to-cyan-700',
  },
  {
    id: 4,
    title: 'Home Office',
    subtitle: 'Work from anywhere',
    description: 'Monitors & Accessories',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800',
    link: '/products?category=monitors',
    gradient: 'from-emerald-900 via-teal-800 to-green-700',
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
      className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`min-w-full bg-gradient-to-br ${slide.gradient}`}
          >
            <div className="relative h-[180px] sm:h-[220px] md:h-[320px] lg:h-[380px]">
              <div className="absolute inset-0 flex items-center">
                <div className="container">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div className="text-white space-y-1.5 md:space-y-3 px-2 md:px-0">
                      <p className="text-xs md:text-sm text-white/70 font-medium">
                        {slide.subtitle}
                      </p>
                      <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                        {slide.title}
                      </h2>
                      <p className="text-sm md:text-base text-white/80">
                        {slide.description}
                      </p>
                      <Link to={slide.link}>
                        <Button 
                          size="sm"
                          className="mt-2 md:mt-4 bg-white text-foreground hover:bg-white/90 font-semibold gap-1.5 h-8 md:h-10 text-xs md:text-sm"
                        >
                          Shop Now
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Button>
                      </Link>
                    </div>
                    <div className="hidden md:flex justify-center">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="max-h-[240px] lg:max-h-[320px] object-contain drop-shadow-2xl"
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
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 h-8 w-8 md:h-10 md:w-10 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-sm"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 h-8 w-8 md:h-10 md:w-10 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-sm"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-6' 
                : 'bg-white/40 w-1.5 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;