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

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Live Banner - Top */}
      <LiveBanner variant="primary" />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Category Slider */}
      <CategorySlider />
      
      {/* Delivery Location */}
      <DeliveryLocation />
      
      <main className="flex-1">
        <div className="container py-3 md:py-4">
          {/* Hero Carousel */}
          <HeroCarousel />
          
          {/* Second Live Banner */}
          <div className="my-4 md:my-6">
            <LiveBanner variant="secondary" className="rounded-xl" />
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;