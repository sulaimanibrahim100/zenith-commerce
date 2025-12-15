import { trendingProducts } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { Link } from 'react-router-dom';
import { TrendingUp, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TrendingProducts = () => {
  return (
    <section className="section-padding">
      <div className="section-header">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="p-1.5 bg-purple-500/10 rounded-lg">
              <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-purple-500" />
            </div>
            <h2 className="section-title">Trending Products</h2>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground flex items-center gap-1">
            <Sparkles className="h-3 w-3" />
            Up to 50% discount special offer
          </p>
        </div>
        <Link to="/products">
          <Button variant="ghost" size="sm" className="gap-1 text-primary hover:text-primary h-8">
            See All
            <ChevronRight className="h-4 w-4" />
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