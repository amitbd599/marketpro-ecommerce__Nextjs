import BannerThree from "@/components/BannerThree";
import HeaderThree from "@/components/HeaderThree";
import ColorInit from "@/helper/ColorInit";
import Preloader from "@/helper/Preloader";
import ScrollToTopInit from "@/helper/ScrollToTopInit";

export const metadata = {
  title: "MarketPro - E-commerce Next JS Template",
  description:
    "MarketPro is a comprehensive and versatile Next JS template designed for e-commerce platforms, specifically tailored for multi vendor marketplaces. With its modern design and extensive feature set, MarketPro provides everything you need to create a robust and user-friendly online marketplace..",
};

const page = () => {
  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTopInit />

      {/* Preloader */}
      <Preloader />

      {/* HeaderThree */}
      <HeaderThree />

      {/* BannerThree */}
      <BannerThree />
    </>
  );
};

export default page;
