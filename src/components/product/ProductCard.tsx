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
    <div className="group bg-card rounded-xl border border-border overflow-hidden card-hover">
      <Link to={`/product/${product.id}`} className="block relative">
        <div className="aspect-square overflow-hidden bg-gradient-to-br from-secondary/50 to-secondary">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1.5">
          {product.discount && (
            <span className="bg-primary text-primary-foreground text-[10px] md:text-xs font-bold px-2 py-1 rounded-md shadow-md">
              -{product.discount}%
            </span>
          )}
          {product.isFlashSale && (
            <span className="bg-amber-500 text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1 shadow-md">
              <Zap className="h-3 w-3 fill-current" />
              Flash
            </span>
          )}
        </div>
        
        {/* Wishlist */}
        <button className="absolute top-2 right-2 p-2 bg-white/95 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-primary hover:text-white shadow-lg">
          <Heart className="h-4 w-4" />
        </button>
      </Link>

      <div className={`p-3 ${isCompact ? 'p-2.5' : ''}`}>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-foreground text-xs md:text-sm line-clamp-2 mb-2 hover:text-primary transition-colors leading-snug min-h-[2.5rem]">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-500/10 px-1.5 py-0.5 rounded">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span className="text-xs font-semibold text-amber-700 dark:text-amber-400">{product.rating}</span>
          </div>
          <span className="text-[10px] text-muted-foreground">({product.reviews} reviews)</span>
        </div>

        {/* Price */}
        <div className="flex flex-col gap-0.5 mb-3">
          <span className="text-base md:text-lg font-bold text-foreground">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
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
          className="w-full gap-2 h-9 text-xs font-semibold shadow-sm"
          size="sm"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Add to Cart</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;