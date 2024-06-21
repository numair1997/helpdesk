import React from 'react'

const SubscriptionPlan = () => {
  return (
    <section className="stp-20 sbp-30 bg-n20">
    <div className="container">
      <div className="4xl:large-container max-4xl:container">
        <div className="flex items-center flex-col justify-center">
          <p className="text-xl font-bold">Subscription Plan</p>
          <h2 className="text-4xl font-bold pt-5">Access Expert Assistance</h2>
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
