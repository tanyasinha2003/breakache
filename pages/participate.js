
import Logo from "../public/images/logo.svg";
import Link from "next/link";
import Image from "next/image";


export default function Participate() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
      
          <div className="text-center">Connect with us on our socials</div>
              <Image
                src={Logo}
                alt="logo"
                height={400}
                className=""
              />
              <div className="links flex space-x-10 text-[0.8rem] lg:text-[1rem] lg:space-x-20 justify-center  ">
                <Link href="https://www.youtube.com/@Breakache" className="uppercase" target="_blank">
                  Youtube
                </Link>
                <Link href="https://www.instagram.com/breakache2023/" className="uppercase" target="_blank">
                  Instagram
                </Link>{" "}
                <Link href="https://www.threads.net/@breakache2023" className="uppercase" target="_blank">
                  Threads
                </Link>{" "}
                <Link href="https://www.linkedin.com/showcase/breakache/posts/?feedView=all" className="uppercase" target="_blank">
                  Linkedin
                </Link>
              </div>

              <p className="text-white text-[0.8rem] lg:text-[1rem] text-center mb-[2.5rem] ">
                ©2024 Breakache. All rights reserved.
              </p>
        
        </div>
      );
  }
  