import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">M</span>
              </div>
              <span className="font-bold text-xl">Marketplace</span>
            </div>
            <p className="text-background/70 text-sm mb-4">
              Your one-stop shop for all your needs. Quality products, amazing prices, and fast delivery.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-background/70 hover:text-primary transition-colors text-sm">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=phones" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Phones & Tablets
                </Link>
              </li>
              <li>
                <Link to="/products?category=electronics" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/products?category=fashion" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Fashion
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Payment Methods
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+234 800 123 4567</span>
              </li>
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@marketplace.com</span>
              </li>
              <li className="flex items-start gap-2 text-background/70 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>123 Commerce Street, Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Marketplace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
