import React from "react";
import Layout from "../components/layout";
import Image from "next/image";

import heart from "../public/images/join-us-heart.png";

import s1 from "../public/images/s1.png";
import s2 from "../public/images/s2.png";
import s3 from "../public/images/s3.png";
import s4 from "../public/images/s4.png";
import s5 from "../public/images/s5.png";
import s6 from "../public/images/s6.png";

import filmelogo from "../public/images/filme-logo.png";

import filmelogowhite from "../public/images/filme-logo-white.png";

import banner from "../public/images/studio-banner.png";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import LeftHeart from "../public/images/left-heart.svg";

// import heart from "../public/images/join-us-heart.png";
import RightHeart from "../public/images/right-heart.svg";
import Link from "next/link";
import Carousel from "../components/carousel";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid"; // install @heroicons/react if not already

export default function studio() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFeature = (index) => {
    setOpenIndexes(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // close
          : [...prev, index] // open
    );
  };
  const [joined, setJoined] = useState(false);

  const handleJoin = () => {
    setJoined(true);

    // Delay navigation for animation to finish
    setTimeout(() => {
      router.push("/participate");
    }, 800); // adjust duration to match animation (e.g., 800ms)
  };
  const features = [
    {
      title: "Main Stage",
      description:
        "30×15 ft open floor podcast area, vibrant colours living space with two podcast setups.",
    },
    {
      title: "Dynamic Backdrops",
      description: "Interchangeable colour-rich set options.",
    },
    {
      title: "Green Room & Lounge",
      description:
        "Vanity mirror, garment rack, seating, small pantry and everything talent needs.",
    },
    {
      title: "Power & Internet",
      description: "Inverter silent backup, high-speed wired + Wi-Fi.",
    },
    {
      title: "Selfie Walls",
      description: "3 creative selfie walls for perfect shots.",
    },
    {
      title: "Cafe Setup",
      description: "Mock cafe look for relaxed shoots.",
    },
  ];

  const sampleImages = [
    {
      src: "/images/s1.png",
      alt: "Beautiful landscape",
    },
    {
      src: "/images/s2.png",
      alt: "City skyline",
    },
    {
      src: "/images/s3.png",
      alt: "Beach sunset",
    },
    {
      src: "/images/s4.png",
      alt: "Beach sunset",
    },
    {
      src: "/images/s5.png",
      alt: "Beach sunset",
    },
    {
      src: "/images/s6.png",
      alt: "Beach sunset",
    },
  ];

  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className="hidden lg:flex lg:mx-[6.5rem] mx-[2rem] flex items-center gap-2 ">
        <h1 className="uppercase text-dark-gray font-bold text-lg md:text-xl">
          <span className="text-red">Filme</span> Studio
        </h1>
        <Image src={heart} width={50} height={50} alt="Heart" />
      </div>

      <div className="lg:hidden flex absolute top-[4rem] left-[2.5rem]">
        <Image src={filmelogowhite} width={300} height={200} alt="Heart" />
      </div>

      <div className=" lg:hidden w-full   ">
          <video
            src="/videos/reel1_optimized.mp4" // your file in public folder
            controls
            className="w-full h-auto"
            autoPlay
          />
        </div>

      <section className="bg-white mx-[2rem]  mt-[2rem] mb-[1rem]  lg:mx-[6.5rem] lg:my-[2rem]">
        {/* Main Heading */}
        <h1 className="text-[2rem] md:text-[1.5rem]  text-gray-900 mb-4 text-center">
          <span className="text-dark-gray italic font-light ">
            A Creator’s Playground, Built by Storytellers
          </span>
        </h1>

        <div className="hidden lg:flex grid grid-cols-1 lg:grid-cols-3 gap-4  lg:mx-[6.5rem] mx-[2rem] pb-[4rem]">
          <Image
            src={s1}
            alt="Image 1"
            width={300}
            height={300}
            className="w-full h-auto object-cover"
          />
          <Image
            src={s5}
            alt="Image 2"
            width={300}
            height={300}
            className="w-full h-auto object-cover"
          />
          <Image
            src={s2}
            alt="Image 3"
            width={300}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Mobile-only video */}
        

        {/* Intro Paragraph */}
        <p className="text-gray-700 leading-relaxed mb-6 text-center">
          BREAKACHE Studio is now{" "}
          <span className="font-semibold">Filme Studio</span>. Breakache podcast
          is reaching people globally in the storytelling space. We thought of
          extending it to many more people who would like to do their own
          podcast in the most dynamic way.<br></br>
          <br></br> We have built Filme Studio with our knowledge and expertise
          of 20 years professionally in advertising communication handling
          various films, brand campaigns for larger-than-life brands — and we
          know what it takes to produce a piece of 30 seconds.
        </p>
      </section>

      <section className="px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Studio Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => {
              const isOpen = openIndexes.includes(index);
              return (
                <div
                  key={index}
                  className="bg-gray-100 px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <button onClick={() => toggleFeature(index)}>
                      {isOpen ? (
                        <ChevronUpIcon className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDownIcon className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                  </div>

                  {isOpen && (
                    <p className="mt-2 text-gray-700">{feature.description}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <motion.button
          type="button"
          whileHover={{
            scale: 1.05,
            y: -3,
            boxShadow: "0px 4px 15px rgba(255, 0, 100, 0.4)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-red text-white px-6 py-3 rounded-lg"
          onClick={() => router.push("/studioform")}
        >
          Book Now →
        </motion.button>
      </div>

      <h4 className="text-[3rem] my-[2rem] text-center lg:text-[6.2rem] lg:text-left lg:ml-[5rem] lg:mt-[2rem]">
        <span className="text-dark-gray">The</span>{" "}
        <span className="text-red">Space</span>{" "}
      </h4>

      <div className="lg:hidden my-[2rem]">
        <Carousel
          images={sampleImages}
          delay={3000}
          className="w-[24rem] h-[24rem]  "
        />
      </div>

      <div className="hidden lg:grid grid grid-cols-1 lg:grid-cols-2 gap-4  lg:mx-[6.5rem] mx-[2rem] pb-[4rem]">
        <Image
          src={s1}
          alt="Image 1"
          width={500}
          height={300}
          className="w-full h-auto object-cover"
        />
        <Image
          src={s2}
          alt="Image 2"
          width={500}
          height={300}
          className="w-full h-auto object-cover"
        />
        <Image
          src={s3}
          alt="Image 3"
          width={500}
          height={300}
          className="w-full h-auto object-cover"
        />
        <Image
          src={s4}
          alt="Image 4"
          width={500}
          height={300}
          className="w-full h-auto object-cover"
        />
        <Image
          src={s5}
          alt="Image 5"
          width={500}
          height={300}
          className="w-full h-auto object-cover"
        />
        <Image
          src={s6}
          alt="Image 6"
          width={500}
          height={300}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className=" lg:mx-[6.5rem] mx-[2rem]">
        {/* Why We Built */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Why We Built FILME STUDIO
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We’ve been on both sides of the camera. As ad filmmakers, we know what
          it takes to make a shoot run smoothly — the right light, the right
          sound, the right crew flow, and yes, the right coffee. So we created a
          studio that removes friction and adds inspiration.
        </p>

        {/* Features List */}
        <ul className="space-y-3 text-gray-800">
          <li className="flex items-start">
            <span className="text-red font-bold mr-2">•</span>
            <span>
              <span className="font-semibold">Adland DNA:</span> Two decades of
              production know-how baked into the walls.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-red font-bold mr-2">•</span>
            <span>
              <span className="font-semibold">Proven Global Experience:</span>{" "}
              From automotive epics to FMCG launches to education campaigns.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-red font-bold mr-2">•</span>
            <span>
              <span className="font-semibold">Central & Accessible:</span>{" "}
              CyberHub, Rapid Metro, NH-8 — all minutes away.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-red font-bold mr-2">•</span>
            <span>
              <span className="font-semibold">Plug-and-Play Ready:</span>{" "}
              Lighting, grip, sound treatment, power backup, and fast load-in.
            </span>
          </li>
        </ul>
      </div>

      {/* MAP + CONTACT INFO */}
      <div className="grid md:grid-cols-2 gap-6 mt-8 lg:mx-[4rem] lg:mt-[10rem] mt-[4rem]">
        {/* Map */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.9150895350385!2d77.08789687631193!3d28.482103675747293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19425a1654bb%3A0x6e701bfee01b75b3!2sFilme Studio!5e0!3m2!1sen!2sin!4v1754980403113!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center mx-auto my-[4rem] items-center">
          <div className="hidden lg:flex lg:mx-[6.5rem] mx-[2rem] flex items-center gap-2 ">
            {/* <h1 className="uppercase text-dark-gray font-bold text-lg md:text-xl">
                    <span className="text-red">Filme</span> Studio
                  </h1> */}
            <Image src={filmelogo} width={200} height={100} alt="Heart" />
          </div>
          <h3 className="text-red uppercase font-bold">Address</h3>
          <p className="text-center text-[1rem] lg:text-[1.5rem] mx-[2rem] ">
            {" "}
            J-8/10 <span className="text-dark-gray">(Basement)</span>,<br></br>{" "}
            DLF Phase 2, Sector 25,<br></br> Gurugram, Haryana 122002
          </p>
        </div>
      </div>

      {/* custom footer */}
      <div>
        <Link href="/studioform">
          <h4 className="text-[3rem] text-center lg:text-[6.2rem] lg:text-left lg:ml-[5rem] lg:mt-[2rem]">
            <span className="text-dark-gray block">Ready to </span>
            <span className="text-red">book</span>{" "}
            <span className="text-dark-gray">?</span>
          </h4>
        </Link>

        <div className="img-container flex justify-center my-[2rem] relative">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              x: joined ? 50 : 0,
            }}
            transition={{
              scale: { duration: 1, repeat: Infinity, ease: "easeInOut" },
              x: { type: "spring", stiffness: 100 },
            }}
          >
            <Image
              src={LeftHeart}
              className="w-[10rem] lg:w-[12.5rem]"
              alt="Left Heart"
            />
          </motion.div>

          {!joined && (
            <button
              onClick={handleJoin}
              className="my-auto absolute top-[4rem] lg:top-[5rem] text-lg "
            >
              tap to join us
            </button>
          )}

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              x: joined ? -50 : 0,
            }}
            transition={{
              scale: { duration: 1, repeat: Infinity, ease: "easeInOut" },
              x: { type: "spring", stiffness: 100 },
            }}
          >
            <Image
              src={RightHeart}
              className="w-[10rem] lg:w-[12.5rem]"
              alt="Right Heart"
            />
          </motion.div>
        </div>

        <h5 className="uppercase text-[2rem] lg:text-[3.4rem] font-black text-center mb-[2.5rem]">
          <span className="text-dark-gray">Bre</span>
          <span className="text-red">a</span>
          <span className="text-black">k</span>
          <span className="text-red">a</span>
          <span className="text-dark-gray">che</span>
        </h5>

        <div className="links flex space-x-5 text-[0.8rem] lg:text-[1rem] lg:space-x-20 justify-center mb-[2rem]">
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

        <p className="text-light-gray text-[0.8rem] lg:text-[1rem] text-center mb-[2.5rem]">
          ©2024 Breakache. All rights reserved.
        </p>
      </div>
    </>
  );
}
