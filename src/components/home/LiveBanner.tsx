import { cn } from '@/lib/utils';

interface LiveBannerProps {
  variant?: 'primary' | 'secondary';
  className?: string;
}

const LiveBanner = ({ variant = 'primary', className }: LiveBannerProps) => {
  const content = variant === 'primary' 
    ? { text: '🔥 Free Delivery on orders above ₦100,000 • Fast & Secure Payment • 7-Day Returns', bg: 'bg-primary' }
    : { text: '⚡ Flash Sale Live Now • Up to 50% Off Selected Items • Limited Stock Available', bg: 'bg-foreground' };

  return (
    <div className={cn(
      content.bg,
      'text-primary-foreground py-2 px-4 text-center overflow-hidden',
      className
    )}>
      <p className="text-xs sm:text-sm font-medium whitespace-nowrap animate-pulse">
        {content.text}
      </p>
    </div>
  );
};

export default LiveBanner;
