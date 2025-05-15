// components/BreaksBySection.js
import { useState } from "react";
import Image from "next/image";

const fallbackNames = [
  { id: 1, name: "Abhiroopa Mathur", img: "/images/img-carousel-1.png" },
  { id: 2, name: "Sushmendra Dubey", img: "/images/img-carousel-2.png" },
  { id: 3, name: "Aparajita Jha", img: "/images/img-carousel-3.png" },
  { id: 4, name: "Deepak Bansal", img: "/images/img-carousel-4.png" },
];

export default function BreaksBySection({ category = "CAREER", names = fallbackNames }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const categoryColors = {
    CAREER: "text-red",
    HEART: "text-red",
    HEALTH: "text-red",
    SPIRITUAL: "text-red",
  };

  const colorClass = categoryColors[category] || "text-red";

  const getRandomRotation = () => {
    return `${Math.floor(Math.random() * 10 - 5)}deg`;
  };

  return (
    <div className="relative w-full h-100 bg-gray-100  px-8 py-[4rem] mb-[10rem]">
      {/* Background Diagonal Images */}
      <div className="hidden md:block absolute inset-0 z-0 ml-[20rem]">
        {names.map((name, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-500 ease-in-out ${
              activeIndex === index
                ? `scale-100 z-100 opacity-100 `
                : "opacity-50 z-0"
            }`}
            style={{
              top:
                activeIndex === index ? `${index * 200}px` : `${index * 200}px`,
              left: activeIndex === index ? `50%` : `${index * 250}px`,
              transform:
                activeIndex === index
                  ? "rotate(0deg) scale(1) "
                  : `rotate(${getRandomRotation()}) scale(0.75) `,
              zIndex: activeIndex === index ? 100 : index, // 👈 dynamic z-index
            }}
          >
            <Image
              src={name.img}
              alt={`Image ${index + 1}`}
              width={250}
              height={250}
              className="shadow-md rounded-lg z-0"
            />
          </div>
        ))}
      </div>

      {/* Foreground Names */}
      <div className="relative z-0 max-w-6xl lg:mx-[4rem]">
        <div className="flex items-center mb-[1rem]">
          <div className={`flex items-center ${colorClass}`}>
            <span className="text-xl font-bold">{category}</span>
            <span className="text-xl font-bold text-black mx-2">BREAKS BY</span>
          </div>
        </div>

        <div className="relative space-y-6">
          {names.map((person, index) => (
            <div
              key={person.id}
              className={`py-4 group relative`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <h2
                className={`text-[3rem] lg:text-[5rem] font-light cursor-pointer relative z-20 ${
                  activeIndex === index ? `lg:text-black ` : `lg:text-gray-500  text-black `
                }`}
              >
                {person.name}
              </h2>
              <div className="h-[2px] w-[10%] bg-gray-300 mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
