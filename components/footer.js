import Image from "next/image";
import LeftHeart from "../public/images/left-heart.svg";
import RightHeart from "../public/images/right-heart.svg";
import Link from "next/link";

export default function Footer({ children }) {
  return (
    <div>
      <h4 className="text-[3rem] text-center lg:text-[6.2rem] lg:text-left lg:ml-[5rem] lg:mt-[2rem]">
        <span className="text-dark-gray block">Ready to press </span>
        <span className="text-red">pause</span>{" "}
        <span className="text-dark-gray">?</span>
      </h4>

      <div className="img-container flex justify-center my-[2rem] relative">
        <Image src={LeftHeart}  className="w-[10rem] lg:w-[12.5rem]"></Image>
        <Link href="#" className="my-auto absolute top-[4rem] lg:top-[5rem]">
          tap to join us
        </Link>

        <Image src={RightHeart} className="w-[10rem] lg:w-[12.5rem]"></Image>
      </div>

      <h5 className="uppercase text-[2rem] lg:text-[3.4rem] font-black text-center mb-[2.5rem]">
        <span className="text-dark-gray">Bre</span>
        <span className="text-red">a</span>
        <span className="text-black">k</span>
        <span className="text-red">a</span>
        <span className="text-dark-gray">che</span>
      </h5>

      <div className="links flex space-x-10 text-[0.8rem] lg:text-[1rem] lg:space-x-20 justify-center mb-[2rem]">
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

      <p className="text-light-gray text-[0.8rem] lg:text-[1rem] text-center mb-[2.5rem]">©2024 Breakache. All rights reserved.</p>
    </div>
  );
}
