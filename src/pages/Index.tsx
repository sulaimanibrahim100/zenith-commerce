import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LiveBanner from '@/components/home/LiveBanner';
import CategorySlider from '@/components/home/CategorySlider';
import DeliveryLocation from '@/components/home/DeliveryLocation';
import HeroCarousel from '@/components/home/HeroCarousel';
import HotDeals from '@/components/home/HotDeals';
import TrendingProducts from '@/components/home/TrendingProducts';
import PromoBanners from '@/components/home/PromoBanners';
import TopCategories from '@/components/home/TopCategories';
import ShopCarousel from '@/components/home/ShopCarousel';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navbar with top bar */}
      <Navbar />
      
      {/* Category Slider */}
      <CategorySlider />
      
      {/* Delivery Location */}
      <DeliveryLocation />
      
      <main className="flex-1">
        <div className="container py-4 md:py-6">
          {/* Hero Carousel */}
          <HeroCarousel />
          
          {/* Live Banner */}
          <div className="my-5 md:my-8">
            <LiveBanner variant="primary" className="rounded-xl" />
          </div>
          
          {/* Hot Deals */}
          <HotDeals />
          
          {/* Trending Products */}
          <TrendingProducts />
          
          {/* Promo Banners */}
          <PromoBanners />
          
          {/* Top Categories */}
          <TopCategories />
        </div>
        
        {/* Shop Carousel - Full width outside container */}
        <ShopCarousel />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;