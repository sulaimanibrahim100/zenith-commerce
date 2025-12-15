import { hotDeals } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { Link } from 'react-router-dom';
import { Flame, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HotDeals = () => {
  return (
    <section className="section-padding">
      <div className="section-header">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-primary/10 rounded-lg">
            <Flame className="h-4 w-4 md:h-5 md:w-5 text-primary" />
          </div>
          <h2 className="section-title">Hot Deals</h2>
        </div>
        <Link to="/products">
          <Button variant="ghost" size="sm" className="gap-1 text-primary hover:text-primary h-8">
            See All
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      
      <div className="product-grid">
        {hotDeals.slice(0, 5).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default HotDeals;