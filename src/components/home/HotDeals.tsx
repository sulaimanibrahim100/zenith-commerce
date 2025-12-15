import { hotDeals } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { Link } from 'react-router-dom';
import { Flame, ChevronRight } from 'lucide-react';

const HotDeals = () => {
  return (
    <section className="py-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Flame className="h-6 w-6 text-primary" />
          <h2 className="text-xl md:text-2xl font-bold text-foreground">Hot Deals</h2>
        </div>
        <Link 
          to="/products" 
          className="flex items-center gap-1 text-primary hover:underline text-sm font-medium"
        >
          See All <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
        {hotDeals.slice(0, 5).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default HotDeals;
