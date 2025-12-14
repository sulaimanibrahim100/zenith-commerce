import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in">
      <Link to={`/product/${product.id}`} className="block relative">
        <div className="aspect-square overflow-hidden bg-secondary">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        {/* Discount badge */}
        {product.discount && (
          <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-md">
            -{product.discount}%
          </span>
        )}
        
        {/* Wishlist button */}
        <button className="absolute top-2 right-2 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground">
          <Heart className="h-4 w-4" />
        </button>

        {/* Flash sale badge */}
        {product.isFlashSale && (
          <span className="absolute bottom-2 left-2 bg-warning text-warning-foreground text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
            ⚡ Flash Sale
          </span>
        )}
      </Link>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-foreground line-clamp-2 mb-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <Star className="h-4 w-4 fill-warning text-warning" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-sm text-muted-foreground">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-foreground">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Add to cart button */}
        <Button
          onClick={() => addToCart(product)}
          className="w-full gap-2"
          size="sm"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
