import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, HelpCircle, ChevronDown, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { categories } from '@/data/products';
import logo from '@/assets/logo.png';
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
    <header className="sticky top-0 z-50">
      {/* Top bar - Secondary nav */}
      <div className="bg-muted/50 border-b border-border py-1.5 hidden md:block">
        <div className="container flex items-center justify-between text-xs">
          <span className="text-primary font-medium cursor-pointer hover:underline">
            Sell on Clarity Tech
          </span>
          <div className="flex items-center gap-6 text-muted-foreground">
            <span className="font-semibold text-foreground">CLARITY TECH</span>
            <span>Pay</span>
            <span>Delivery</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-background border-b border-border shadow-sm">
        <div className="container py-3">
          <div className="flex items-center gap-4">
            {/* Mobile menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 bg-background">
                <div className="flex flex-col gap-4 mt-8">
                  <h3 className="font-semibold text-lg">Categories</h3>
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/products?category=${cat.id}`}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-xl">{cat.icon}</span>
                      <span className="text-sm">{cat.name}</span>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <img src={logo} alt="Clarity Tech" className="h-10 w-auto" />
            </Link>

            {/* Search bar */}
            <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
              <div className="flex">
                <Input
                  type="text"
                  placeholder="Search products, brands and categories"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-r-none border-r-0 bg-background focus-visible:ring-0 focus-visible:ring-offset-0 border-2 border-primary/20 focus:border-primary"
                />
                <Button
                  type="submit"
                  className="rounded-l-none px-6"
                >
                  Search
                </Button>
              </div>
            </form>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="gap-2 text-sm">
                      <User className="h-5 w-5" />
                      <span>Account</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48 bg-background">
                    <DropdownMenuItem className="font-medium">{user.name}</DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/orders">My Orders</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant="ghost" asChild className="gap-2 text-sm">
                  <Link to="/auth">
                    <User className="h-5 w-5" />
                    <span>Account</span>
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                </Button>
              )}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-2 text-sm">
                    <HelpCircle className="h-5 w-5" />
                    <span>Help</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background">
                  <DropdownMenuItem>Help Center</DropdownMenuItem>
                  <DropdownMenuItem>Contact Us</DropdownMenuItem>
                  <DropdownMenuItem>FAQs</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Cart */}
              <Link to="/cart">
                <Button variant="ghost" className="gap-2 text-sm relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Cart</span>
                  {totalItems > 0 && (
                    <span className="absolute -top-1 left-4 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </Link>
            </nav>

            {/* Mobile cart */}
            <Link to="/cart" className="lg:hidden relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
