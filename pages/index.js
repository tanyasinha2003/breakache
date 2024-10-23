import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import LeftHeart from "../public/images/left-heart.svg";
import RightHeart from "../public/images/right-heart.svg";
import { useState, useEffect } from "react";
import ShareYourStory from "../public/images/share-your-story.png";

import Layout from "../components/layout";
import HangingLetter from "../components/hanging-letter";

import stories from "../data/stories";
import CarouselContent from "../components/carousel-content";
import Footer from "../components/footer";
// Load the Livvic font

export default function Home() {
  const images = [
    "/images/img-carousel-1.png",
    "/images/img-carousel-1.png",
    "/images/img-carousel-1.png",
    "/images/img-carousel-1.png", // Add your image paths here
  ];

  return (
    <Layout>
      <main>
        {/* landing page
        the hanging letters 
        share you story button
         */}
         

        <div className="landing-page mb-[8rem] ">
        <HangingLetter />
          <Image src={LeftHeart} width={200} className="ml-5" />

          <div className="flex flex-col items-end h-[16rem] w-100 mr-[20rem] relative mt-[3rem]">
            <h1 className="text-[8.8rem] font-bold italic font-livvic text-center absolute">
              <span className="text-red">a</span>
              <span className="text-dark-gray">che</span>
            </h1>
            <p className="text-[1.18rem] mt-[12rem] ">
              Not all breakups are bad
            </p>
          </div>

          <div className="flex justify-between items-center ">
            <Link href="#" passHref>
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

            <Image src={RightHeart} width={200} className="mr-[2rem]" />
          </div>
        </div>

        <div id="aboutUs" className="py-10">
          <div className="w-[26rem] center mx-auto">
            <p className="text-center text-[1.25rem] text-dark-gray">
              Why do we suffer in silence when we can celebrate, share and even
              find answers to our heartbreaks.{" "}
            </p>
          </div>
          <div className="w-80 ml-20 mt-10">
            <h2 className="text-[5.6rem] text-left font-bold italic font-livvic ">
              <span className="text-red">w</span>
              <span className="text-dark-gray">hat</span>
            </h2>
            <p className=" text-left text-[1.25rem] text-dark-gray">
              Breakache is a show where people share their stories about their
              heart break in love, career break, health break and spiritual
              shift that might have changed their path of life.
            </p>
          </div>
          <div className="w-80 ml-auto mr-20">
            <h2 className="text-[5.6rem] text-right font-bold italic font-livvic ">
              <span className="text-red">w</span>
              <span className="text-dark-gray">hy</span>
            </h2>
            <p className=" text-right text-[1.25rem] text-dark-gray">
              Breakache is for the braveheart who are not afraid to say the
              truth about their suffering. But, in a way that is entertaining,
              educational and share worthy. The show is helping people to
              discover about themselves. See each other in a new way.
            </p>
          </div>
          <div className="w-80 mx-auto">
            <h2 className="text-[5.6rem] text-left font-bold italic font-livvic ">
              <span className="text-red">w</span>
              <span className="text-dark-gray">ho</span>
            </h2>
            <p className=" text-left text-[1.25rem] text-dark-gray font-thin">
              We are our own heroes, however there are many with untold stories.
              The real people who have suffered in silence. And seismic shift
              that is happening in the industry today needs inspirational
              stories for the new generation to focus and do better.
            </p>
          </div>
        </div>

        <div id="stories" className="mx-20 py-10">
          <h3 className="uppercase font-bold text-dark-gray text-xl">
            Episodes Captured
          </h3>

          <CarouselContent data={stories} />
          {/* <div className="carousel-content-container flex mt-[4.5rem] space-x-10">
            <Carousel images={images} delay={3000}/>

            <div className="content flex flex-col items-start w-[20rem] ">
              <h3 className="text-[3.1rem]  font-livvic text-left ">
                <span className="text-red">Career </span>
                <span className="text-dark-gray">Breaks</span>
              </h3>
              <p className="text-left text-[1.25rem] text-dark-gray ">
                Why do we suffer in silence when we can celebrate, share and
                even find answers to our heartbreaks.{" "}
              </p>
              <Link
                href="#"
                className="uppercase text-[0.9rem] text-dark-gray flex mt-[3rem]"
              >
                <p className="my-auto mr-2">View All Stories</p>
                <Image src={arrow} width={40} height={30} />
              </Link>
            </div>
          </div>

          <div className="carousel-content-container flex justify-end mt-[4.5rem] space-x-10">
            <Carousel images={images}  delay={3200}/>

            <div className="content flex flex-col items-start w-[20rem] ">
              <h3 className="text-[3.1rem]  font-livvic text-left ">
                <span className="text-red">Career </span>
                <span className="text-dark-gray">Breaks</span>
              </h3>
              <p className="text-left text-[1.25rem] text-dark-gray ">
                Why do we suffer in silence when we can celebrate, share and
                even find answers to our heartbreaks.{" "}
              </p>
              <Link
                href="#"
                className="uppercase text-[0.9rem] text-dark-gray flex mt-[3rem]"
              >
                <p className="my-auto mr-2">View All Stories</p>
                <Image src={arrow} width={40} height={30} />
              </Link>
            </div>
          </div>

          <div className="carousel-content-container flex mt-[4.5rem] space-x-10">
            <Carousel images={images} delay={3000} />

            <div className="content flex flex-col items-start w-[20rem] ">
              <h3 className="text-[3.1rem]  font-livvic text-left ">
                <span className="text-red">Career </span>
                <span className="text-dark-gray">Breaks</span>
              </h3>
              <p className="text-left text-[1.25rem] text-dark-gray ">
                Why do we suffer in silence when we can celebrate, share and
                even find answers to our heartbreaks.{" "}
              </p>
              <Link
                href="#"
                className="uppercase text-[0.9rem] text-dark-gray flex mt-[3rem]"
              >
                <p className="my-auto mr-2">View All Stories</p>
                <Image src={arrow} width={40} height={30} />
              </Link>
            </div>
          </div>

          <div className="carousel-content-container flex justify-end mt-[4.5rem] space-x-10">
            <Carousel images={images}  delay={3200}/>

            <div className="content flex flex-col items-start w-[20rem] ">
              <h3 className="text-[3.1rem]  font-livvic text-left ">
                <span className="text-red">Career </span>
                <span className="text-dark-gray">Breaks</span>
              </h3>
              <p className="text-left text-[1.25rem] text-dark-gray ">
                Why do we suffer in silence when we can celebrate, share and
                even find answers to our heartbreaks.{" "}
              </p>
              <Link
                href="#"
                className="uppercase text-[0.9rem] text-dark-gray flex mt-[3rem]"
              >
                <p className="my-auto mr-2">View All Stories</p>
                <Image src={arrow} width={40} height={30} />
              </Link>
            </div>
          </div> */}
        </div>

        <Footer />
      </main>
    </Layout>
  );
}
