import { hotDeals } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { Link } from 'react-router-dom';
import { Flame, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HotDeals = () => {
  return (
    <section className="section-spacing">
      <div className="section-header">
        <div className="flex items-center gap-2">
          <Flame className="h-5 w-5 text-destructive" />
          <h2 className="section-title">Hot Deals</h2>
        </div>
        <Link to="/products?filter=deals">
          <Button variant="outline" size="sm" className="gap-1 h-8 text-xs font-medium">
            View All
            <ChevronRight className="h-3.5 w-3.5" />
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
