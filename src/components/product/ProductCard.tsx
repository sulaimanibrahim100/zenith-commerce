import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'compact';
}

const ProductCard = ({ product, variant = 'default' }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="group bg-card rounded-lg border border-border overflow-hidden transition-all duration-200 hover:shadow-md hover:border-border/60">
      <Link to={`/product/${product.id}`} className="block relative">
        <div className="aspect-square overflow-hidden bg-secondary/30">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Discount badge */}
        {product.discount && (
          <span className="absolute top-2 left-2 bg-destructive text-destructive-foreground text-[10px] font-semibold px-1.5 py-0.5 rounded">
            -{product.discount}%
          </span>
        )}
        
        {/* Wishlist */}
        <button className="absolute top-2 right-2 p-1.5 bg-card/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground">
          <Heart className="h-3.5 w-3.5" />
        </button>
      </Link>

      <div className="p-3">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-foreground text-xs sm:text-sm line-clamp-2 mb-1.5 hover:text-primary transition-colors leading-tight min-h-[2rem] sm:min-h-[2.5rem]">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
          <span className="text-xs text-muted-foreground">{product.rating}</span>
          <span className="text-[10px] text-muted-foreground">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="mb-2.5">
          <span className="text-sm sm:text-base font-bold text-foreground">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-[10px] sm:text-xs text-muted-foreground line-through ml-1.5">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Add to cart */}
        <Button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="w-full gap-1.5 h-8 text-xs font-medium"
          size="sm"
        >
          <ShoppingCart className="h-3.5 w-3.5" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
