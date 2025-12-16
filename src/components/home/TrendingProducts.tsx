import { trendingProducts } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { Link } from 'react-router-dom';
import { TrendingUp, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TrendingProducts = () => {
  return (
    <section className="section-spacing">
      <div className="section-header">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-xl">
            <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-purple-500" />
          </div>
          <div>
            <h2 className="section-title">Trending Products</h2>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-amber-500" />
              Up to 50% discount special offer
            </p>
          </div>
        </div>
        <Link to="/products">
          <Button variant="outline" size="sm" className="gap-1.5 h-9 font-semibold border-purple-500/30 text-purple-600 hover:bg-purple-500 hover:text-white">
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