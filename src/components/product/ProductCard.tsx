import { Link } from 'react-router-dom';
import { Product } from '@/types';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  showStock?: boolean;
}

const ProductCard = ({ product, showStock = false }: ProductCardProps) => {
  return (
    <Link 
      to={`/product/${product.id}`} 
      className="block bg-card border border-border rounded overflow-hidden hover:shadow-md transition-shadow"
    >
      {/* Image container */}
      <div className="relative aspect-square bg-white p-2">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-contain"
        />
        
        {/* Discount badge - Jumia style */}
        {product.discount && (
          <span className="absolute top-1 right-1 bg-primary text-primary-foreground text-[10px] font-semibold px-1.5 py-0.5 rounded-sm">
            -{product.discount}%
          </span>
        )}
      </div>

      {/* Product info */}
      <div className="p-2 border-t border-border">
        <h3 className="text-xs text-foreground line-clamp-2 leading-tight min-h-[2rem] mb-1">
          {product.name}
        </h3>

        {/* Price */}
        <div className="space-y-0.5">
          <p className="text-sm font-bold text-foreground">
            {formatPrice(product.price)}
          </p>
          {product.originalPrice && (
            <p className="text-[10px] text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </p>
          )}
        </div>

        {/* Stock indicator for flash sales */}
        {showStock && (
          <div className="mt-2">
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full"
                style={{ width: `${Math.random() * 60 + 20}%` }}
              />
            </div>
            <p className="text-[10px] text-muted-foreground mt-0.5">
              {Math.floor(Math.random() * 100 + 10)} items left
            </p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;