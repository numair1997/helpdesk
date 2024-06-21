import Header from "@/components/home-page-components/Header";
import HeroSection from "@/components/home-page-components/HeroSection";
import HowItWorks from "@/components/home-page-components/HowItWorks";
import SecureGuard from "@/components/home-page-components/SecureGuard";
import CategorySlider from "@/components/home-page-components/category-slider";
import FAQ from "@/components/home-page-components/faq";
import SubscriptionPlan from "@/components/home-page-components/subscription-plan";
import VideoTutorials from "@/components/home-page-components/video-tutorials";

function page() {

  return (
    <>
      <Header />
      <HeroSection />
      <CategorySlider />
      <HowItWorks />
      {/* <TopExperts isBgGray={true} />
      <FixedPriceService2 isBgWhite={true} />
      <NewsLetter /> */}
      {/* <Testimonial />  */}
      <VideoTutorials />
      <FAQ />
      <SecureGuard />
      <SubscriptionPlan />
      {/* <GetWorker />
      <GetHelpToday />
      <FooterThree />  */}
    </>
  );
}

export default page;
