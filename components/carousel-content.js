import Carousel from "./carousel"; // Assuming you have a Carousel component
import Image from "next/image";
import Link from "next/link";
import arrow from "../public/images/arrow.png";

const CarouselContent = ({ data }) => {
  return (
    <div className="carousel-wrapper">
      {data.map((item, index) => (
        <div
          key={index}
          className={`carousel-content-container flex mt-[4rem] lg:mt-[4.5rem] space-x-5 lg:space-x-10  ${
            index % 2 === 1
              ? "flex-row-reverse  lg:flex-row lg:justify-end"
              : ""
          }`}
        >
          <Carousel images={item.images} delay={3000 + index * 200} />

          <div
            className={`content flex flex-col  w-[13rem] lg:w-[22rem]
          ${
            index % 2 === 1
              ? "items-end pr-[1.25rem] lg:pr-0 lg:items-start"
              : "items-start"
          }
          `}
          >
            <h3
              className={`text-[1.5rem] lg:text-[3.1rem] font-livvic text-left
            whitespace-nowrap
            `}
            >
              <span className="text-red">{item.heading} </span>
              <span className="text-dark-gray">Breaks</span>
            </h3>
            <p
              className={`lg:text-[1.25rem] text-[0.8rem] w-auto text-dark-gray lg:w-[16rem] pr-[0.5rem]
             ${index % 2 === 1 ? "text-right lg:text-left" : "text-left "}
            `}
            >
              {item.paragraph}
            </p>
            <Link
              href={item.button.link}
              className={`
            uppercase text-[0.8rem] lg:text-[0.9rem] text-dark-gray flex mt-auto 
            ${index % 2 === 1 ? "flex-row-reverse lg:flex-row" : ""}
            `}
            >
              <p
                className={`
              my-auto whitespace-nowrap
              ${index % 2 === 1 ? "ml-2 lg:mr-2 lg:ml-0" : "mr-2"}
              `}
              >
                {item.button.text}
              </p>
              <Image
                src={arrow}
                width={40}
                height={30}
                alt="Arrow"
                className={`
                ${index % 2 === 1 ? "-scale-x-100 lg:scale-x-100" : ""}
                `}
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarouselContent;
