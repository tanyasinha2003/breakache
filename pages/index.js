import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import LeftHeart from "../public/images/left-heart.svg";
import RightHeart from "../public/images/right-heart.svg";
import { useState, useEffect } from "react";
import ShareYourStory from "../public/images/share-your-story.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Layout from "../components/layout";
import HangingLetter from "../components/hanging-letter";

import stories from "../data/stories";
import CarouselContent from "../components/carousel-content";
import Footer from "../components/footer";
import Landing from "../components/landing";

export default function Home() {

  return (
    <Layout>
      <main className="overflow-hidden">
        {/* landing page
        the hanging letters 
        share you story button
         */}

       <Landing />

        <div id="aboutUs" className="py-10">
          <div className="w-[20rem]  lg:w-[26rem] center mx-auto">
            <p className="text-center text-[1rem] lg:text-[1.25rem] text-dark-gray">
              Why do we suffer in silence when we can celebrate, share and even
              find answers to our heartbreaks.{" "}
            </p>
          </div>

          <div className="w-80 ml-[2.5rem] lg:ml-20 mt-10">
            <h2 className=" text-[3rem] lg:text-[5.6rem] text-left font-bold italic font-livvic ">
              <span className="text-red">w</span>
              <span className="text-dark-gray">hat</span>
            </h2>
            <p className="text-left text-[1rem] w-[16rem] lg:w-[20rem] lg:text-[1.25rem] text-dark-gray">
              Breakache is a show where people share their stories about their
              heart break in love, career break, health break and spiritual
              shift that might have changed their path of life.
            </p>
          </div>
          <div className="mr-[2.5rem] w-[18rem]  lg:w-80 ml-auto lg:mr-20 relative mt-[5rem]">
            <div className="absolute bottom-0 left-[-80px]">
              <Image
                src={LeftHeart}
                width={100}
                className=""
                alt="Left Heart"
              />
            </div>
            <h2 className="text-[3rem] lg:text-[5.6rem] text-right font-bold italic font-livvic ">
              <span className="text-red">w</span>
              <span className="text-dark-gray">hy</span>
            </h2>
            <p className=" text-right text-[1rem]  lg:text-[1.25rem] text-dark-gray">
              Breakache is for the braveheart who are not afraid to say the
              truth about their suffering. But, in a way that is entertaining,
              educational and share worthy. The show is helping people to
              discover about themselves. See each other in a new way.
            </p>
          </div>
          <div className="w-80 ml-[2.5rem] lg:mx-auto mt-[5rem]">
            <h2 className="text-[3rem] lg:text-[5.6rem] text-left font-bold italic font-livvic ">
              <span className="text-red">w</span>
              <span className="text-dark-gray">ho</span>
            </h2>
            <p className=" text-left text-[1rem] lg:text-[1.25rem] text-dark-gray font-thin">
              We are our own heroes, however there are many with untold stories.
              The real people who have suffered in silence. And seismic shift
              that is happening in the industry today needs inspirational
              stories for the new generation to focus and do better.
            </p>
          </div>
        </div>

        <div id="stories" className="mx-10 lg:mx-20 py-10">
          <h3 className="uppercase font-bold text-dark-gray text-xl">
            Episodes Captured
          </h3>

          <CarouselContent data={stories} />
        </div>

        <Footer />
      </main>
    </Layout>
  );
}
