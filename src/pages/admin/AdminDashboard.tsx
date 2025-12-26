import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import AdminHeader from '@/components/admin/AdminHeader';
import { Package, FolderTree, ShoppingCart, TrendingUp, ArrowRight } from 'lucide-react';

interface Stats {
  totalProducts: number;
  totalCategories: number;
  totalOrders: number;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<Stats>({
    totalProducts: 0,
    totalCategories: 0,
    totalOrders: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [productsSnap, categoriesSnap, ordersSnap] = await Promise.all([
          getDocs(collection(db, 'products')),
          getDocs(collection(db, 'categories')),
          getDocs(collection(db, 'orders')),
        ]);

        setStats({
          totalProducts: productsSnap.size,
          totalCategories: categoriesSnap.size,
          totalOrders: ordersSnap.size,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      icon: Package,
      label: 'Total Products',
      value: stats.totalProducts,
      color: 'bg-blue-500',
      link: '/admin/products',
    },
    {
      icon: FolderTree,
      label: 'Categories',
      value: stats.totalCategories,
      color: 'bg-green-500',
      link: '/admin/categories',
    },
    {
      icon: ShoppingCart,
      label: 'Total Orders',
      value: stats.totalOrders,
      color: 'bg-purple-500',
      link: '/admin/orders',
    },
    {
      icon: TrendingUp,
      label: 'Revenue',
      value: '₦0',
      color: 'bg-primary',
      link: '/admin',
    },
  ];

  return (
    <div className="min-h-screen">
      <AdminHeader title="Dashboard" />
      
      <div className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statCards.map((stat) => (
            <Link
              key={stat.label}
              to={stat.link}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all group"
            >
              <div className="flex items-start justify-between">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="mt-4">
                <p className="text-3xl font-bold text-foreground">
                  {loading ? '...' : stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              to="/admin/categories/new"
              className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <FolderTree className="h-5 w-5 text-primary" />
              <span className="font-medium">Add Category</span>
            </Link>
            <Link
              to="/admin/products/new"
              className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <Package className="h-5 w-5 text-primary" />
              <span className="font-medium">Add Product</span>
            </Link>
            <Link
              to="/"
              target="_blank"
              className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="font-medium">View Store</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
