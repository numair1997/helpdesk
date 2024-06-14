import TotalEarningOverview from "@/components/dashboard/charts/TotalEarningOverview";
import WeeklyWorksSummery from "@/components/dashboard/charts/WeeklyWorksSummery";
import Counter from "@/components/ui/NumberCounter2";
import {
  dashboardTodolist,
  orderInfo,
  thisMonthSummeryCard,
  userInformationCard,
} from "@/data/data";
import reviewImg from "@/public/images/review_img.png";
import people1 from "@/public/images/review_people_1.png";
import people2 from "@/public/images/review_people_2.png";
import people3 from "@/public/images/review_people_3.png";
import Image from "next/image";
import Link from "next/link";
import {
  PiArrowUpRight,
  PiCalendarPlusBold,
  PiCaretRight,
  PiCheckSquare,
  PiEnvelopeSimpleBold,
  PiPencilSimpleLineBold,
  PiPhoneBold,
  PiPlusBold,
  PiStarFill,
} from "react-icons/pi";

function Homepage() {
  return (
    <>
      <section className="mt-[100px]">
        <div className="4xl:large-container grid grid-cols-12 gap-6 max-4xl:container pt-15">
          <div className="col-span-12 xxl:col-span-9">
            <div className="sbp-15 flex w-full items-start justify-between gap-6 max-md:flex-col md:items-center md:gap-3">
              <h3 className="heading-3">
                User <br />
                Information
              </h3>
              <div className="flex items-center justify-start gap-6 max-lg:flex-wrap 3xl:gap-12">
                {userInformationCard.map(
                  ({ id, count, title, iconBgColor, icon }) => (
                    <div
                      key={id}
                      className="flex items-center justify-start gap-3"
                    >
                      <div
                        className={`flex items-center justify-center rounded-full  p-[14px] text-3xl !leading-none ${iconBgColor}`}
                      >
                        {icon}
                      </div>
                      <div className="">
                        <p className="text-2xl font-medium">{count}</p>

                        <p className="font-medium text-n100">{title}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="w-full rounded-2xl bg-white p-8">
              <h4 className="heading-4">This Month Summery</h4>
              <div className="grid grid-cols-12 gap-3 pt-6">
                {thisMonthSummeryCard.map(
                  ({ id, count, title, bgColor, icon }) => (
                    <div
                      key={id}
                      className={`col-span-12 rounded-2xl ${bgColor} px-8 py-6 sm:col-span-6 xxl:col-span-3`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start gap-3">
                          <div className="flex items-center justify-center rounded-full bg-white p-3 text-2xl !leading-none">
                            {icon}
                          </div>
                          <p className="text-lg font-medium text-white">
                            {title}
                          </p>
                        </div>

                        <Link
                          href="/dashboard/payout-history"
                          className="-mr-4 -mt-4 flex items-center justify-center rounded-full border border-white p-3 !leading-none text-white"
                        >
                          <PiArrowUpRight />
                        </Link>
                      </div>
                      <div className="flex items-center justify-between pt-8">
                        <div className="heading-3 text-white flex">
                          $<Counter value={Number(count)} />
                        </div>
                        <div className="flex">
                          <Image
                            src={people1}
                            alt=""
                            className="size-10 rounded-full bg-white p-0.5"
                          />
                          <Image
                            src={people2}
                            alt=""
                            className="-ml-4 size-10 rounded-full bg-white p-0.5"
                          />
                          <Image
                            src={people3}
                            alt=""
                            className="-ml-4 size-10 rounded-full bg-white p-0.5"
                          />
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="col-span-12 xxl:col-span-3">
            <div className="rounded-xl border bg-white p-8">
              <div className="flex items-start justify-between">
                <p className="rounded-full bg-y300 px-2 py-1 text-sm font-medium">
                  PRO
                </p>
                <div className="">
                  <div className="">
                    <Image src={reviewImg} alt="" />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <p className="flex items-center justify-start gap-2 text-sm font-semibold !leading-none text-o300">
                      <PiStarFill /> 4.4
                      <span className="text-n300">(45)</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center py-3.5">
                <div className="max-md:overflow-hidden">
                  <div className="hexagon-styles my-[calc(160px*0.5/2)] h-[calc(160px*0.57736720554273)] w-[160px] rounded-[calc(160px/36.75)] bg-b50 before:rounded-[calc(160px/18.75)] after:rounded-[calc(160px/18.75)]">
                    <div className="absolute -top-[32px] left-[8px]">
                      <div className="hexagon-styles z-10 my-[calc(144px*0.5/2)] h-[calc(144px*0.57736720554273)] w-[144px] rounded-[calc(144px/50)] bg-b300 before:rounded-[calc(144px/50)] after:rounded-[calc(144px/50)]">
                        <div className="absolute -top-[31px] left-[5px] z-20">
                          <div className="hexagon-styles z-10 my-[calc(134px*0.5/2)] h-[calc(134px*0.57736720554273)] w-[134px] rounded-[calc(134px/50)] bg-b50 before:rounded-[calc(134px/50)] after:rounded-[calc(134px/50)]">
                            <div className="r-hex3 absolute -left-0.5 -top-[30px] z-30 inline-block w-[138px] overflow-hidden">
                              <div className="r-hex-inner3">
                                <div className="expertImgBig r-hex-inner-3 before:h-[138px] before:bg-cover"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-center border-b border-b50 pb-6 pt-3">
                  <div className="flex-col items-center justify-center gap-3">
                    <h5 className="heading-5">Mabel Barnett</h5>
                  </div>
                  <p className="pt-2 text-n500">Brooklyn, NY, USA</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <div className="flex cursor-pointer items-center justify-center rounded-full bg-n20 p-3 !leading-none">
                  <PiPencilSimpleLineBold />
                </div>
                <div className="flex cursor-pointer items-center justify-center rounded-full bg-n20 p-3 !leading-none">
                  <PiEnvelopeSimpleBold />
                </div>
                <div className="flex cursor-pointer items-center justify-center rounded-full bg-n20 p-3 !leading-none">
                  <PiPhoneBold />
                </div>
                <div className="flex cursor-pointer items-center justify-center rounded-full bg-n20 p-3 !leading-none">
                  <PiPlusBold />
                </div>
                <div className="flex cursor-pointer items-center justify-center rounded-full bg-n20 p-3 !leading-none">
                  <PiCalendarPlusBold />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="4xl:large-container grid grid-cols-12 gap-6 pt-6 max-4xl:container">
          <WeeklyWorksSummery />
          <TotalEarningOverview />
        </div>
      </section>

      <section>
        <div className="4xl:large-container grid grid-cols-12 gap-6 pt-6 max-4xl:container">
          <div className="col-span-12 rounded-2xl bg-white px-6 py-8 max-sm:overflow-x-auto lg:col-span-8">
            <table className="w-full text-nowrap">
              <thead>
                <tr className="w-full bg-n20 py-4 text-center text-lg font-semibold">
                  <th className="py-4">Client Name</th>
                  <th className="py-4">Status</th>
                  <th className="py-4">Location</th>
                  <th className="py-4">Price</th>
                </tr>
              </thead>
              <tbody className="text-center font-medium text-n300">
                {orderInfo.map(({ id, name, status, location, price }) => (
                  <tr className="w-full" key={id}>
                    <td className="py-3">{name}</td>
                    <td className="">
                      <div
                        className={`rounded-full  px-8 py-2 text-xs  ${
                          status === "Completed"
                            ? "text-v200 bg-v50/80"
                            : status === "Inprogress"
                            ? "bg-g50/80 text-g300"
                            : "text-r300 bg-r50/80"
                        }`}
                      >
                        {status}
                      </div>
                    </td>
                    <td className="px-6">{location}</td>
                    <td>${price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="col-span-12 rounded-2xl bg-white px-6 py-8 lg:col-span-4">
            <div className="flex items-center justify-between pb-6">
              <p className="heading-4">To Do List</p>
              <div className="bg flex cursor-pointer items-center justify-start gap-2 rounded-full border border-n40 bg-n10 px-4 py-2 text-sm font-medium text-n300">
                <p>See More</p>
                <PiCaretRight />
              </div>
            </div>
            <div className="relative h-px">
              <div className="line-horizontal absolute left-0 top-0 h-full w-full"></div>
            </div>
            <div className="flex flex-col gap-6 pt-6 font-medium text-n300">
              {dashboardTodolist.map((item, idx) => (
                <div key={idx} className="flex items-start justify-start gap-3">
                  <span className="text-2xl">
                    <PiCheckSquare />
                  </span>
                  <p className="lg:max-w-[400px]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
