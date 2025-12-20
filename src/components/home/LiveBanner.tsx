import { cn } from '@/lib/utils';

interface LiveBannerProps {
  variant?: 'primary' | 'secondary';
  className?: string;
}

const LiveBanner = ({ variant = 'primary', className }: LiveBannerProps) => {
  const isPrimary = variant === 'primary';
  
  const messages = isPrimary 
    ? [
        '🔥 Free Delivery on orders above ₦100,000',
        '✨ Fast & Secure Payment',
        '🛡️ 7-Day Returns Policy',
        '💯 100% Original Products',
        '🚚 Nationwide Delivery',
      ]
    : [
        '⚡ Flash Sale Live Now',
        '🏷️ Up to 50% Off Selected Items',
        '⏰ Limited Stock Available',
        '💰 Best Prices Guaranteed',
        '🎁 Free Gifts on Select Orders',
      ];

  return (
    <div className={cn(
      isPrimary ? 'bg-primary' : 'bg-foreground',
      'text-primary-foreground py-2 overflow-hidden',
      className
    )}>
      <div className="relative flex">
        <div className="animate-marquee flex gap-8 whitespace-nowrap">
          {messages.map((msg, i) => (
            <span key={i} className="text-xs sm:text-sm font-medium px-4">
              {msg}
            </span>
          ))}
          {messages.map((msg, i) => (
            <span key={`dup-${i}`} className="text-xs sm:text-sm font-medium px-4">
              {msg}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveBanner;
