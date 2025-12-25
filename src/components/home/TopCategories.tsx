import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { 
  Laptop, 
  Monitor, 
  Smartphone, 
  Server, 
  Printer, 
  Gamepad2, 
  Mouse, 
  Wifi,
  Disc,
  Tv,
  Camera,
  Armchair
} from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  laptops: <Laptop className="h-6 w-6" />,
  desktops: <Monitor className="h-6 w-6" />,
  phones: <Smartphone className="h-6 w-6" />,
  servers: <Server className="h-6 w-6" />,
  printers: <Printer className="h-6 w-6" />,
  gaming: <Gamepad2 className="h-6 w-6" />,
  accessories: <Mouse className="h-6 w-6" />,
  monitors: <Monitor className="h-6 w-6" />,
  networking: <Wifi className="h-6 w-6" />,
  software: <Disc className="h-6 w-6" />,
  electronics: <Tv className="h-6 w-6" />,
  'smart-home': <Camera className="h-6 w-6" />,
  furniture: <Armchair className="h-6 w-6" />,
};

const TopCategories = () => {
  return (
    <div className="bg-card rounded shadow-sm p-3 mb-3">
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1 -mx-3 px-3">
        {categories.slice(0, 10).map((category) => (
          <Link
            key={category.id}
            to={`/products?category=${category.id}`}
            className="flex-shrink-0 flex flex-col items-center gap-1.5 group min-w-[70px]"
          >
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              {categoryIcons[category.id] || <Monitor className="h-6 w-6" />}
            </div>
            <span className="text-[10px] sm:text-xs text-center font-medium text-foreground line-clamp-2 max-w-[70px]">
              {category.name.split(' ')[0]}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;