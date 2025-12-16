import { hotDeals } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { Link } from 'react-router-dom';
import { Flame, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HotDeals = () => {
  return (
    <section className="section-spacing">
      <div className="section-header">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl">
            <Flame className="h-5 w-5 md:h-6 md:w-6 text-primary" />
          </div>
          <div>
            <h2 className="section-title">Hot Deals</h2>
            <p className="text-xs text-muted-foreground hidden sm:block">Limited time offers</p>
          </div>
        </div>
        <Link to="/products">
          <Button variant="outline" size="sm" className="gap-1.5 h-9 font-semibold border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground">
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