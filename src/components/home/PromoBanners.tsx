import { Link } from 'react-router-dom';

const banners = [
  {
    id: 1,
    title: 'Gaming Laptops',
    discount: 'Up to 30% OFF',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600',
    link: '/products?category=laptops',
    bgColor: 'bg-gradient-to-r from-purple-600 to-purple-400',
  },
  {
    id: 2,
    title: 'Smart Monitors',
    discount: 'Up to 60% OFF',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600',
    link: '/products?category=monitors',
    bgColor: 'bg-gradient-to-r from-blue-600 to-cyan-400',
  },
];

const PromoBanners = () => {
  return (
    <section className="py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {banners.map((banner) => (
          <Link
            key={banner.id}
            to={banner.link}
            className={`${banner.bgColor} rounded-xl overflow-hidden group`}
          >
            <div className="flex items-center justify-between p-6 h-[160px] md:h-[180px]">
              <div className="text-white space-y-2">
                <p className="text-sm font-medium opacity-90">{banner.discount}</p>
                <h3 className="text-2xl md:text-3xl font-bold">{banner.title}</h3>
                <p className="text-sm underline underline-offset-2 group-hover:opacity-80 transition-opacity">
                  Shop Now →
                </p>
              </div>
              <img
                src={banner.image}
                alt={banner.title}
                className="h-[120px] md:h-[140px] object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PromoBanners;
