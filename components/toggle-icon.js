import React from 'react';

const ToggleIcon = ({ isOpen }) => {
  return (
    <div className="flex flex-col justify-center items-start">
      <span
        className={`block h-1 bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[-3px] left-[8px]' : 'top-0'}`}
        style={{ transformOrigin: 'left center' }}
      ></span>
      <span
        className={`block h-1 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : 'top-[18px]'}`}
        style={{ transformOrigin: 'left center' }}
      ></span>
      <span
        className={`block h-1 bg-black transition-all duration-300 ${isOpen ? 'rotate-[-45deg] translate-y-[39px] left-[8px]' : 'top-[36px]'}`}
        style={{ transformOrigin: 'left center' }}
      ></span>
    </div>
  );
};

export default ToggleIcon;
