import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const banners = [
  {
    id: 1,
    title: 'Gaming Laptops',
    discount: 'Up to 30% OFF',
    description: 'High-performance gaming',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600',
    link: '/products?category=laptops',
    gradient: 'from-purple-600 via-violet-600 to-indigo-600',
  },
  {
    id: 2,
    title: 'Smart Monitors',
    discount: 'Up to 60% OFF',
    description: '4K Ultra HD displays',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600',
    link: '/products?category=monitors',
    gradient: 'from-cyan-600 via-blue-600 to-indigo-600',
  },
];

const PromoBanners = () => {
  return (
    <section className="section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {banners.map((banner) => (
          <Link
            key={banner.id}
            to={banner.link}
            className={`bg-gradient-to-br ${banner.gradient} rounded-xl md:rounded-2xl overflow-hidden group relative`}
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative flex items-center justify-between p-4 md:p-6 h-[120px] md:h-[160px]">
              <div className="text-white space-y-1 z-10">
                <p className="text-xs md:text-sm font-semibold bg-white/20 backdrop-blur-sm rounded px-2 py-0.5 inline-block">
                  {banner.discount}
                </p>
                <h3 className="text-lg md:text-2xl font-bold">{banner.title}</h3>
                <p className="text-xs md:text-sm text-white/80">{banner.description}</p>
                <div className="flex items-center gap-1 text-xs md:text-sm font-medium group-hover:gap-2 transition-all pt-1">
                  Shop Now
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
              <img
                src={banner.image}
                alt={banner.title}
                className="h-[80px] md:h-[120px] object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-xl"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PromoBanners;