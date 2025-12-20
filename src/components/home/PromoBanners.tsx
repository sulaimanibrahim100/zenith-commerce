import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const banners = [
  {
    id: 1,
    title: 'Up to 30% Off',
    subtitle: 'Premium Laptops',
    description: 'MacBook, Dell XPS & more',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600',
    link: '/products?category=laptops',
    bg: 'bg-gradient-to-r from-slate-800 to-slate-700',
  },
  {
    id: 2,
    title: 'Up to 60% Off',
    subtitle: 'Gaming Accessories',
    description: 'Controllers, headsets & more',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600',
    link: '/products?category=gaming',
    bg: 'bg-gradient-to-r from-violet-800 to-purple-700',
  },
];

const PromoBanners = () => {
  return (
    <section className="section-spacing">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {banners.map((banner) => (
          <Link
            key={banner.id}
            to={banner.link}
            className={`${banner.bg} rounded-lg overflow-hidden group`}
          >
            <div className="flex items-center justify-between p-4 sm:p-6">
              <div className="text-white space-y-1">
                <p className="text-xs text-white/70 font-medium">{banner.subtitle}</p>
                <h3 className="text-lg sm:text-xl font-bold">{banner.title}</h3>
                <p className="text-xs text-white/80">{banner.description}</p>
                <Button 
                  size="sm" 
                  variant="secondary"
                  className="mt-2 h-7 text-xs gap-1 bg-white/20 hover:bg-white/30 text-white border-0"
                >
                  Shop Now
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </div>
              <img
                src={banner.image}
                alt={banner.title}
                className="h-20 sm:h-28 w-auto object-contain"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PromoBanners;
