import ShopNavbar from "@/components/ShopNavbar";
import ShopHero from "@/components/ShopHero";
import CategoryGrid from "@/components/CategoryGrid";
import ProductGrid from "@/components/ProductGrid";
import DeliveryBanner from "@/components/DeliveryBanner";
import ShopFooter from "@/components/ShopFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ShopNavbar />
      <ShopHero />
      <CategoryGrid />
      <ProductGrid />
      <DeliveryBanner />
      <ShopFooter />
    </div>
  );
};

export default Index;
