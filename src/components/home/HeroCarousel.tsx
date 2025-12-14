import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: 'Flash Sale!',
    subtitle: 'Up to 50% OFF on Electronics',
    cta: 'Shop Now',
    link: '/products?category=electronics',
    bg: 'from-primary to-primary-dark',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800',
  },
  {
    id: 2,
    title: 'New Arrivals',
    subtitle: 'Latest Smartphones & Gadgets',
    cta: 'Explore',
    link: '/products?category=phones',
    bg: 'from-primary-dark to-primary',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
  },
  {
    id: 3,
    title: 'Fashion Week',
    subtitle: 'Trending Styles at Amazing Prices',
    cta: 'Shop Fashion',
    link: '/products?category=fashion',
    bg: 'from-primary to-primary-light',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800',
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrent(index);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === current ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
          }`}
        >
          <div className={`relative h-full bg-gradient-to-r ${slide.bg}`}>
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
            />
            <div className="relative h-full flex items-center">
              <div className="container">
                <div className="max-w-lg text-primary-foreground animate-fade-in-up">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">{slide.title}</h2>
                  <p className="text-lg sm:text-xl mb-6 opacity-90">{slide.subtitle}</p>
                  <Button asChild size="lg" variant="secondary" className="font-semibold">
                    <Link to={slide.link}>{slide.cta}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/20 backdrop-blur-sm rounded-full text-primary-foreground hover:bg-background/40 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/20 backdrop-blur-sm rounded-full text-primary-foreground hover:bg-background/40 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? 'bg-primary-foreground w-6' : 'bg-primary-foreground/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
