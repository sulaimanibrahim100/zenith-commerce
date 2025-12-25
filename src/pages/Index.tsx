import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LiveBanner from '@/components/home/LiveBanner';
import HeroSection from '@/components/home/HeroSection';
import TopCategories from '@/components/home/TopCategories';
import CategoryBanners from '@/components/home/CategoryBanners';
import FlashSales from '@/components/home/FlashSales';
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
      
      <main className="flex-1">
        <div className="container">
          {/* Top Categories Icons */}
          <TopCategories />
          
          {/* Category Banners Row */}
          <CategoryBanners />
          
          {/* Flash Sales */}
          <FlashSales />
          
          {/* Promo Banners */}
          <PromoBanners />
          
          {/* Hot Deals */}
          <HotDeals />
          
          {/* Trending Products */}
          <TrendingProducts />
          
          {/* Deals of the Day */}
          <DealsOfTheDay />
          
          {/* Featured Products Grid */}
          <FeaturedProducts />
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