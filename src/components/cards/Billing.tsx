import Image01 from "../../images/user-36-05.jpg";
import Image02 from "../../images/user-36-06.jpg";
import Image03 from "../../images/user-36-07.jpg";
import Image04 from "../../images/user-36-08.jpg";
import Image05 from "../../images/user-36-09.jpg";
import DownCaretIcon from "../../assets/arrow-down.svg";
import DownloadIcon from "../../assets/download.svg";
import StatusBadge from "../../assets/Badge.svg";
import UserAvatars from "../UserAvatars";

function Billing() {
  const customers = [
    {
      id: "0",
      plan: "Basic Plan - Dec 2022",
      amount: "$10.00",
      date: "Dec 1, 2022",
      status: "paid",
      users: [Image01, Image04, Image03, Image04, Image05, Image02],
    },
    {
      id: "1",
      plan: "Premium Plan - Dec 2022",
      amount: "$15.00",
      date: "Dec 3, 2022",
      status: "paid",
      users: [Image02],
    },
    {
      id: "2",
      plan: "Standard Plan - Nov 2022",
      amount: "$8.00",
      date: "Nov 25, 2022",
      status: "paid",
      users: [Image03, Image05],
    },
  ];

  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 w-full">
      <div className="">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="text-xs font-semibold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
              <tr>
                <th className="p-4 whitespace-nowrap">
                  <div className="flex items-center font-normal text-left gap-1">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded hover:ring-purple-500 dark:hover:ring-purple-600 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <div className="ml-2">Invoice</div>
                    <img src={DownCaretIcon} alt="Icon" />
                  </div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-normal text-left">Amount</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-normal text-left">Date</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-normal text-left">Status</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-normal text-left">Users on plan</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-normal text-left"></div>
                </th>
              </tr>
            </thead>

            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
              {customers.map((customer) => {
                return (
                  <tr key={customer.id}>
                    <td className="p-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className=" shrink-0 mr-2 sm:mr-3">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded hover:ring-purple-500 dark:hover:ring-purple-600 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                        <div className="font-normal text-slate-800 dark:text-slate-100 text-[#667085]">
                          {customer.plan}
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-light text-[#667085]">
                        USD {customer.amount}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap font-light text-[#667085]">
                      <div className="text-left">{customer.date}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap font-light text-[#667085]">
                      <div className="text-left">
                        {customer.status === "paid" && (
                          <img src={StatusBadge} alt="Icon" />
                        )}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap font-light text-[#667085]">
                      <div className="text-left">
                        <UserAvatars userElements={customer.users} />
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center">
                        <button>
                          <img src={DownloadIcon} alt="Icon" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Billing;
