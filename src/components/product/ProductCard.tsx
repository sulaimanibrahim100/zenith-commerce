import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Zap } from 'lucide-react';
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

  const isCompact = variant === 'compact';

  return (
    <div className="group bg-card rounded-lg md:rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300">
      <Link to={`/product/${product.id}`} className="block relative">
        <div className={`aspect-square overflow-hidden bg-secondary/30 ${isCompact ? '' : ''}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Badges */}
        <div className="absolute top-1.5 left-1.5 flex flex-col gap-1">
          {product.discount && (
            <span className="bg-primary text-primary-foreground text-[10px] md:text-xs font-bold px-1.5 py-0.5 rounded">
              -{product.discount}%
            </span>
          )}
          {product.isFlashSale && (
            <span className="bg-amber-500 text-white text-[10px] md:text-xs font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
              <Zap className="h-2.5 w-2.5 fill-current" />
              Flash
            </span>
          )}
        </div>
        
        {/* Wishlist */}
        <button className="absolute top-1.5 right-1.5 p-1.5 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-primary hover:text-white shadow-sm">
          <Heart className="h-3.5 w-3.5" />
        </button>
      </Link>

      <div className={`p-2.5 md:p-3 ${isCompact ? 'p-2' : ''}`}>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-foreground text-xs md:text-sm line-clamp-2 mb-1.5 hover:text-primary transition-colors leading-tight min-h-[2.5rem]">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-1.5">
          <div className="flex items-center gap-0.5">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span className="text-xs font-medium">{product.rating}</span>
          </div>
          <span className="text-[10px] text-muted-foreground">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex flex-col gap-0.5 mb-2">
          <span className="text-sm md:text-base font-bold text-foreground">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-[10px] md:text-xs text-muted-foreground line-through">
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
          className="w-full gap-1.5 h-8 text-xs"
          size="sm"
        >
          <ShoppingCart className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Add to Cart</span>
          <span className="sm:hidden">Add</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;