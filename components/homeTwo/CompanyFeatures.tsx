import { PiArrowRightBold } from "react-icons/pi";
import { companyFeatures } from "../../data/data";
import Link from "next/link";

function CompanyFeatures() {
  return (
    <section className="4xl:large-container grid grid-cols-12 gap-6 pt-6 max-4xl:container">
      {companyFeatures.map(({ id, title, desc, icon }, idx) => (
        <div
          className={`col-span-12 rounded-xl ${
            idx === 0
              ? "bg-bg2"
              : idx === 1
              ? "bg-r50"
              : idx === 2
              ? "bg-b10"
              : "bg-bg4"
          } px-4 pt-8 min-[400px]:col-span-6 sm:px-8 lg:col-span-3 lg:px-4 xxl:px-8 xxl:pt-12`}
          key={id}
        >
          <h3 className="heading-3">{title}</h3>
          <p className="pt-3 text-lg font-medium">{desc}</p>
          <div className="flex items-end justify-between">
            <div className="pb-12">
              <Link
                href="/contact"
                className={`rounded-full border p-3 block ${
                  idx === 0
                    ? "border-n900"
                    : idx === 1
                    ? "border-r300 text-r300"
                    : idx === 2
                    ? "border-b300 text-b300"
                    : "border-g300 text-g300"
                }`}
              >
                <PiArrowRightBold />
              </Link>
            </div>
            <div
              className={`text-[100px] !leading-none sm:text-[160px]  xl:text-[180px] ${
                idx === 0
                  ? "text-n900/30"
                  : idx === 1
                  ? "text-r100/30"
                  : idx === 2
                  ? "text-b100/30"
                  : "text-g75/30"
              }`}
            >
              {icon}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default CompanyFeatures;
