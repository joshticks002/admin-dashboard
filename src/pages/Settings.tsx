import { useState } from "react";
import Billing from "../components/cards/Billing";
import Dashboard from "../components/Dashboard";
import SelectedRadioIcon from "../assets/selectedRadio.svg";
import UnselectRadioIcon from "../assets/unselectedRadio.svg";
import SearchInput from "../components/general/SearchInput";
import Mail from "../assets/mail.svg";
import VisaIcon from "../assets/visa.svg";
import MasterCardIcon from "../assets/mastercard.svg";
import PlusIcon from "../assets/plus.svg";
import DownloadIcon from "../assets/btnDownload.svg";

function Settings() {
  const [value, setValue] = useState(1);
  const [cardType, setCardType] = useState<"VISA" | "MASTERCARD" | null>(
    "VISA"
  );

  const handleVisaCard = () => {
    if (cardType === "VISA") {
      setCardType(null);
    } else {
      setCardType("VISA");
    }
  };

  const handleMasterCard = () => {
    if (cardType === "MASTERCARD") {
      setCardType(null);
    } else {
      setCardType("MASTERCARD");
    }
  };

  const tabItems: string[] = [
    "My details",
    "Profile",
    "Password",
    "Team",
    "Plan",
    "Billing",
    "Notifications",
    "Integrations",
    "API",
  ];

  const SettingsComponent = (
    <div className="px-4 sm:px-6 bg-[#F9FAFB] lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <div className="flex flex-col space-y-2 mb-6">
        <p className="dark:text-indigo-200 text-2xl font-normal">Settings</p>
        <p className="text-[#667085] font-light text-md">
          Manage your team and preferences here.
        </p>
      </div>
      <div className="flex w-full bg-white space-x-px mb-8 overflow-x-auto">
        {tabItems.map((item, index) => (
          <div
            key={index}
            className={`flex-grow text-center border-gray-300 py-2 ${
              index === 0 ? "rounded-l-lg" : ""
            } ${index === tabItems.length - 1 ? "rounded-r-lg" : ""} ${
              index !== 0 && index !== tabItems.length - 1 ? "border-l" : ""
            } border-t border-b ${
              index === 0 ? "border-l" : ""
            } hover:bg-[#F9FAFB] ${index === 0 ? "pl-4" : ""} ${
              index === tabItems.length - 1 ? "pr-4 border-l border-r" : ""
            } cursor-pointer px-4 text-sm font-normal`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex flex-col space-y-px mb-3">
        <p className="dark:text-indigo-200 text-lg font-normal">
          Payment method
        </p>
        <p className="text-[#667085] font-light text-sm">
          Update your billing details and address
        </p>
      </div>
      <hr className="w-full mb-6 mt-6" />

      <div className="lg:flex items-start space-y-2 lg:space-x-8 mb-3 mt-3 w-full gap-6">
        <div className="flex flex-col mb-6 lg:w-1/5">
          <p className="dark:text-indigo-200 text-sm font-normal">
            Contact email
          </p>
          <p className="text-[#667085] font-light text-sm">
            Where should invoices be sent?
          </p>
        </div>
        <div className="flex flex-col mb-6 lg:w-2/5 space-y-3">
          <div
            className="flex items-start space-x-2"
            onClick={() => setValue(1)}
          >
            {value === 1 ? (
              <img src={SelectedRadioIcon} alt="Icon" />
            ) : (
              <img src={UnselectRadioIcon} alt="Icon" />
            )}
            <div className="flex flex-col">
              <p className="dark:text-indigo-200 text-sm font-normal">
                Send to my account email
              </p>
              <p className="text-[#667085] font-light text-sm">
                olivia@untitedui.com
              </p>
            </div>
          </div>
          <div
            className="flex items-start space-x-2 w-full"
            onClick={() => setValue(2)}
          >
            {value === 2 ? (
              <img src={SelectedRadioIcon} alt="Icon" />
            ) : (
              <img src={UnselectRadioIcon} alt="Icon" />
            )}
            <div className="flex flex-col w-full">
              <p className="dark:text-indigo-200 text-sm font-normal">
                Send to my account email
              </p>
              <div className="">
                <SearchInput
                  placeholder="Alternate email"
                  type="input"
                  icon={Mail}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="w-full mb-6 mt-6" />

      <div className="lg:flex items-start space-y-2 lg:space-x-8 mb-3 mt-3 w-full gap-6">
        <div className="flex flex-col mb-6 lg:w-1/5">
          <p className="dark:text-indigo-200 text-sm font-normal">
            Card details
          </p>
          <p className="text-[#667085] font-light text-sm">
            Select default payment method
          </p>
        </div>
        <div className="flex flex-col mb-6 lg:w-4/5 space-y-3">
          <article
            onClick={handleVisaCard}
            className={`rounded-xl bg-white p-4 ring-1 ring-gray-300 sm:p-6 lg:p-4 hover:bg-[#F9F5FF] hover:ring-[#D6BBFB] ${
              cardType === "VISA" ? "bg-[#F9F5FF]" : ""
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <img src={VisaIcon} alt="Icon" />
                <div>
                  <p
                    className={`dark:text-indigo-200 text-sm font-normal ${
                      cardType === "VISA" ? "text-[#53389E]" : ""
                    }`}
                  >
                    Visa ending in 1234
                  </p>
                  <p
                    className={`text-[#667085] font-light text-sm ${
                      cardType === "VISA" ? "text-[#7F56D9]" : ""
                    }`}
                  >
                    Expiry 06/2024
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <p
                      className={`text-[#667085] text-sm font-normal ${
                        cardType === "VISA" ? "text-[#9E77ED]" : ""
                      }`}
                    >
                      Set as default
                    </p>
                    <p className="text-[#6941C6] text-sm font-normal">Edit</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  checked={cardType === "VISA" ? true : false}
                  type="checkbox"
                  value={"VISA"}
                  className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-full hover:ring-purple-500 dark:hover:ring-purple-600 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
            </div>
          </article>
          <article
            onClick={handleMasterCard}
            className={`rounded-xl bg-white p-4 ring-1 ring-gray-300 sm:p-6 lg:p-4 hover:bg-[#F9F5FF] hover:ring-[#D6BBFB] ${
              cardType === "MASTERCARD" ? "bg-[#F9F5FF]" : ""
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <img src={MasterCardIcon} alt="Icon" />
                <div>
                  <p
                    className={`dark:text-indigo-200 text-sm font-normal ${
                      cardType === "MASTERCARD" ? "text-[#53389E]" : ""
                    }`}
                  >
                    Mastercard ending in 1234
                  </p>
                  <p
                    className={`text-[#667085] font-light text-sm ${
                      cardType === "MASTERCARD" ? "text-[#7F56D9]" : ""
                    }`}
                  >
                    Expiry 06/2024
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <p
                      className={`text-[#667085] text-sm font-normal ${
                        cardType === "MASTERCARD" ? "text-[#9E77ED]" : ""
                      }`}
                    >
                      Set as default
                    </p>
                    <p className="text-[#6941C6] text-sm font-normal">Edit</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  checked={cardType === "MASTERCARD" ? true : false}
                  type="checkbox"
                  value={"MASTERCARD"}
                  className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-full hover:ring-purple-500 dark:hover:ring-purple-600 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
            </div>
          </article>
          <div className="flex items-center gap-2">
            <img src={PlusIcon} alt="Icon" />
            <p className="text-[#667085] font-normal text-sm">
              Add new payment method
            </p>
          </div>
        </div>
      </div>

      <div className="lg:flex lg:justify-between mb-3 mt-6">
        <p className="dark:text-indigo-200 text-lg font-normal">
          Billing history
        </p>
        <button>
          <img src={DownloadIcon} alt="Icon" />
        </button>
      </div>
      <div className="">
        <Billing />
      </div>
    </div>
  );

  return <Dashboard component={SettingsComponent} />;
}

export default Settings;
