import React from "react";
import Layout from "../components/layout";

import Image from "next/image";

import s6 from "../public/images/s1.png";

import heart from "../public/images/join-us-heart.png";

import filmelogo from "../public/images/filme-logo.png";

import Navbar from "../components/Navbar";

import LeftHeart from "../public/images/left-heart.svg";
import { useRouter } from "next/router";

// import heart from "../public/images/join-us-heart.png";
import RightHeart from "../public/images/right-heart.svg";
import { motion } from "framer-motion";
import { useState } from "react";

import Link from "next/link";

export default function studioform() {
  const [joined, setJoined] = useState(false);

  const handleJoin = () => {
    setJoined(true);

    // Delay navigation for animation to finish
    setTimeout(() => {
      router.push("/participate");
    }, 800); // adjust duration to match animation (e.g., 800ms)
  };

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    shootType: "",
    packageType: "",
    message: "",
    packageOther: "",
    shootTypeOther: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.firstName.trim())
      tempErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      tempErrors.lastName = "Last name is required.";

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required.";
    } else if (!/^\d{10,}$/.test(formData.phone)) {
      tempErrors.phone = "Enter a valid phone number (10+ digits).";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Enter a valid email.";
    }

    if (!formData.date) tempErrors.date = "Date is required.";
    if (!formData.shootType)
      tempErrors.shootType = "Please select a shoot type.";
    if (!formData.packageType)
      tempErrors.packageType = "Please choose a package.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (validate()) {
      console.log("Form Submitted ✅", formData);
      const res = await fetch("/api/submitStudioForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setLoading(false);
        router.push("/thankyou");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div
        
        className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 px-6"
      >
        {/* Form Section */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-6">Book Your Studio</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-bold text-gray-700 mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border rounded-lg px-4 py-2 w-full"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-bold text-gray-700 mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border rounded-lg px-4 py-2 w-full"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-bold text-gray-700 mb-1"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 w-full"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700 mb-1"
              >
                Email ID
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Date */}
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-bold text-gray-700 mb-1"
              >
                Booking Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 w-full"
              />
              {errors.date && (
                <p className="text-red-500 text-sm">{errors.date}</p>
              )}
            </div>

            {/* Type of Shoot */}
            <div>
              <label
                htmlFor="shootType"
                className="block text-sm font-bold text-gray-700 mb-1"
              >
                Type of Shoot
              </label>
              <select
                name="shootType"
                value={formData.shootType}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 w-full"
              >
                <option value="">Select Type of Shoot</option>
                <option value="reel">Reel</option>
                <option value="wedding">Wedding</option>
                <option value="podcast">Podcast</option>
                <option value="still">Still</option>
                <option value="ad film">Ad Film</option>
                <option value="baby shoot">Baby Shoot</option>
                <option value="commercial shoot">Commercial Shoot</option>
                <option value="other">Other</option>
              </select>
              {errors.shootType && (
                <p className="text-red-500 text-sm">{errors.shootType}</p>
              )}

              {/* Show extra input if "other" is selected */}
              {formData.shootType === "other" && (
                <div className="mt-2">
                  <label
                    htmlFor="shootTypeOther"
                    className="block text-sm font-bold text-gray-700 mb-1"
                  >
                    Specify Other Shoot Type
                  </label>
                  <input
                    type="text"
                    name="shootTypeOther"
                    placeholder="Please specify your shoot type"
                    value={formData.shootTypeOther || ""}
                    onChange={handleChange}
                    className="border rounded-lg px-4 py-2 w-full"
                    required
                  />
                  {errors.shootTypeOther && (
                    <p className="text-red-500 text-sm">
                      {errors.shootTypeOther}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Package */}
            <div>
              <label
                htmlFor="packageType"
                className="block text-sm font-bold text-gray-700 mb-1"
              >
                Package Type
              </label>
              <select
                name="packageType"
                value={formData.packageType}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 w-full"
              >
                <option value="">Choose a Package</option>
                <option value="hourly">Shoot anything per hour — ₹3800</option>
                <option value="advanced">
                  Advanced booking (1 week before) — ₹14000 / 4 hrs
                </option>
                <option value="video">Video — ₹28000 / 8 hrs</option>
                <option value="workshop">Workshop — ₹12000 / 3 hrs</option>
                <option value="other">Other</option>
              </select>
              {errors.packageType && (
                <p className="text-red-500 text-sm">{errors.packageType}</p>
              )}

              {/* Show extra input if "other" is selected */}
              {formData.packageType === "other" && (
                <div className="mt-2">
                  <label
                    htmlFor="date"
                    className="block text-sm font-bold text-gray-700 mb-1"
                  >
                    Your Package Proposal
                  </label>
                  <input
                    type="text"
                    name="packageOther"
                    placeholder="Please specify your package proposal"
                    value={formData.packageOther || ""}
                    onChange={handleChange}
                    className="border rounded-lg px-4 py-2 w-full"
                    required
                  />
                  {errors.packageOther && (
                    <p className="text-red-500 text-sm">
                      {errors.packageOther}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Message */}

            <textarea
              name="message"
              placeholder="Your Message (Optional)"
              value={formData.message}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 w-full h-32"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-red hover:bg-red-600 text-white px-6 py-3 rounded-lg w-full sm:w-auto"
            >
              Submit Booking
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={s6}
            alt="Studio"
            width={500}
            height={300}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
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
          <div className="lg:mx-[6.5rem] mx-[2rem] flex items-center gap-2 ">
            {/* <h1 className="uppercase text-dark-gray font-bold text-lg md:text-xl">
              <span className="text-red">Filme</span> Studio
            </h1> */}
            <Image src={filmelogo} width={200} height={100} alt="Heart" />
          </div>
          <p className="text-center text-[1.5rem] mx-[2rem] ">
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
