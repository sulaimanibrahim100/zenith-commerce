import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroCarousel from '@/components/home/HeroCarousel';
import CategoryNav from '@/components/home/CategoryNav';
import FlashSales from '@/components/home/FlashSales';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import DealsOfTheDay from '@/components/home/DealsOfTheDay';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-6">
          <HeroCarousel />
          <CategoryNav />
          <FlashSales />
          <DealsOfTheDay />
          <FeaturedProducts />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
