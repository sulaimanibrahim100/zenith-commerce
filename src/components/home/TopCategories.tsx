import { Link } from 'react-router-dom';
import { topCategories } from '@/data/products';
import { ChevronRight, Grid3X3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TopCategories = () => {
  return (
    <section className="section-padding">
      <div className="section-header">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-emerald-500/10 rounded-lg">
            <Grid3X3 className="h-4 w-4 md:h-5 md:w-5 text-emerald-500" />
          </div>
          <h2 className="section-title">Top Categories</h2>
        </div>
        <Link to="/products">
          <Button variant="ghost" size="sm" className="gap-1 text-primary hover:text-primary h-8">
            See All
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4">
        {topCategories.map((category) => (
          <Link
            key={category.id}
            to={`/products?category=${category.id}`}
            className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-secondary/50 to-secondary">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="font-semibold text-white text-sm md:text-base drop-shadow-lg">
                  {category.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;