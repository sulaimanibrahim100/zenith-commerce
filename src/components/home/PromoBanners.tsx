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
    bg: 'bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-700',
  },
  {
    id: 2,
    title: 'Smart Monitors',
    discount: 'Up to 60% OFF',
    description: '4K Ultra HD displays',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600',
    link: '/products?category=monitors',
    bg: 'bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700',
  },
];

const PromoBanners = () => {
  return (
    <section className="section-spacing">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
        {banners.map((banner) => (
          <Link
            key={banner.id}
            to={banner.link}
            className={`${banner.bg} rounded-2xl overflow-hidden group relative shadow-lg hover:shadow-2xl transition-shadow duration-300`}
          >
            <div className="absolute inset-0 bg-black/5" />
            <div className="relative flex items-center justify-between p-4 sm:p-5 md:p-6 h-[130px] sm:h-[150px] md:h-[180px]">
              <div className="text-white space-y-1.5 md:space-y-2 z-10">
                <span className="inline-block text-[10px] sm:text-xs md:text-sm font-bold bg-white/25 backdrop-blur-sm rounded-full px-3 py-1">
                  {banner.discount}
                </span>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">{banner.title}</h3>
                <p className="text-xs sm:text-sm text-white/80">{banner.description}</p>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold group-hover:gap-3 transition-all pt-1">
                  Shop Now
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
              <img
                src={banner.image}
                alt={banner.title}
                className="h-[70px] sm:h-[90px] md:h-[130px] object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PromoBanners;