import Header from "@/components/home-page-components/Header";
import HeroSection from "@/components/home-page-components/HeroSection";
import HowItWorks from "@/components/home-page-components/HowItWorks";
import RecentPosts from "@/components/home-page-components/RecentPosts";
import CategorySlider from "@/components/home-page-components/category-slider";
import FAQ from "@/components/home-page-components/faq";

function page() {

  return (
    <>
      <Header />
      <HeroSection />
      <CategorySlider />
      <HowItWorks />
      {/* <TopExperts isBgGray={true} />
      <FixedPriceService2 isBgWhite={true} />
      <NewsLetter />
      <SecureGuard />
      <Testimonial /> */}
      <RecentPosts />
      <FAQ />
      {/* <GetWorker />
      <GetHelpToday />
      <FooterThree />  */}
    </>
  );
}

export default page;
