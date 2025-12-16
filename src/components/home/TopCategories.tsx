import { Link } from 'react-router-dom';
import { topCategories } from '@/data/products';
import { ChevronRight, Grid3X3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TopCategories = () => {
  return (
    <section className="section-spacing">
      <div className="section-header">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 rounded-xl">
            <Grid3X3 className="h-5 w-5 md:h-6 md:w-6 text-emerald-500" />
          </div>
          <h2 className="section-title">Top Categories</h2>
        </div>
        <Link to="/products">
          <Button variant="outline" size="sm" className="gap-1.5 h-9 font-semibold border-emerald-500/30 text-emerald-600 hover:bg-emerald-500 hover:text-white">
            See All
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
        {topCategories.map((category) => (
          <Link
            key={category.id}
            to={`/products?category=${category.id}`}
            className="group bg-card rounded-2xl overflow-hidden border border-border card-hover"
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <h3 className="font-bold text-white text-sm md:text-base lg:text-lg drop-shadow-lg">
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