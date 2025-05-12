import React from "react";

const StoryFirstSection = ({ title, subtitle, paragraphs }) => {
  return (
    <div className="flex flex-col justify-center items-center mb-[4rem] mx-[1rem] lg:mb-[12rem]">
      {subtitle && (
        <p className="text-center text-[1rem] lg:text-[1.25rem] text-dark-gray">
          {subtitle}
        </p>
      )}

      {title && (
        <h3 className="text-[3.5rem] lg:text-[6rem] font-livvic text-center">
          <span className="text-red">{title.split(" ")[0]} </span>
          <span className="text-dark-gray">{title.split(" ")[1]}</span>
        </h3>
      )}

      {paragraphs?.map((para, index) => (
        <p
          key={index}
          className="mx-[2rem] lg:mx-[20rem] my-[1rem] text-center"
        >
          {para}
        </p>
      ))}
    </div>
  );
};

export default StoryFirstSection;
