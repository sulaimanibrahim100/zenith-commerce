import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const FeaturedProducts = () => {
  const featuredProducts = products.slice(0, 8);

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Featured Products</h2>
        <Link
          to="/products"
          className="flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all"
        >
          View All <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
