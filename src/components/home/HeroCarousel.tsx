import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
    bgColor: 'bg-gradient-to-r from-slate-900 to-slate-700',
  },
  {
    id: 2,
    title: 'iPhone 15 Pro Max',
    subtitle: 'Titanium. So strong. So light.',
    description: 'Now available - Best prices guaranteed',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800',
    link: '/products?category=phones',
    bgColor: 'bg-gradient-to-r from-purple-900 to-purple-700',
  },
  {
    id: 3,
    title: 'Gaming Setup',
    subtitle: 'Level up your game',
    description: 'PS5, Xbox & Gaming Laptops',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800',
    link: '/products?category=gaming',
    bgColor: 'bg-gradient-to-r from-blue-900 to-blue-700',
  },
  {
    id: 4,
    title: 'Home Office',
    subtitle: 'Work from anywhere',
    description: 'Monitors, Keyboards & Accessories',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800',
    link: '/products?category=monitors',
    bgColor: 'bg-gradient-to-r from-emerald-900 to-emerald-700',
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative overflow-hidden rounded-xl">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`min-w-full ${slide.bgColor}`}
          >
            <div className="relative h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px]">
              <div className="absolute inset-0 flex items-center">
                <div className="container">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="text-white space-y-2 md:space-y-4 p-4 md:p-0">
                      <p className="text-sm md:text-base text-white/80">{slide.subtitle}</p>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                        {slide.title}
                      </h2>
                      <p className="text-base md:text-lg text-white/90">{slide.description}</p>
                      <Link to={slide.link}>
                        <Button className="mt-2 md:mt-4 bg-white text-foreground hover:bg-white/90 font-semibold">
                          Shop Now
                        </Button>
                      </Link>
                    </div>
                    <div className="hidden md:flex justify-center">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="max-h-[300px] lg:max-h-[350px] object-contain drop-shadow-2xl"
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
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
