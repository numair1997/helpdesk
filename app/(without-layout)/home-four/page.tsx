import Header from "@/components/global/Header";
import FooterThree from "@/components/global/footer/FooterThree";
import GetWorker from "@/components/homeFour/GetWorker";
import HeroSection from "@/components/homeFour/HeroSection";
import Testimonial from "@/components/homeFour/Testimonial";
import FixedPriceService2 from "@/components/homeOne/FixedPriceService2";
import GetHelpToday from "@/components/homeOne/GetHelpToday";
import NewsLetter from "@/components/homeOne/NewsLetter";
import RecentPosts from "@/components/homeOne/RecentPosts";
import SecureGuard from "@/components/homeOne/SecureGuard";
import TopExperts from "@/components/homeOne/TopExperts";
import HowItWorks from "@/components/homeThree/HowItWorks";

function page() {
  return (
    <>
      <Header />
      <HeroSection />
      <HowItWorks />
      <TopExperts isBgGray={true} />
      <FixedPriceService2 isBgWhite={true} />
      <NewsLetter />
      <SecureGuard />
      <Testimonial />
      <RecentPosts />
      <GetWorker />
      <GetHelpToday />
      <FooterThree />
    </>
  );
}

export default page;
