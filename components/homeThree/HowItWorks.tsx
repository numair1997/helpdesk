"use client";
import LinkButtonTwo from "../ui/LinkButtonTwo";
import NeedHelp from "@/public/images/need-help.png";
import BecomeHelper from "@/public/images/become-helper.png";
import TrustedPartner from "@/public/images/trusted-partner.png";
import Image from "next/image";

function HowItWorks() {
  return (
    <>
      <section className="stp-30 sbp-30 bg-n20">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 flex flex-col items-start justify-center md:col-span-5 lg:col-span-4">
              <p>Professional Assistance</p>
              <h3 className="heading-3">Get Expert Help Anytime, Anywhere</h3>
              <p className="pt-3 text-n500">
                Our platform connects you with experts across various fields through audio calls, video calls, and screen sharing.
                Whether it’s troubleshooting your devices.
              </p>
              <div className="pt-6 sm:pt-10">
                <LinkButtonTwo link="/" text="Need any help?" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 lg:col-start-6">
              <Image src={NeedHelp} alt="" width={600} height={600} />
            </div>
          </div>
        </div>
      </section>
      <section className="stp-30 sbp-30 bg-n20">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12  md:col-span-7 lg:col-span-5">
              <Image src={BecomeHelper} alt="" width={600} height={600} />
            </div>
            <div className="flex flex-col items-start justify-center col-span-12 md:col-span-5 lg:col-start-7">
            <p>Help Others</p>
              <h3 className="heading-3">Share Your  Expertise and Earn</h3>
              <p className="pt-3 text-n500">
                Join our platform to offer your professional assistance through audio calls, video calls, and screen sharing.
                Help users troubleshoot their devices, guide them through their studies.
              </p>
              <div className="pt-6 sm:pt-10">
                <LinkButtonTwo link="/" text="Become a helper" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="stp-30 sbp-30 bg-n20">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 flex flex-col items-start justify-center md:col-span-5 lg:col-span-4">
              <p>Why Choose Us</p>
              <h3 className="heading-3">Your Trusted Partner in Every Need</h3>
              <p className="pt-3 text-n500">
                At our service, we understand that finding the right assistance can be overwhelming.
                That's why we stand out as your trusted partner, offering comprehensive support across various domains such as education.
              </p>
              <div className="pt-6 sm:pt-10">
                <LinkButtonTwo link="/" text="Learn More" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 lg:col-start-6">
              <Image src={TrustedPartner} alt="" width={600} height={600} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowItWorks;
