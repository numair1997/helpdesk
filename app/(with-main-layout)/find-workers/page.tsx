import FaqSection from "@/components/aboutUs/FaqSection";
import BreadCrumb from "@/components/global/BreadCrumb";
import NewsLetter from "@/components/homeOne/NewsLetter";
import WorkersList from "@/components/workers/WorkersList";

function page() {
  return (
    <>
      <BreadCrumb pageName="Find Workers" />

      <WorkersList />

      <NewsLetter />
      <FaqSection />
    </>
  );
}

export default page;
