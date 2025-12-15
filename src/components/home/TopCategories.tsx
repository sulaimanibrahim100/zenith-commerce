import { Link } from 'react-router-dom';
import { topCategories } from '@/data/products';
import { ChevronRight } from 'lucide-react';

const TopCategories = () => {
  return (
    <section className="py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">Top Categories</h2>
        <Link 
          to="/products" 
          className="flex items-center gap-1 text-primary hover:underline text-sm font-medium"
        >
          See All <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
        {topCategories.map((category) => (
          <Link
            key={category.id}
            to={`/products?category=${category.id}`}
            className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-square relative overflow-hidden bg-muted/30">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
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
