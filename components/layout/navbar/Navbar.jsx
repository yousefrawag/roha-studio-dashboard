"use client";
import { IoSearchSharp } from "react-icons/io5";
import User from "./User";
import ThemeToggle from "./ThemeToggle";
import { CgMenuRight } from "react-icons/cg";
import { CgMenuLeft } from "react-icons/cg";
import { usePathname, useRouter } from "next/navigation"; // Use 'next/navigation' here

const Navbar = ({ locale, showSidebar, toggleShowSodebar }) => {
  const pathname = usePathname();
  const router = useRouter();
  const handelLanguaegsSwitch = (e) => {
    const { value } = e.target;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${value}/${path}`);
  };

  return (
    <div className="dark:bg-gray-800 m-4 rounded-lg mb-0 bg-white py-2 shadow-md text-gray-300 ">
      <nav className="flex items-center justify-between px-4">
        <div className="flex items-center gap-5 transition-all duration-200">
          {showSidebar ? <CgMenuRight onClick={toggleShowSodebar} className=" transition-all duration-200 cursor-pointer text-xl text-gray-600 dark:text-gray-300  hover:text-teal-500 dark:hover:text-teal-500" /> :           <CgMenuLeft onClick={toggleShowSodebar} className=" cursor-pointer text-xl text-gray-600 transition-all duration-200 dark:text-gray-300  hover:text-teal-500 dark:hover:text-teal-500" /> }
          <div className="  flex items-center gap-2">
            <IoSearchSharp className="text-gray-500" />
            <input
              type="search"
              name="search"
              className="bg-transparent p-1 outline-none text-sm"
              placeholder="Type to search..."
            />
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <div>
            <ThemeToggle />
          </div>
          <div className="notifacition_messages flex items-center gap-3">
            <select
              value={locale}
              onChange={handelLanguaegsSwitch}
              className="rounded-md px-4 bg-transparent hover:outline-none focus:outline-none text-gray-400"
            >
              <option value="en">En</option>
              <option value="ar">Ar</option>
            </select>
          </div>
          <div className="user_show">
            <User />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
