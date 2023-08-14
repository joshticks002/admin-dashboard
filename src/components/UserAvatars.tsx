import { Link } from "react-router-dom";

function UserAvatars({ userElements }: { userElements: string[] }) {
  return (
    <ul className="flex flex-wrap justify-center sm:justify-start mb-8 sm:mb-0 -space-x-3 -ml-px">
      {userElements.map((userElement, index) => {
        if (index <= 4) {
          return (
            <li key={index}>
              <Link className="block" to="#0">
                <img
                  className="w-6 h-6 rounded-full"
                  src={userElement}
                  width="36"
                  height="36"
                  alt="User 01"
                />
              </Link>
            </li>
          );
        }
      })}
      {userElements.length > 5 && <li>
        <button className="flex justify-center items-center w-6 h-6 rounded-full bg-gray dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-[#667085] text-xs shadow-sm transition duration-150 ml-2">
          +{userElements.length - 5}
        </button>
      </li>}
    </ul>
  );
}

export default UserAvatars;
