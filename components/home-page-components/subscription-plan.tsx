"use client"

import Image from "next/image";
import blogImg1 from "@/public/images/blog-post-image-1.png";

const SubscriptionPlan = () => {
  return (
    <section className="stp-20 sbp-30 bg-n20">
    <div className="container">
      <div className="4xl:large-container max-4xl:container">
        <div className="flex items-center flex-col justify-center">
          <p className="text-xl font-bold">Subscription Plan</p>
          <h2 className="text-4xl font-bold pt-5">Access Expert Assistance</h2>
        </div>
        <div className="stp-15 grid grid-cols-12 gap-6">
            <div className={`group col-span-12 sm:col-span-6 lg:col-span-4`}>
              <div className="relative">
                <Image src={blogImg1} alt="" className="w-full rounded-xl" />
              </div>
              <div className="flex flex-col items-center justify-center pt-10">
                <h4 className="heading-4 pb-3">How To Register on this Platform?</h4>
              </div>
            </div>
            <div className={`group col-span-12 sm:col-span-6 lg:col-span-4`}>
              <div className="relative">
                <Image src={blogImg1} alt="" className="w-full rounded-xl" />
              </div>
              <div className="flex flex-col items-center justify-center pt-10">
                <h4 className="heading-4 pb-3">How To Find Helpers on this Platform?</h4>
              </div>
            </div>
            <div className={`group col-span-12 sm:col-span-6 lg:col-span-4`}>
              <div className="relative">
                <Image src={blogImg1} alt="" className="w-full rounded-xl" />
              </div>
              <div className="flex flex-col items-center justify-center pt-10">
                <h4 className="heading-4 pb-3">How To Make Payments on this Platform?</h4>
              </div>
            </div>
          </div>
        <div className="flex items-center justify-center mt-10">
          <button className="mt-3 flex w-48 items-center justify-center gap-2 rounded-3xl border border-n30 py-3 bg-black text-white">
            <span className="text-xl font-bold">View All</span>
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SubscriptionPlan
