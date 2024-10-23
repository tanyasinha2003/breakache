import Image from "next/image";
import LeftHeart from "../public/images/left-heart.svg";
import RightHeart from "../public/images/right-heart.svg";
import Link from "next/link";

export default function Footer({ children }) {
  return (
    <div>
      <h4 className="text-[6.2rem] text-left ml-[5rem] mt-[2rem]">
        <span className="text-dark-gray block">Ready to press </span>
        <span className="text-red">pause</span>{" "}
        <span className="text-dark-gray">?</span>
      </h4>

      <div className="img-container flex justify-center my-[2rem]">
        <Image src={LeftHeart} width={200} className=""></Image>
        <Link href="#" className="my-auto">
          tap to join us
        </Link>

        <Image src={RightHeart} width={200} className=""></Image>
      </div>

      <h5 className="uppercase text-[3.4rem] font-black text-center mb-[2.5rem]">
        <span className="text-dark-gray">Bre</span>
        <span className="text-red">a</span>
        <span className="text-black">k</span>
        <span className="text-red">a</span>
        <span className="text-dark-gray">che</span>
      </h5>

      <div className="links flex space-x-20 justify-center mb-[2rem]">
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

      <p className="text-light-gray text-center mb-[2.5rem]">©2024 Breakache. All rights reserved.</p>
    </div>
  );
}
