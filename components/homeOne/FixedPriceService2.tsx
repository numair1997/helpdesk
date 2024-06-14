"use client";

import {
  PiCalendarCheck,
  PiCreditCard,
  PiCurrencyCircleDollar,
} from "react-icons/pi";
import FadeRight from "../animation/FadeRight";
import LinkButton from "../ui/LinkButton";
import contactImg from "@/public/images/home_one_contact_img.png";
import Image from "next/image";

function FixedPriceService2({ isBgWhite }: { isBgWhite?: boolean }) {
  return (
    <section className={`stp-30 sbp-30 ${isBgWhite ? "" : "bg-n20"}`}>
      <div className="container grid grid-cols-12 max-lg:gap-6">
        <div className="relative col-span-12 lg:col-span-6">
          <div className="overflow-hidden pb-6 pl-6">
            <Image
              src={contactImg}
              alt=""
              className="relative z-10 overflow-hidden rounded-2xl"
            />
          </div>
          <div className="absolute bottom-0 left-0 h-[250px] w-[200px] rounded-2xl bg-n900 sm:h-[300px] lg:w-[300px] xl:h-[600px]"></div>
        </div>

        <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex flex-col items-start justify-center max-xxl:overflow-hidden">
          <FadeRight>
            <h5 className="heading-5 pb-4 text-r300">Fixed Price Service</h5>
            <ul className="flex flex-wrap items-center justify-start gap-3">
              <li className="flex items-center justify-start gap-2">
                <PiCurrencyCircleDollar className="text-xl !leading-none" />
                See your price.
              </li>
              <li className="flex items-center justify-start gap-2">
                <PiCalendarCheck className="text-xl !leading-none" />
                Book a time.
              </li>
              <li className="flex items-center justify-start gap-2">
                <PiCreditCard className="text-xl !leading-none" />
                Pay online.
              </li>
            </ul>

            <h2 className="heading-2 max-w-[400px] pt-6 font-bold sm:pt-8">
              Looking to book a fixed price service?
            </h2>
            <p className="pt-4 font-medium text-n500">
              Interested in scheduling a service at a set rate? Browse our
              selection of fixed-price offerings and book with confidence today
            </p>
            <p className="pb-6 pt-4 font-medium text-n800 sm:pb-10 sm:pt-8">
              Plumbing, Handyman, House Cleaning, and more...
            </p>
            <div className="">
              <LinkButton link="/contact" text="Contact Now" />
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}

export default FixedPriceService2;
