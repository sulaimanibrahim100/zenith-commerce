import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Laptop, Monitor, Smartphone, Server, Printer, Gamepad2, Cpu, Tv, Wifi, CircleDot } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200',
    title: 'MacBook Pro',
    subtitle: 'Power meets elegance',
    description: 'Experience the future of computing',
    cta: 'Shop Now',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=1200',
    title: 'iPhone 15 Pro',
    subtitle: 'Titanium. So strong. So light.',
    description: 'The most powerful iPhone ever',
    cta: 'Explore',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=1200',
    title: 'Gaming Setup',
    subtitle: 'Level up your game',
    description: 'Premium gaming accessories',
    cta: 'View Collection',
  },
];

const categoryIcons = [
  { icon: Laptop, name: 'Laptops', href: '/products?category=laptops' },
  { icon: Monitor, name: 'Desktops', href: '/products?category=desktops' },
  { icon: Smartphone, name: 'Phones', href: '/products?category=phones' },
  { icon: Server, name: 'Servers', href: '/products?category=servers' },
  { icon: Printer, name: 'Printers', href: '/products?category=printers' },
  { icon: Gamepad2, name: 'Games', href: '/products?category=gaming' },
  { icon: Cpu, name: 'Computer', href: '/products?category=computing' },
  { icon: Tv, name: 'Monitors', href: '/products?category=monitors' },
  { icon: Wifi, name: 'Networking', href: '/products?category=networking' },
  { icon: CircleDot, name: 'Software', href: '/products?category=software' },
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
    <div className="container py-4">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full relative">
              <div className="relative aspect-[21/9] sm:aspect-[21/8] lg:aspect-[21/7]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                
                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12 lg:px-16">
                  <div className="max-w-lg">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-3">
                      {slide.subtitle}
                    </span>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6">
                      {slide.description}
                    </p>
                    <Link
                      to="/products"
                      className="inline-flex items-center px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors text-sm"
                    >
                      {slide.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 bg-white hover:bg-white/90 text-foreground rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 bg-white hover:bg-white/90 text-foreground rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary w-6' 
                  : 'bg-white/50 w-2 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Category Icons Row */}
      <div className="mt-6 bg-card rounded-xl shadow-sm p-4 sm:p-6">
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-4">
          {categoryIcons.map((cat) => (
            <Link
              key={cat.name}
              to={cat.href}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <cat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <span className="text-xs font-medium text-foreground text-center truncate w-full">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;