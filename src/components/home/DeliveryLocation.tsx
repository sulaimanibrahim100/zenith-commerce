import { MapPin, ChevronDown } from 'lucide-react';

const DeliveryLocation = () => {
  return (
    <div className="bg-secondary/50 border-b border-border">
      <div className="container py-1.5">
        <button className="flex items-center gap-1.5 text-xs md:text-sm group">
          <MapPin className="h-3.5 w-3.5 text-primary" />
          <span className="text-muted-foreground">Deliver to</span>
          <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
            Lagos, Nigeria
          </span>
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};

export default DeliveryLocation;