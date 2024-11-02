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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="sticky top-0 right-0 z-10">
      <div className="flex justify-end items-center p-4">
        {/* Hamburger menu icon for mobile */}
        <button onClick={toggleMenu} className="text-2xl lg:hidden mr-4">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Links for desktop */}
        <div className="hidden lg:flex flex-col space-y-4 justify-content-end pr-16 pt-[2rem]">
          <Link href="#aboutUs" className="black-text uppercase text-right text-l font-light">
            About Us
          </Link>
          <Link href="#stories" className="black-text uppercase text-right text-l font-light">
            Stories
          </Link>
          <Link href="/" className="black-text uppercase text-right text-l font-light">
            Participate
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="flex flex-col space-y-4 items-end pr-8 pt-4 lg:hidden">
          <Link href="#aboutUs" onClick={toggleMenu} className="black-text uppercase text-right text-l font-light">
            About Us
          </Link>
          <Link href="#stories" onClick={toggleMenu} className="black-text uppercase text-right text-l font-light">
            Stories
          </Link>
          <Link href="/" onClick={toggleMenu} className="black-text uppercase text-right text-l font-light">
            Participate
          </Link>
        </div>
      )}
    </div>
  );
}
