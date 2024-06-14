import { PiFilePdf } from "react-icons/pi";
import Pagination from "@/components/ui/Pagination";
import { payoutHistory } from "@/data/data";

function PaymentDetails() {
  return (
    <section className="mt-[100px] pt-15">
      <div className="4xl:large-container grid grid-cols-12 gap-6 overflow-hidden rounded-2xl bg-white p-4 max-4xl:mx-4 sm:p-10">
        <div className="col-span-12 flex items-center justify-between gap-4">
          <h4 className="heading-4">Payout History</h4>
          <p className="text-lg font-medium text-b300">Showing 10 of 40</p>
        </div>
        <div className="relative col-span-12 h-px">
          <div className="line-horizontal absolute left-0 top-0 h-full w-full"></div>
        </div>
        <div className="col-span-12 rounded-2xl bg-white px-6 py-6 max-lg:overflow-x-auto">
          <table className="w-full text-nowrap">
            <thead>
              <tr className="w-full bg-n20 py-4 text-center text-lg font-semibold">
                <th className="py-4">Ref ID</th>
                <th className="py-4">Method</th>
                <th className="py-4">Date</th>
                <th className="py-4">Amount</th>
                <th className="py-4">Downloads</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium text-n300">
              {payoutHistory.map(({ id, refId, method, date, amount }, idx) => (
                <tr key={id} className={`w-full ${idx % 2 !== 0 && "bg-n20"}`}>
                  <td className="px-6 py-4">{refId}</td>
                  <td className="px-6 py-4">{method}</td>
                  <td className="px-6 py-4">{date}</td>
                  <td className="px-6 py-4">${amount}</td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-3">
                      <span className="rounded-lg bg-n20 p-2 text-lg !leading-none text-b300">
                        <PiFilePdf />
                      </span>
                      <p>Download PDF</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="col-span-12">
          <Pagination />
        </div>
      </div>
    </section>
  );
}

export default PaymentDetails;
