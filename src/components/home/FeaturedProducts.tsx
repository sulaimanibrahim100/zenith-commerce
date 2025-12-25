import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const FeaturedProducts = () => {
  const featuredProducts = products.slice(0, 12);

  return (
    <div className="jumia-section">
      {/* Header */}
      <div className="jumia-section-header">
        <div className="flex items-center gap-1.5">
          <Sparkles className="h-4 w-4" />
          <span className="jumia-section-title">Featured Products</span>
        </div>
        <Link
          to="/products"
          className="flex items-center gap-1 text-xs font-medium hover:underline"
        >
          See All <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Products Grid */}
      <div className="p-2">
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;