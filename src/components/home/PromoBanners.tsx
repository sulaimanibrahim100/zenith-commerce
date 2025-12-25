import { Link } from 'react-router-dom';

const banners = [
  {
    id: 1,
    title: 'Gaming Consoles',
    subtitle: 'PS5, Xbox & Nintendo',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600',
    link: '/products?category=gaming',
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 2,
    title: 'Work From Home',
    subtitle: 'Laptops & Accessories',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600',
    link: '/products?category=laptops',
    color: 'from-slate-600 to-slate-800',
  },
];

const PromoBanners = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
      {banners.map((banner) => (
        <Link
          key={banner.id}
          to={banner.link}
          className="relative rounded shadow-sm overflow-hidden group h-[100px] sm:h-[120px]"
        >
          <img
            src={banner.image}
            alt={banner.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${banner.color} opacity-80`} />
          <div className="absolute inset-0 flex flex-col justify-center px-4 text-white">
            <h3 className="text-sm sm:text-base font-semibold">{banner.title}</h3>
            <p className="text-xs opacity-90">{banner.subtitle}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PromoBanners;