import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../public/images/logo.svg";
import Image from "next/image";
import ShareYourStory from "../public/images/share-your-story.png";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="sticky top-0 right-0 z-10 bg-white lg:bg-transparent">
      {/* add share your story here */}
      <div className="lg:hidden pl-[2rem]">
        <Link href="/participate" passHref>
          <div className="flex flex-col items-center cursor-pointer w-[6rem] h-2 pt-2">
            <Image
              src={ShareYourStory}
              alt="Image Description"
              width={80}
              height={10}
              className="absolute "
            />
            <span className="text-center text-[0.8rem] text-dark-gray mt-[3.8rem]">
              Share Your Story
            </span>
          </div>
        </Link>
      </div>

      <div className="flex justify-end items-center px-4 py-10 lg:py-[2rem] ">
        {/* Hamburger menu icon for mobile */}

        <div
          id="nav-icon4"
          className={`relative w-8 h-9 cursor-pointer ${
            isOpen ? "open" : ""
          } lg:hidden`}
          onClick={toggleMenu}
        >
          <span
            className={`block absolute -left-4 h-[2px] w-full bg-dark-gray transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-x-1 -translate-y-1" : "top-0"
            }`}
          />
          <span
            className={`block absolute -left-4 h-[2px] w-full bg-dark-gray transition-all duration-300 ease-in-out ${
              isOpen ? "w-0 opacity-0" : "top-[18px]"
            }`}
          />
          <span
            className={`block absolute -left-4 h-[2px] w-full bg-dark-gray transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45 translate-x-1 translate-y-1" : "top-[16px]"
            }`}
          />
        </div>

        {/* Links for desktop */}
        <div className="hidden lg:flex flex-col space-y-4 justify-content-end pr-16 ">
          <Link
            href="/"
            className="black-text uppercase text-right text-l font-light"
          >
            Home
          </Link>
          <Link
            href="/aboutus"
            className="black-text uppercase text-right text-l font-light"
          >
            About Us
          </Link>
          <Link
            href="/#stories"
            className="black-text uppercase text-right text-l font-light"
          >
            Stories
          </Link>
          <Link
            href="/participate"
            className="black-text uppercase text-right text-l font-light"
          >
            Participate
          </Link>
          <Link
            href="/studio"
            className="black-text uppercase text-right text-l font-light"
          >
            Studio
          </Link>
          <Link
            href="/socials"
            className="black-text uppercase text-right text-l font-light"
          >
            Socials
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} // Starts slightly above and invisible
            animate={{ opacity: 1, y: 0 }} // Fades in and slides down
            exit={{ opacity: 0, y: -20 }} // Fades out and slides up
            transition={{ duration: 0.3 }} // Sets the speed of the animation
            className="fixed top-[7rem] right-0 h-[90vh] w-screen bg-white z-20  lg:hidden flex flex-col"
          >
            <div className="flex flex-col space-y-2 items-start items-center ">
              <Link
                href="/"
                onClick={toggleMenu}
                className="text-dark-gray text-[2.5rem]  lowercase text-right font-light"
              >
                home
              </Link>
              <hr className="border-t-2 border-light-gray  w-[10%] mx-auto my-[1.5rem] " />
              <Link
                href="/aboutus"
                onClick={toggleMenu}
                className="text-dark-gray text-[2.5rem]  lowercase text-right font-light"
              >
                About Us
              </Link>
              <hr className="border-t-2 border-light-gray  w-[10%] mx-auto my-[1.5rem] " />
              <Link
                href="/#stories"
                onClick={toggleMenu}
                className="text-dark-gray text-[2.5rem]  lowercase text-right font-light"
              >
                Stories
              </Link>
              <hr className="border-t-2 border-light-gray w-[10%] mx-auto my-[1.5rem] " />
              <Link
                href="/participate"
                onClick={toggleMenu}
                className="text-dark-gray text-[2.5rem]  lowercase text-right font-light"
              >
                Participate
              </Link>
              <hr className="border-t-2 border-light-gray w-[10%] mx-auto my-[1.5rem] " />
              <Link
                href="/studio"
                onClick={toggleMenu}
                className="text-dark-gray text-[2.5rem]  lowercase text-right font-light"
              >
                Studio
              </Link>
            </div>
            <div className=" flex flex-col items-start items-center relative">
              <Image
                src={Logo}
                alt="logo"
                height={200}
                className="absolute top-[-2rem] z-[-1]"
              />

              <div className="pt-[8rem]">
                <div className="links flex space-x-5 text-[0.8rem] lg:text-[1rem] lg:space-x-20 justify-center mb-[2rem] ">
                  <Link
                    href="https://www.youtube.com/@Breakache"
                    className="uppercase"
                    target="_blank"
                  >
                    Youtube
                  </Link>
                  <Link
                    href="https://www.instagram.com/breakache2023/"
                    className="uppercase"
                    target="_blank"
                  >
                    Instagram
                  </Link>{" "}
                  <Link
                    href="https://www.threads.net/@breakache2023"
                    className="uppercase"
                    target="_blank"
                  >
                    Threads
                  </Link>{" "}
                  <Link
                    href="https://www.linkedin.com/showcase/breakache/posts/?feedView=all"
                    className="uppercase"
                    target="_blank"
                  >
                    Linkedin
                  </Link>
                </div>

                <p className="text-light-gray text-[0.8rem] lg:text-[1rem] text-center mb-[2.5rem] ">
                  ©2024 Breakache. All rights reserved.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
