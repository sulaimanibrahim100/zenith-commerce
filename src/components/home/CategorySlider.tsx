import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CategorySlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

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
    <div className="bg-background py-3 border-b border-border">
      <div className="container relative">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex shrink-0 h-8 w-8"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div
            ref={scrollRef}
            className="flex items-center gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="flex items-center gap-2 px-3 py-1.5 bg-secondary/50 hover:bg-secondary rounded-full transition-colors whitespace-nowrap text-sm shrink-0"
              >
                <span>{category.icon}</span>
                <span className="text-foreground font-medium">{category.name}</span>
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex shrink-0 h-8 w-8"
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
