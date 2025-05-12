import LeftHeart from "../public/images/left-heart.svg";
import RightHeart from "../public/images/right-heart.svg";
import HangingLetter from "./hanging-letter";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ShareYourStory from "../public/images/share-your-story.png";

export default function Landing() {
  const rightHeartRef = useRef(null);
  const { scrollYProgress: rightScrollYProgress } = useScroll({
    target: rightHeartRef,
    offset: ["start end", "end start"],
  });

  // Transformations for the right heart
  const rightHeartX = useTransform(
    rightScrollYProgress,
    [0.3, 0.8],
    ["0%", "-370%"]
  );
  const rightHeartY = useTransform(
    rightScrollYProgress,
    [0.24, 0.8],
    ["0%", "300%"]
  );
  const rightHeartScale = useTransform(rightScrollYProgress, [0, 1], [1, 0.5]);

  return (
    <div className="landing-page lg:mb-[4rem] ">
      <div className="lg:block hidden">
        <HangingLetter />
      </div>

      <div>
        <Image
          src={LeftHeart}
          width={200}
          className="ml-5 hidden lg:block"
          alt="Left Heart"
        />
      </div>
      {/* Animated Text Content */}
      <motion.div
        className="flex flex-col items-end h-[16rem] w-100 mr-[20rem] relative mt-[3rem] hidden lg:flex"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-[8.8rem] font-bold italic font-livvic text-center absolute">
          <span className="text-red">a</span>
          <span className="text-dark-gray">che</span>
        </h1>
        <p className="text-[1.18rem] mt-[12rem]">Not all breakups are bad</p>
      </motion.div>

      <div className="lg:flex justify-between items-center hidden">
        <Link href="participate" passHref>
          <div className="flex flex-col items-center cursor-pointer w-[15rem] h-[6.8rem]">
            <Image
              src={ShareYourStory}
              alt="Image Description"
              width={100}
              height={10}
              className="absolute"
            />
            <span className="text-center text-dark-gray mt-[5rem]">
              Share Your Story
            </span>
          </div>
        </Link>

        <motion.div
          ref={rightHeartRef}
          style={{ x: rightHeartX, y: rightHeartY, scale: rightHeartScale }}
          className="lg:block hidden"
        >
          <Image
            src={RightHeart}
            width={200}
            className="mr-[2rem]"
            alt="Right Heart"
          />
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <div className="block lg:hidden text-center mt-[2rem]">
      <HangingLetter />
        {/* Left and Right Hearts centered above the text */}
        {/* <div className="flex justify-center mb-4 ">
          <Image src={LeftHeart} width={100} alt="Left Heart" />
          <Image src={RightHeart} width={100} alt="Right Heart" />
        </div> */}

        {/* Mobile Heading */}
        <div className="relative mt-[13rem]">
        <h1 className="text-[3rem] font-extrabold font-livvic lowercase italic ">
          {/* <span className="text-dark-gray">bre</span>
          <span className="text-red">a</span>
          <span className="text-black">k</span> */}
          <span className="text-red">a</span>
          <span className="text-dark-gray">che</span>
        </h1>
        
        <p className="text-[1rem] text-dark-gray mt-[1rem] tracking-[3px]">
          Not all breakups are bad
        </p>
        </div>
      
      </div>
    </div>
  );
}
