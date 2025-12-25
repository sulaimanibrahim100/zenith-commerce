import { trendingProducts } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { Link } from 'react-router-dom';
import { TrendingUp, ChevronRight } from 'lucide-react';

const TrendingProducts = () => {
  return (
    <div className="jumia-section">
      {/* Header */}
      <div className="jumia-section-header">
        <div className="flex items-center gap-1.5">
          <TrendingUp className="h-4 w-4" />
          <span className="jumia-section-title">Trending Products</span>
        </div>
        <Link
          to="/products?filter=trending"
          className="flex items-center gap-1 text-xs font-medium hover:underline"
        >
          See All <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      
      {/* Products - Horizontal scroll */}
      <div className="p-2">
        <div className="product-scroll">
          {trendingProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;