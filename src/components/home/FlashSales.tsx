import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, ChevronRight } from 'lucide-react';
import { flashSaleProducts } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 58,
    seconds: 17,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="jumia-section">
      {/* Header */}
      <div className="jumia-section-header">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <Zap className="h-4 w-4 fill-current" />
            <span className="jumia-section-title">Flash Sales</span>
          </div>
          
          {/* Countdown timer */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="opacity-80">Time Left:</span>
            <span className="font-bold">
              {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
            </span>
          </div>
        </div>

        <Link
          to="/products?flashsale=true"
          className="flex items-center gap-1 text-xs font-medium hover:underline"
        >
          See All <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Products - Horizontal scroll */}
      <div className="p-2">
        <div className="product-scroll">
          {flashSaleProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} showStock />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSales;