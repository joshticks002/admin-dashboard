import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ProfileIcon from "../../assets/profileLogo.svg";
import BackArrowIcon from "../../assets/backArrow.svg";
import HomeIcon from "../../assets/home.svg";
import DashboardIcon from "../../assets/bar-chart-2.svg";
import ProjectIcon from "../../assets/3-layers.svg";
import TaskIcon from "../../assets/check-square.svg";
import ReportIcon from "../../assets/flag.svg";
import UsersIcon from "../../assets/users.svg";
import SupportIcon from "../../assets/life-buoy.svg";
import SettingsIcon from "../../assets/settings.svg";
import LogoutIcon from "../../assets/Button.svg";
import AdvertImage from "../../images/ad-profile.png";
import ProfileImage from "../../images/profile.png";
import SearchInput from "../general/SearchInput";
import SearchIcon from "../../assets/searchIcon.svg";

export interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen(value: boolean): void;
}

interface NavigationItem {
  title: string;
  link: string;
  icon: JSX.Element;
  count?: number;
}

function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const location = useLocation();
  const {} = location;

  const trigger = useRef<HTMLButtonElement | null>(null);
  const sidebar = useRef<HTMLDivElement | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (itemTitle: string) => {
    setSelectedItem(itemTitle);
  };

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  const mainNavigationItems: NavigationItem[] = [
    {
      title: "Home",
      link: "/",
      icon: <img className="" src={HomeIcon} alt="Home Icon" />,
    },
    {
      title: "Dashboard",
      link: "/",
      icon: <img className="" src={DashboardIcon} alt="Dashboard Icon" />,
      count: 10,
    },
    {
      title: "Projects",
      link: "/",
      icon: <img className="" src={ProjectIcon} alt="Project Icon" />,
    },
    {
      title: "Tasks",
      link: "/",
      icon: <img className="" src={TaskIcon} alt="Task Icon" />,
    },
    {
      title: "Reporting",
      link: "/",
      icon: <img className="" src={ReportIcon} alt="Report Icon" />,
    },
    {
      title: "Users",
      link: "/",
      icon: <img className="" src={UsersIcon} alt="Users Icon" />,
    },
  ];

  const footNavigationItems: NavigationItem[] = [
    {
      title: "Support",
      link: "/",
      icon: <img className="" src={SupportIcon} alt="Support Icon" />,
    },
    {
      title: "Settings",
      link: "/",
      icon: <img className="" src={SettingsIcon} alt="Settings Icon" />,
    },
  ];

  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      const targetNode = event.target as Node;
      if (!sidebar.current || !trigger.current) return;

      if (
        !sidebarOpen ||
        sidebar.current.contains(targetNode) ||
        trigger.current.contains(targetNode)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [sidebarOpen]);

  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (!sidebarOpen || event.key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [sidebarOpen]);

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", JSON.stringify(sidebarExpanded));
    if (sidebarExpanded) {
      document.querySelector("body")!.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")!.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div>
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col bg-white absolute border-x z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <div className="flex justify-between mb-5 pr-3 sm:px-0">
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <img
              className=""
              src={BackArrowIcon}
              width="26"
              height="26"
              alt="Back Arrow"
            />
          </button>
          <NavLink
            end
            to="/"
            className={`flex items-center justify-between space-x-2 ${
              sidebarOpen ? "opacity-100 pointer-events-none" : "opacity-100"
            }`}
          >
            <img
              className=""
              src={ProfileIcon}
              width="36"
              height="36"
              alt="Profile Icon"
            />
            <h3 className="dark:text-indigo-200 lg:opacity-0 lg:sidebar-expanded:opacity-100">
              Olivia Rhye
            </h3>
          </NavLink>
        </div>

        <div className="lg:opacity-0 lg:sidebar-expanded:opacity-100 mb-2">
          <SearchInput type="search" placeholder="Search" icon={SearchIcon} />
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
            </h3>
            <ul className="mt-3">
              {mainNavigationItems.map((item, index) => (
                <li
                  key={index}
                  className={`px-3 py-2 rounded-md mb-0.5 last:mb-0 ${
                    selectedItem === item.title
                      ? "bg-[#F9FAFB]"
                      : "hover:bg-[#F9FAFB]"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    sidebarExpanded ? "" : setSidebarExpanded(true);
                  }}
                >
                  <NavLink
                    end
                    to={item.link}
                    onClick={() => handleItemClick(item.title)}
                    className={`block text-slate-200 truncate transition duration-150 ${
                      selectedItem === item.title
                        ? "hover:text-slate-200"
                        : "hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="grow flex items-center">
                        {item.icon}
                        <span className="text-sm font-normal ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-black">
                          {item.title}
                        </span>
                      </div>
                      {item.count && (
                        <div className="flex flex-shrink-0 ml-2">
                          <span className="inline-flex items-center justify-center h-5 text-xs font-normal text-black bg-[#F2F4F7] px-2 rounded-full">
                            {item.count}
                          </span>
                        </div>
                      )}
                    </div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
            </h3>
            <ul className="mt-3">
              {footNavigationItems.map((item, index) => (
                <li
                  key={index}
                  className={`px-3 py-2 rounded-md mb-0.5 last:mb-0 ${
                    selectedItem === item.title
                      ? "bg-[#F9FAFB]"
                      : "hover:bg-[#F9FAFB]"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    sidebarExpanded ? "" : setSidebarExpanded(true);
                  }}
                >
                  <NavLink
                    end
                    to={item.link}
                    onClick={() => handleItemClick(item.title)}
                    className={`block text-slate-200 truncate transition duration-150 ${
                      selectedItem === item.title
                        ? "hover:text-slate-200"
                        : "hover:text-white"
                    }`}
                  >
                    <div className="flex items-center">
                      {item.icon}
                      <span className="text-sm font-normal ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-black">
                        {item.title}
                      </span>
                    </div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col bg-[#F9FAFB] rounded-md px-3 py-2 mt-3 space-y-1 lg:opacity-0 lg:sidebar-expanded:opacity-100">
          <div className="mb-2">
            <h3 className="dark:text-indigo-200 text-sm font-normal">
              New features available!
            </h3>
            <p className="text-[#667085] font-light text-sm">
              Check out the new dashboard view. Pages now load faster.
            </p>
          </div>
          <img src={AdvertImage} alt="Advert Icon" />
          <div className="flex items-center space-x-3 pt-2">
            <h3 className="text-[#667085] text-sm font-normal text-sm">
              Dismiss
            </h3>
            <h4 className="text-[#6941C6] font-normal text-sm">What's new?</h4>
          </div>
        </div>

        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto mb-4">
          <div className="px-1 py-2 w-full lg:opacity-0 lg:sidebar-expanded:opacity-100">
            <hr className="w-full mb-3" />
            <div className="flex items-start space-x-2">
              <div className="flex items-center space-x-2">
                <img src={ProfileImage} alt="Profile Icon" />
                <div className="flex flex-col">
                  <h3 className="dark:text-indigo-200 text-sm font-normal">
                    Olivia Rhye
                  </h3>
                  <p className="text-[#667085] font-light text-sm">
                    olivia@rhyenor.com
                  </p>
                </div>
              </div>
              <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
                <span className="sr-only">Expand / collapse sidebar</span>

                <img className="" src={LogoutIcon} alt="Logout Icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
