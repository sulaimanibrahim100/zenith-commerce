import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, ChevronDown, Phone, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { categories } from '@/data/products';
import logo from '@/assets/logo.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

const categoryIcons: Record<string, string> = {
  laptops: '💻',
  desktops: '🖥️',
  phones: '📱',
  servers: '🗄️',
  printers: '🖨️',
  gaming: '🎮',
  accessories: '🖱️',
  monitors: '🖥️',
  networking: '📡',
  software: '💿',
  electronics: '🔌',
  cameras: '📷',
  cartridges: '🖨️',
  projectors: '📽️',
  furniture: '🪑',
};

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
    <header className="sticky top-0 z-50 bg-card shadow-md">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container py-1.5 flex items-center justify-between text-xs">
          <span className="hidden sm:block">Free delivery on orders over ₦50,000</span>
          <div className="flex items-center gap-4 ml-auto">
            <a href="tel:07001234567" className="flex items-center gap-1 hover:underline">
              <Phone className="h-3 w-3" />
              <span>0700 123 4567</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="border-b border-border bg-card">
        <div className="container py-3 md:py-4">
          <div className="flex items-center gap-3 md:gap-6">
            {/* Mobile menu trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="shrink-0 h-10 w-10 -ml-2">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[85vw] max-w-sm p-0 bg-card">
                <div className="flex flex-col h-full">
                  {/* Header with logo */}
                  <div className="p-4 border-b border-border flex items-center justify-between bg-secondary/30">
                    <img src={logo} alt="Clarity Tech" className="h-10 w-auto" />
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="h-9 w-9">
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </div>
                  
                  {/* Categories list */}
                  <div className="flex-1 overflow-y-auto">
                    <div className="p-4 pb-2">
                      <h3 className="font-bold text-sm text-muted-foreground uppercase tracking-wider">
                        CATEGORIES
                      </h3>
                    </div>
                    <div className="px-2 pb-4">
                      {categories.map((cat) => (
                        <Link
                          key={cat.id}
                          to={`/products?category=${cat.id}`}
                          className="flex items-center gap-4 px-4 py-3.5 hover:bg-secondary/50 transition-colors rounded-lg mx-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="text-xl">{categoryIcons[cat.id] || '📦'}</span>
                          <span className="font-medium text-foreground">{cat.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {/* Footer */}
                  <div className="p-4 border-t border-border bg-secondary/30">
                    <a href="tel:07001234567" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <Phone className="h-4 w-4" />
                      <span>Call: 0700 123 4567</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo - BIGGER */}
            <Link to="/" className="shrink-0">
              <img src={logo} alt="Clarity Tech" className="h-10 sm:h-12 md:h-14 w-auto" />
            </Link>

            {/* Search bar - Desktop */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl">
              <div className="flex w-full shadow-sm">
                <Input
                  type="text"
                  placeholder="Search products, brands and categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-r-none border-r-0 bg-secondary/50 focus-visible:ring-1 focus-visible:ring-primary h-11 text-sm"
                />
                <Button type="submit" className="rounded-l-none px-6 h-11 font-semibold">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </form>

            {/* Right side actions */}
            <div className="flex items-center gap-1 md:gap-2 ml-auto">
              {/* Account */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="hidden md:flex gap-2 h-10 px-4 text-sm font-medium">
                    <User className="h-5 w-5" />
                    <span>{user ? 'Account' : 'Sign In'}</span>
                    <ChevronDown className="h-4 w-4 opacity-60" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52 bg-card shadow-xl">
                  {user ? (
                    <>
                      <DropdownMenuItem className="font-semibold py-2.5">{user.name}</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild className="py-2.5">
                        <Link to="/orders">My Orders</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="py-2.5">
                        <Link to="/profile">Profile</Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={logout} className="text-destructive py-2.5">
                        Logout
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuItem asChild className="py-2.5">
                        <Link to="/auth">Sign In</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="py-2.5">
                        <Link to="/auth?mode=signup">Create Account</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Help - Desktop only */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="hidden lg:flex gap-2 h-10 px-4 text-sm font-medium">
                    <HelpCircle className="h-5 w-5" />
                    <span>Help</span>
                    <ChevronDown className="h-4 w-4 opacity-60" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-card shadow-xl">
                  <DropdownMenuItem className="py-2.5">Help Center</DropdownMenuItem>
                  <DropdownMenuItem className="py-2.5">Contact Us</DropdownMenuItem>
                  <DropdownMenuItem className="py-2.5">FAQs</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Cart */}
              <Link to="/cart">
                <Button variant="ghost" className="gap-2 h-10 px-3 md:px-4 relative font-medium">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="hidden md:inline">Cart</span>
                  {totalItems > 0 && (
                    <span className="absolute -top-1 left-5 md:left-auto md:-right-1 bg-primary text-primary-foreground text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md">
                      {totalItems > 9 ? '9+' : totalItems}
                    </span>
                  )}
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile search */}
          <form onSubmit={handleSearch} className="md:hidden mt-3">
            <div className="flex shadow-sm">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-r-none border-r-0 bg-secondary/50 h-10 text-sm"
              />
              <Button type="submit" className="rounded-l-none px-5 h-10">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Navbar;