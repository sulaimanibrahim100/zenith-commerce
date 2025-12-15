import { useState, useEffect } from 'react';
import { Phone, Zap } from 'lucide-react';

interface LiveBannerProps {
  variant?: 'primary' | 'secondary' | 'gradient';
  className?: string;
}

const bannerContent = [
  {
    icon: '🔥',
    title: 'MEGA TECH SALE',
    cta: 'LIVE NOW',
    description: 'Up to 50% OFF on Laptops & Phones',
    phone: '0700 123 4567',
  },
  {
    icon: '🚚',
    title: 'FREE DELIVERY',
    cta: 'LIMITED TIME',
    description: 'On orders above ₦100,000',
    phone: '0700 123 4567',
  },
  {
    icon: '✨',
    title: 'NEW ARRIVALS',
    cta: 'SHOP NOW',
    description: 'Latest MacBooks & iPhones in stock',
    phone: '0700 123 4567',
  },
];

const LiveBanner = ({ variant = 'primary', className = '' }: LiveBannerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % bannerContent.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const content = bannerContent[currentIndex];

  const variants = {
    primary: 'bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500',
    secondary: 'bg-gradient-to-r from-primary via-rose-500 to-orange-500',
    gradient: 'bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500',
  };

  return (
    <div className={`${variants[variant]} text-white overflow-hidden ${className}`}>
      <div className="container py-2 md:py-2.5">
        <div 
          className={`flex items-center justify-between transition-all duration-300 ${
            isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
          }`}
        >
          <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
            <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
              <span className="text-base md:text-xl">{content.icon}</span>
              <span className="font-bold text-xs md:text-sm tracking-wide">
                {content.title}
              </span>
            </div>
            
            <span className="hidden sm:flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white font-bold px-2 md:px-3 py-0.5 md:py-1 rounded text-[10px] md:text-xs shrink-0">
              <Zap className="h-3 w-3 fill-current" />
              {content.cta}
            </span>
            
            <span className="hidden md:block text-xs font-medium text-white/90 truncate">
              {content.description}
            </span>
          </div>
          
          <div className="hidden sm:flex items-center gap-1.5 text-xs shrink-0">
            <Phone className="h-3 w-3" />
            <span className="hidden lg:inline text-white/80">Call to order:</span>
            <span className="font-bold">{content.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveBanner;