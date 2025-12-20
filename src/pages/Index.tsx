import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LiveBanner from '@/components/home/LiveBanner';
import HeroSection from '@/components/home/HeroSection';
import TopCategories from '@/components/home/TopCategories';
import HotDeals from '@/components/home/HotDeals';
import TrendingProducts from '@/components/home/TrendingProducts';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import DealsOfTheDay from '@/components/home/DealsOfTheDay';
import PromoBanners from '@/components/home/PromoBanners';
import ShopCarousel from '@/components/home/ShopCarousel';
import AboutSection from '@/components/home/AboutSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Live Banner */}
      <LiveBanner variant="primary" />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Hero with Categories */}
      <HeroSection />
      
      {/* Top Categories - Right below hero */}
      <div className="container">
        <TopCategories />
      </div>
      
      <main className="flex-1">
        <div className="container">
          {/* Live Banner */}
          <LiveBanner variant="secondary" className="rounded-lg my-4" />
          
          {/* Hot Deals */}
          <HotDeals />
          
          {/* Trending Products */}
          <TrendingProducts />
          
          {/* Promo Banners */}
          <PromoBanners />
          
          {/* Featured Products */}
          <FeaturedProducts />
          
          {/* Deals of the Day */}
          <DealsOfTheDay />
        </div>
        
        {/* Shop Carousel */}
        <ShopCarousel />
        
        {/* About Section - Before Footer */}
        <AboutSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
