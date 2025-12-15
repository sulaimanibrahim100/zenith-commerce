import { MapPin } from 'lucide-react';

const DeliveryLocation = () => {
  return (
    <div className="bg-muted/30 py-2 border-b border-border">
      <div className="container">
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="text-muted-foreground">Deliver to</span>
          <button className="font-medium text-foreground hover:text-primary transition-colors underline underline-offset-2">
            Lagos, Nigeria
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryLocation;
