// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// import ThemeToggler from "./ThemeToggler";
// import menuData from "./menuData";

// const Header = () => {
//   const [navigationOpen, setNavigationOpen] = useState(false);
//   const [dropdownToggler, setDropdownToggler] = useState(false);
//   const [stickyMenu, setStickyMenu] = useState(false);

//   const pathUrl = usePathname();

//   // Sticky menu
//   const handleStickyMenu = () => {
//     if (window.scrollY >= 80) {
//       setStickyMenu(true);
//     } else {
//       setStickyMenu(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleStickyMenu);
//   });

//   return (
//     <header
//       className={`fixed left-0 top-0 z-99999 w-full py-7 ${
//         stickyMenu
//           ? "bg-white !py-2 shadow transition duration-100 dark:bg-black"
//           : ""
//       }`}
//     >
//       <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
//         <div className="flex w-full items-center justify-between xl:w-1/4">
//           <a href="/">
//             <Image
//               src="/camcyber/POS_logo.png"
//               alt="logo"
//               width={100}
//               height={20}
//               className="h-[50px] w-auto"
//             />
//           </a>

//           {/* <!-- Hamburger Toggle BTN --> */}
//           <button
//             aria-label="hamburger Toggler"
//             className="block xl:hidden"
//             onClick={() => setNavigationOpen(!navigationOpen)}
//           >
//             <span className="relative block h-5.5 w-5.5 cursor-pointer">
//               <span className="absolute right-0 block h-full w-full">
//                 <span
//                   className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
//                     !navigationOpen ? "!w-full delay-300" : "w-0"
//                   }`}
//                 ></span>
//                 <span
//                   className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
//                     !navigationOpen ? "delay-400 !w-full" : "w-0"
//                   }`}
//                 ></span>
//                 <span
//                   className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
//                     !navigationOpen ? "!w-full delay-500" : "w-0"
//                   }`}
//                 ></span>
//               </span>
//               <span className="du-block absolute right-0 h-full w-full rotate-45">
//                 <span
//                   className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
//                     !navigationOpen ? "!h-0 delay-[0]" : "h-full"
//                   }`}
//                 ></span>
//                 <span
//                   className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
//                     !navigationOpen ? "!h-0 delay-200" : "h-0.5"
//                   }`}
//                 ></span>
//               </span>
//             </span>
//           </button>
//           {/* <!-- Hamburger Toggle BTN --> */}
//         </div>

//         {/* Nav Menu Start   */}
//         <div
//           className={`invisible h-0 w-full items-center justify-end xl:visible xl:flex xl:h-auto xl:w-full ${
//             navigationOpen &&
//             "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
//           }`}
//         >
//           <nav>
//             <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
//               {menuData.map((menuItem, key) => (
//                 <li key={key} className={menuItem.submenu && "group relative"}>
//                   {menuItem.submenu ? (
//                     <>
//                       <button
//                         onClick={() => setDropdownToggler(!dropdownToggler)}
//                         className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary"
//                       >
//                         {menuItem.title}
//                         <span>
//                           <svg
//                             className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 512 512"
//                           >
//                             <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
//                           </svg>
//                         </span>
//                       </button>

//                       <ul
//                         className={`dropdown ${dropdownToggler ? "flex" : ""}`}
//                       >
//                         {menuItem.submenu.map((item, key) => (
//                           <li key={key} className="hover:text-primary">
//                             <Link href={item.path || "#"}>{item.title}</Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </>
//                   ) : (
//                     <Link
//                       href={`${menuItem.path}`}
//                       className={
//                         pathUrl === menuItem.path
//                           ? "rounded-full bg-[#DFEBF1] px-4 py-2 text-primary hover:text-primary dark:bg-[#343c5c]"
//                           : "hover:text-primary"
//                       }
//                     >
//                       {menuItem.title}
//                     </Link>
//                   )}
//                 </li>
//               ))}
//               <ThemeToggler />
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// // w-full delay-300

// export default Header;
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  const pathUrl = usePathname();

  // Update the full current path (including hash fragment) when it changes
  const updatePath = (path) => {
    setCurrentPath(path);
    if (navigationOpen) {
      // Close the menu after clicking a link
      setNavigationOpen(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname + window.location.hash);
    }
  }, []);

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => {
      window.removeEventListener("scroll", handleStickyMenu);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full py-7 ${
        stickyMenu
          ? "bg-white !py-2 shadow transition duration-100 dark:bg-black"
          : ""
      }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <a href="/">
            <Image
              src="/camcyber/POS_logo.png"
              alt="logo"
              width={100}
              height={20}
              className="h-[50px] w-auto"
            />
          </a>

          {/* Hamburger Toggle Button */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "delay-400 !w-full" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-500" : "w-0"
                  }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                  }`}
                ></span>
              </span>
            </span>
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`invisible h-0 w-full items-center justify-end xl:visible xl:flex xl:h-auto xl:w-full ${
            navigationOpen &&
            "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && "group relative"}>
                  <Link
                    href={menuItem.path || "#"}
                    onClick={() => updatePath(menuItem.path)} // Update path on click and close menu
                    className={
                      currentPath === menuItem.path
                        ? "rounded-full bg-[#DFEBF1] px-4 py-2 text-primary hover:text-primary dark:bg-[#343c5c]"
                        : "hover:text-primary"
                    }
                  >
                    {menuItem.title}
                  </Link>
                </li>
              ))}
              <ThemeToggler />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
