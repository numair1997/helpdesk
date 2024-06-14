import Header from "@/components/global/Header";
import FooterTwo from "@/components/global/footer/FooterTwo";
import FixedPriceService2 from "@/components/homeOne/FixedPriceService2";
import GetWorkersGigs from "@/components/homeOne/GetWorkersGigs";
import NewsLetter from "@/components/homeOne/NewsLetter";
import SecureGuard from "@/components/homeOne/SecureGuard";
import CompanyFeatures from "@/components/homeTwo/CompanyFeatures";
import HeroSection from "@/components/homeTwo/HeroSection";
import HowItWorks from "@/components/homeTwo/HowItWorks";
import ProfessionalWorkers from "@/components/homeTwo/ProfessionalWorkers";
import RecentPosts from "@/components/homeTwo/RecentPosts";
import Testimonials from "@/components/homeTwo/Testimonials";

function page() {
  return (
    <>
      <Header />
      <HeroSection />
      <CompanyFeatures />
      <ProfessionalWorkers />
      <HowItWorks />
      <FixedPriceService2 isBgWhite={true} />
      <SecureGuard isBgGray={true} />
      <NewsLetter />
      <Testimonials />
      <GetWorkersGigs isHeadingBig={true} />
      <RecentPosts />
      <FooterTwo />
    </>
  );
}

export default page;
