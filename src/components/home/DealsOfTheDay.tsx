import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const deals = [
  {
    id: 1,
    title: 'Gaming Consoles',
    subtitle: 'PlayStation & Xbox on Sale',
    discount: 'Up to 15% OFF',
    link: '/products?category=gaming',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600',
    bg: 'from-purple-600 to-blue-600',
  },
  {
    id: 2,
    title: 'Beauty Essentials',
    subtitle: 'Skincare & Makeup',
    discount: 'Up to 35% OFF',
    link: '/products?category=beauty',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600',
    bg: 'from-pink-500 to-rose-500',
  },
  {
    id: 3,
    title: 'Home & Living',
    subtitle: 'Furniture & Decor',
    discount: 'Up to 25% OFF',
    link: '/products?category=home',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600',
    bg: 'from-amber-500 to-orange-500',
  },
];

const DealsOfTheDay = () => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">Deals of the Day</h2>
      
      <div className="grid md:grid-cols-3 gap-4">
        {deals.map((deal, index) => (
          <Link
            key={deal.id}
            to={deal.link}
            className="group relative overflow-hidden rounded-2xl h-[200px] animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${deal.bg}`} />
            <img
              src={deal.image}
              alt={deal.title}
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 group-hover:scale-110 transition-transform duration-500"
            />
            <div className="relative h-full flex flex-col justify-end p-6 text-white">
              <span className="text-sm font-semibold bg-white/20 backdrop-blur-sm px-2 py-1 rounded w-fit mb-2">
                {deal.discount}
              </span>
              <h3 className="text-xl font-bold">{deal.title}</h3>
              <p className="text-white/80 text-sm">{deal.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DealsOfTheDay;
