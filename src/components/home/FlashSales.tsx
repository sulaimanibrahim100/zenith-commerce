import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, ChevronRight } from 'lucide-react';
import { flashSaleProducts } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
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
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1.5 rounded-lg">
            <Zap className="h-5 w-5 fill-current" />
            <span className="font-bold">Flash Sales</span>
          </div>
          
          {/* Countdown timer */}
          <div className="flex items-center gap-1">
            <span className="text-sm text-muted-foreground">Ends in:</span>
            <div className="flex gap-1">
              <span className="bg-foreground text-background text-sm font-bold px-2 py-1 rounded">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-foreground font-bold">:</span>
              <span className="bg-foreground text-background text-sm font-bold px-2 py-1 rounded">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-foreground font-bold">:</span>
              <span className="bg-foreground text-background text-sm font-bold px-2 py-1 rounded">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        <Link
          to="/products?flashsale=true"
          className="flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all"
        >
          See All <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {flashSaleProducts.slice(0, 5).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FlashSales;
