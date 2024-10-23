// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCreative,
} from "swiper/modules";
import Image from "next/image"; // Next.js Image component

export default function Carousel({ images,delay }) {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["120%", 0, -500],
          },
        }}
        modules={[EffectCreative, Autoplay, Pagination]}
        autoplay={{
          delay: delay,
          disableOnInteraction: false,
        }}
        className="mySwiper2 w-[18rem] h-[23rem]"
        loop={true}
        pagination={{
          dynamicBullets: true, // Enable dynamic bullets for pagination
          clickable: true, // Make the bullets clickable
        }}
        style={{
          "--swiper-pagination-color": "red", // Custom active color (Tomato color)
          "--swiper-pagination-bullet-inactive-color": "#ffffff", // Inactive bullet color
          "margin":"0"
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={500} // Specify the width of the image
              height={300} // Specify the height of the image
            />
            {console.log(image)}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
