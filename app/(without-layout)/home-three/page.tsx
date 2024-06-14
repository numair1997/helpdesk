import Header from "@/components/global/Header";
import FooterOne from "@/components/global/footer/FooterOne";
import FixedPriceService from "@/components/homeOne/FixedPriceService";
import GetHelpToday from "@/components/homeOne/GetHelpToday";
import GetWorkersGigs from "@/components/homeOne/GetWorkersGigs";
import NewsLetter from "@/components/homeOne/NewsLetter";
import RecentPosts from "@/components/homeOne/RecentPosts";
import SecureGuard from "@/components/homeOne/SecureGuard";
import ExploreCategory from "@/components/homeThree/ExploreCategory";
import Hero from "@/components/homeThree/Hero";
import HowItWorks from "@/components/homeThree/HowItWorks";
import Testimonial from "@/components/homeThree/Testimonial";
import TopExperts from "@/components/homeThree/TopExperts";

function page() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <ExploreCategory />
      <SecureGuard />
      <TopExperts />
      <FixedPriceService />
      <NewsLetter />
      <Testimonial />
      <RecentPosts isBgWhite={true} />
      <GetWorkersGigs />
      <GetHelpToday />
      <FooterOne />
    </>
  );
}

export default page;
