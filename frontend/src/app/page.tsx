import BannerSlider from "@/components/homePage/BannerSlider";
import BestSeller from "@/components/homePage/BestSeller";
import Categories from "@/components/homePage/Categories";
import Hero from "@/components/homePage/Hero";
import NewArrivals from "@/components/homePage/NewArrivals";
import Policies from "@/components/homePage/Policies";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <Hero />
      {/* Categories  */}
      <Categories />
      {/* Best Sellers of the Month  */}
      <BestSeller />
      {/* Banner Slider  */}
      <BannerSlider />
      {/* New Arrivals */}
      <NewArrivals />
      {/* Policies */}
      <Policies />
    </div>
  );
}
