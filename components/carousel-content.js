import Carousel from './carousel'; // Assuming you have a Carousel component
import Image from 'next/image';
import Link from 'next/link';
import arrow from "../public/images/arrow.png";

const CarouselContent = ({ data }) => {
  return (
    <div className="carousel-wrapper">

      {data.map((item, index) => (
        <div 
          key={index}
          className={`carousel-content-container flex mt-[4.5rem] space-x-10 ${
            index % 2 === 1 ? 'justify-end' : ''
          }`}
        >
          <Carousel images={item.images} delay={3000 + index * 200} />
          
          <div className="content flex flex-col items-start w-[22rem]">
            <h3 className="text-[3.1rem] font-livvic text-left">
              <span className="text-red">{item.heading} </span>
              <span className="text-dark-gray">Breaks</span>
            </h3>
            <p className="text-left text-[1.25rem] text-dark-gray w-[16rem]">
              {item.paragraph}
            </p>
            <Link href={item.button.link} className="uppercase text-[0.9rem] text-dark-gray flex mt-auto">
              <p className="my-auto mr-2">{item.button.text}</p>
              <Image src={arrow} width={40} height={30} alt="Arrow" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarouselContent;
