// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <div className="sticky top-0 right-0 z-10">
//       <div className="flex flex-col space-y-4 justify-content-end pr-16 pt-16">
//         <Link
//           href="#aboutUs"
//           className="black-text uppercase text-right text-l font-light"
//         >
//           About Us
//         </Link>
//         <Link
//           href="#stories"
//           className="black-text uppercase text-right text-l font-light"
//         >
//           Stories
//         </Link>
//         <Link
//           href="/"
//           className="black-text uppercase text-right text-l font-light"
//         >
//           Participate
//         </Link>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import ToggleIcon from "./toggle-icon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="sticky top-0 right-0 z-10 bg-white lg:bg-transparent">
      <div className="flex justify-end items-center px-4 py-10 lg:py-[2rem] ">
        {/* Hamburger menu icon for mobile */}
        <button onClick={toggleMenu} className="text-2xl lg:hidden mr-4">
          {isOpen ? <FiX /> : <FiMenu />}
          {/* <ToggleIcon isOpen={isOpen} /> */}
        </button>

        {/* Links for desktop */}
        <div className="hidden lg:flex flex-col space-y-4 justify-content-end pr-16">
          <Link
            href="#aboutUs"
            className="black-text uppercase text-right text-l font-light"
          >
            About Us
          </Link>
          <Link
            href="#stories"
            className="black-text uppercase text-right text-l font-light"
          >
            Stories
          </Link>
          <Link
            href="/"
            className="black-text uppercase text-right text-l font-light"
          >
            Participate
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed top-30 right-0 h-[90vh] w-screen bg-white z-20  lg:hidden flex flex-col justify-between">
          <div className="flex flex-col space-y-4 items-end pr-8 pt-4 items-center pt-[5rem]">
            <Link
              href="#aboutUs"
              onClick={toggleMenu}
              className="text-dark-gray text-[4rem] ml-[2rem] lowercase text-right text-l font-light"
            >
              About Us
            </Link>
            <Link
              href="#stories"
              onClick={toggleMenu}
              className="text-dark-gray text-[4rem] ml-[2rem] lowercase text-right text-l font-light"
            >
              Stories
            </Link>
            <Link
              href="/"
              onClick={toggleMenu}
              className="text-dark-gray text-[4rem] ml-[2rem] lowercase text-right text-l font-light"
            >
              Participate
            </Link>
          </div>
          <div>
            <div className="links flex space-x-10 text-[0.8rem] lg:text-[1rem] lg:space-x-20 justify-center mb-[2rem] ">
              <Link href="#" className="uppercase">
                Youtube
              </Link>
              <Link href="#" className="uppercase">
                Instagram
              </Link>{" "}
              <Link href="#" className="uppercase">
                Threads
              </Link>{" "}
              <Link href="#" className="uppercase">
                Linkedin
              </Link>
            </div>

            <p className="text-light-gray text-[0.8rem] lg:text-[1rem] text-center mb-[2.5rem] ">
              ©2024 Breakache. All rights reserved.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
