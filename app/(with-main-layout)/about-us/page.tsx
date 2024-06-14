import AboutSection from "@/components/aboutUs/AboutSection";
import BreadCrumb from "@/components/aboutUs/BreadCrumb";
import FaqSection from "@/components/aboutUs/FaqSection";
import HowServibeWork from "@/components/aboutUs/HowServibeWork";
import TopExperts from "@/components/homeOne/TopExperts";
import Testimonial from "@/components/homeThree/Testimonial";

function page() {
  return (
    <>
      <BreadCrumb />
      <AboutSection />
      <HowServibeWork />
      <TopExperts isThree={true} />
      <Testimonial />
      <FaqSection />
    </>
  );
}

export default page;
