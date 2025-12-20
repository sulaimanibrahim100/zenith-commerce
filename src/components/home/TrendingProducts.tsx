import { trendingProducts } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { Link } from 'react-router-dom';
import { TrendingUp, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TrendingProducts = () => {
  return (
    <section className="section-spacing">
      <div className="section-header">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          <div>
            <h2 className="section-title">Trending Products</h2>
            <p className="text-xs text-muted-foreground">Up to 50% off</p>
          </div>
        </div>
        <Link to="/products?filter=trending">
          <Button variant="outline" size="sm" className="gap-1 h-8 text-xs font-medium">
            View All
            <ChevronRight className="h-3.5 w-3.5" />
          </Button>
        </Link>
      </div>
      
      <div className="product-grid">
        {trendingProducts.slice(0, 5).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;
