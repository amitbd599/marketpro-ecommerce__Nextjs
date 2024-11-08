import BreadcrumbTwo from "@/components/BreadcrumbTwo";
import HeaderOne from "@/components/HeaderOne";
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
      <ColorInit color={false} />

      {/* ScrollToTop */}
      <ScrollToTopInit />

      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderOne />

      {/* Breadcrumb */}
      <BreadcrumbTwo title={"Product Details"} />
    </>
  );
};

export default page;