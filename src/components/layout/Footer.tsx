import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-auto">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <img src={logo} alt="Clarity Tech" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-background/70 text-sm mb-4">
              Your one-stop shop for all tech products. Quality gadgets at affordable prices with nationwide delivery.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-background/70 hover:text-primary text-sm transition-colors">All Products</Link></li>
              <li><Link to="/products?category=laptops" className="text-background/70 hover:text-primary text-sm transition-colors">Laptops</Link></li>
              <li><Link to="/products?category=phones" className="text-background/70 hover:text-primary text-sm transition-colors">Phones & Tablets</Link></li>
              <li><Link to="/products?category=gaming" className="text-background/70 hover:text-primary text-sm transition-colors">Gaming</Link></li>
              <li><Link to="/products?category=accessories" className="text-background/70 hover:text-primary text-sm transition-colors">Accessories</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-background/70 hover:text-primary text-sm transition-colors">Help Center</Link></li>
              <li><Link to="/returns" className="text-background/70 hover:text-primary text-sm transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/shipping" className="text-background/70 hover:text-primary text-sm transition-colors">Shipping Info</Link></li>
              <li><Link to="/faq" className="text-background/70 hover:text-primary text-sm transition-colors">FAQs</Link></li>
              <li><Link to="/track-order" className="text-background/70 hover:text-primary text-sm transition-colors">Track Order</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>123 Tech Street, Victoria Island, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>0700 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>support@claritytech.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © 2024 Clarity Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-background/50">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
