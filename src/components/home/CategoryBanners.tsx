import { Link } from 'react-router-dom';

const banners = [
  {
    id: 1,
    title: 'Awoof Deals',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400',
    link: '/products?filter=deals',
    bg: 'bg-gradient-to-br from-orange-500 to-red-500',
  },
  {
    id: 2,
    title: 'Clearance Sales',
    subtitle: 'Up to 80% Off',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
    link: '/products?filter=clearance',
    bg: 'bg-gradient-to-br from-green-500 to-emerald-600',
  },
  {
    id: 3,
    title: 'Phones & Tablets',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    link: '/products?category=phones',
    bg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
  },
  {
    id: 4,
    title: 'Buy 2 Pay for 1',
    image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=400',
    link: '/products?promo=b2g1',
    bg: 'bg-gradient-to-br from-pink-500 to-rose-500',
  },
  {
    id: 5,
    title: 'Electronics',
    image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400',
    link: '/products?category=electronics',
    bg: 'bg-gradient-to-br from-purple-500 to-violet-600',
  },
  {
    id: 6,
    title: 'Gaming',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400',
    link: '/products?category=gaming',
    bg: 'bg-gradient-to-br from-cyan-500 to-blue-600',
  },
  {
    id: 7,
    title: 'Laptops',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
    link: '/products?category=laptops',
    bg: 'bg-gradient-to-br from-gray-600 to-gray-800',
  },
  {
    id: 8,
    title: 'Accessories',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
    link: '/products?category=accessories',
    bg: 'bg-gradient-to-br from-amber-500 to-orange-600',
  },
];

const CategoryBanners = () => {
  return (
    <div className="bg-card rounded shadow-sm p-2 mb-3">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 -mx-2 px-2">
        {banners.map((banner) => (
          <Link
            key={banner.id}
            to={banner.link}
            className="flex-shrink-0 w-[100px] sm:w-[120px] group"
          >
            <div className="relative aspect-square rounded overflow-hidden">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            </div>
            <p className="text-[11px] text-center font-medium text-foreground mt-1.5 line-clamp-2">
              {banner.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryBanners;