import { SidebarProps } from "./Sidebar";
import ProfileIcon from "../../assets/profileLogo.svg";
import MenuIcon from "../../assets/menu-2.svg";

function Header({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  return (
    <header className="lg:hidden sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          <div className="flex">
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <img
                className=""
                src={MenuIcon}
                width="26"
                height="26"
                alt="Menu Icon"
              />
            </button>
          </div>
          <div className="flex items-center space-x-1">
            <img
              className=""
              src={ProfileIcon}
              width="36"
              height="36"
              alt="Profile Icon"
            />
            <h3 className="dark:text-indigo-200">Olivia Rhye</h3>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
