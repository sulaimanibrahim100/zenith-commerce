import { useState, useEffect } from 'react';

interface LiveBannerProps {
  variant?: 'primary' | 'secondary' | 'success';
  className?: string;
}

const bannerContent = [
  {
    title: 'MEGA TECH SALE',
    subtitle: 'LIVE NOW',
    description: 'Up to 50% OFF on Laptops & Phones',
    phone: '0700 123 4567',
  },
  {
    title: 'FREE DELIVERY',
    subtitle: 'LIMITED TIME',
    description: 'On orders above ₦100,000',
    phone: '0700 123 4567',
  },
  {
    title: 'NEW ARRIVALS',
    subtitle: 'SHOP NOW',
    description: 'Latest MacBooks & iPhones in stock',
    phone: '0700 123 4567',
  },
];

const LiveBanner = ({ variant = 'primary', className = '' }: LiveBannerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const content = bannerContent[currentIndex];

  const bgColors = {
    primary: 'bg-gradient-to-r from-emerald-600 via-emerald-500 to-orange-500',
    secondary: 'bg-gradient-to-r from-primary via-primary to-orange-500',
    success: 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500',
  };

  return (
    <div className={`${bgColors[variant]} text-white py-2.5 ${className}`}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎄</span>
              <span className="font-bold text-lg md:text-xl tracking-wide animate-pulse">
                {content.title}
              </span>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-1.5 rounded text-sm transition-colors">
              {content.subtitle}
            </button>
            <span className="hidden md:block text-sm font-medium">
              {content.description}
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-sm">
            <span>Call to order</span>
            <span className="font-bold text-lg">{content.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveBanner;
