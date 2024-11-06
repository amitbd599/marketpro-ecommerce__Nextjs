import HeaderOne from "@/components/HeaderOne";
import ColorInit from "@/helper/ColorInit";
import Preloader from "@/helper/Preloader";
import ScrollToTopInit from "@/helper/ScrollToTopInit";

export const metadata = {
  title: "Digital Market Place NEXT Js Template",
  description:
    "DpMarket – Digital Products Marketplace NEXT JS Template – A versatile and meticulously designed set of templates crafted to elevate your Digital Products Marketplace content and experiences.",
};

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* ScrollToTop */}
      <ScrollToTopInit />

      {/* ColorInit */}
      <ColorInit color={false} />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BannerOne */}
      {/* <BannerOne /> */}

      {/* FeatureOne */}
      {/* <FeatureOne /> */}

      {/* PromotionalOne */}
      {/* <PromotionalOne /> */}

      {/* FlashSalesOne */}
      {/* <FlashSalesOne /> */}

      {/* ProductListOne */}
      {/* <ProductListOne /> */}

      {/* OfferOne */}
      {/* <OfferOne /> */}

      {/* RecommendedOne */}
      {/* <RecommendedOne /> */}

      {/* HotDealsOne */}
      {/* <HotDealsOne /> */}

      {/* TopVendorsOne */}
      {/* <TopVendorsOne /> */}

      {/* BestSellsOne */}
      {/* <BestSellsOne /> */}

      {/* DeliveryOne */}
      {/* <DeliveryOne /> */}

      {/* OrganicOne */}
      {/* <OrganicOne /> */}

      {/* ShortProductOne */}
      {/* <ShortProductOne /> */}

      {/* BrandOne */}
      {/* <BrandOne /> */}

      {/* NewArrivalOne */}
      {/* <NewArrivalOne /> */}

      {/* ShippingOne */}
      {/* <ShippingOne /> */}

      {/* NewsletterOne */}
      {/* <NewsletterOne /> */}

      {/* FooterOne */}
      {/* <FooterOne /> */}

      {/* BottomFooter */}
      {/* <BottomFooter /> */}
    </>
  );
};

export default page;
