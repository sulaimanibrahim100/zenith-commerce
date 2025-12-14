import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { categories } from '@/data/products';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      {/* Top promotional banner */}
      <div className="bg-gradient-primary text-primary-foreground py-2 overflow-hidden">
        <div className="animate-slide-banner whitespace-nowrap flex gap-16">
          <span className="text-sm font-medium">🔥 Flash Sale! Up to 50% OFF on selected items</span>
          <span className="text-sm font-medium">🚚 Free delivery on orders above ₦50,000</span>
          <span className="text-sm font-medium">💳 Pay with Paystack or Bank Transfer</span>
          <span className="text-sm font-medium">🔥 Flash Sale! Up to 50% OFF on selected items</span>
          <span className="text-sm font-medium">🚚 Free delivery on orders above ₦50,000</span>
          <span className="text-sm font-medium">💳 Pay with Paystack or Bank Transfer</span>
        </div>
      </div>

      <div className="container py-3">
        <div className="flex items-center gap-4">
          {/* Mobile menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <div className="flex flex-col gap-4 mt-8">
                <h3 className="font-semibold text-lg">Categories</h3>
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/products?category=${cat.id}`}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-2xl">{cat.icon}</span>
                    <span>{cat.name}</span>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">M</span>
            </div>
            <span className="hidden sm:block font-bold text-xl text-foreground">Marketplace</span>
          </Link>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search products, brands and categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12 bg-secondary border-none focus-visible:ring-primary"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1">
                  Categories <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {categories.map((cat) => (
                  <DropdownMenuItem key={cat.id} asChild>
                    <Link to={`/products?category=${cat.id}`} className="flex items-center gap-2">
                      <span>{cat.icon}</span>
                      <span>{cat.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-2">
                    <User className="h-5 w-5" />
                    <span className="hidden xl:inline">{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/orders">My Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="ghost" asChild className="gap-2">
                <Link to="/auth">
                  <User className="h-5 w-5" />
                  <span className="hidden xl:inline">Account</span>
                </Link>
              </Button>
            )}
          </nav>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce-in">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
