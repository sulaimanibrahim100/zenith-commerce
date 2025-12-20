import { Link } from 'react-router-dom';
import { topCategories } from '@/data/products';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TopCategories = () => {
  return (
    <section className="section-spacing">
      <div className="section-header">
        <h2 className="section-title">Top Categories</h2>
        <Link to="/products">
          <Button variant="outline" size="sm" className="gap-1 h-8 text-xs font-medium">
            See All
            <ChevronRight className="h-3.5 w-3.5" />
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
        {topCategories.map((category) => (
          <Link
            key={category.id}
            to={`/products?category=${category.id}`}
            className="group relative rounded-lg overflow-hidden aspect-[4/3]"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <h3 className="font-semibold text-white text-sm sm:text-base">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
