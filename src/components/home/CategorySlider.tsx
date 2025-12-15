import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CategorySlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    el?.addEventListener('scroll', checkScroll);
    return () => el?.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-card border-b border-border">
      <div className="container relative py-2">
        <div className="flex items-center">
          {/* Left arrow */}
          <Button
            variant="ghost"
            size="icon"
            className={`hidden md:flex h-7 w-7 shrink-0 mr-2 transition-opacity ${
              canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Categories */}
          <div
            ref={scrollRef}
            className="flex items-center gap-1.5 md:gap-2 overflow-x-auto scrollbar-hide scroll-smooth flex-1"
          >
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary hover:bg-accent hover:text-accent-foreground rounded-full transition-all text-xs md:text-sm whitespace-nowrap shrink-0 font-medium"
              >
                <span className="text-sm md:text-base">{category.icon}</span>
                <span>{category.name}</span>
              </Link>
            ))}
          </div>

          {/* Right arrow */}
          <Button
            variant="ghost"
            size="icon"
            className={`hidden md:flex h-7 w-7 shrink-0 ml-2 transition-opacity ${
              canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;