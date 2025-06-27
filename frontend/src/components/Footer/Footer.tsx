import BottomFooter from "./BottomFooter";
import FindUs from "./FindUs";
import HigaloSite from "./HigaloSite";
import QuickLinks from "./QuickLinks";
import ShopByCategory from "./ShopByCategories";
import StayConnected from "./StayConnected";

export default function Footer() {
  return (
    <div className="flex flex-col">
      <div className=" px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-20 grid grid-cols-1 lg:grid-cols-4 gap-5 bg-darkBlue mt-8">
        <ShopByCategory />
        <div className="grid grid-cols-1 lg:col-span-1 md:grid-cols-2 gap-5">
          <QuickLinks />
          <HigaloSite />
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-col lg:col-span-1 gap-5">
          <FindUs />
          <StayConnected />
        </div>
      </div>
      <BottomFooter />
    </div>
  );
}
