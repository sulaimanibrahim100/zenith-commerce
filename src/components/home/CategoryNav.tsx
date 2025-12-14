import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const CategoryNav = () => {
  return (
    <section className="py-6">
      <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-hide">
        {categories.map((category, index) => (
          <Link
            key={category.id}
            to={`/products?category=${category.id}`}
            className="flex flex-col items-center gap-2 min-w-[80px] p-3 rounded-xl bg-card border border-border hover:border-primary hover:bg-accent transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <span className="text-3xl">{category.icon}</span>
            <span className="text-xs font-medium text-center whitespace-nowrap">{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryNav;
