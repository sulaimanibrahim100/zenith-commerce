import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, CreditCard, Truck, Shield, Headphones } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const features = [
    { icon: Truck, title: 'Free Delivery', desc: 'On orders above ₦100k' },
    { icon: Shield, title: 'Secure Payment', desc: '100% secure checkout' },
    { icon: CreditCard, title: 'Easy Returns', desc: '7-day return policy' },
    { icon: Headphones, title: '24/7 Support', desc: 'Dedicated support' },
  ];

  return (
    <footer className="bg-foreground text-background mt-auto">
      {/* Features bar */}
      <div className="border-b border-background/10">
        <div className="container py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{feature.title}</h4>
                  <p className="text-xs text-background/60">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* About */}
          <div className="col-span-2 md:col-span-1">
            <img src={logo} alt="Clarity Tech" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-background/60 text-sm mb-4 leading-relaxed">
              Your one-stop shop for all tech products. Quality gadgets at affordable prices.
            </p>
            <div className="flex gap-2">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['All Products', 'Laptops', 'Phones', 'Gaming', 'Accessories'].map((link) => (
                <li key={link}>
                  <Link
                    to={`/products?category=${link.toLowerCase()}`}
                    className="text-background/60 hover:text-primary text-sm transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-sm mb-4">Customer Service</h3>
            <ul className="space-y-2">
              {['Help Center', 'Returns', 'Shipping Info', 'FAQs', 'Track Order'].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-background/60 hover:text-primary text-sm transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-background/60">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>123 Tech Street, Victoria Island, Lagos</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/60">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>0700 123 4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/60">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>support@claritytech.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/40 text-xs">
            © 2024 Clarity Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-background/40">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;