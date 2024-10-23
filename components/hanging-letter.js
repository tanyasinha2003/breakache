import { motion } from 'framer-motion';

const HangingLetter = () => {
  const letters = ['b', 'r', 'e', 'a', 'k'];
  const colors = ['text-dark-gray', 'text-dark-gray', 'text-dark-gray', 'text-red', 'text-black'];

  // Function to generate a random duration and delay for each letter's swing
  const getRandomSwing = () => {
    const duration = Math.random() * (3 - 1.5) + 1.5; // Random duration between 1.5s and 3s
    const delay = Math.random() * 0.5; // Random delay between 0 and 0.5s
    const rotateAmount = Math.random() * (12 - 5) + 5; // Random swing angle between 5 and 12 degrees
    return {
      swing: {
        rotate: [rotateAmount, -rotateAmount, rotateAmount], // Sway from random positive to negative angle
        transition: {
          duration: duration, // Apply random duration
          ease: "easeInOut", // Ease in and out for smooth swinging
          repeat: Infinity, // Infinite loop
          repeatType: "loop",
          delay: delay, // Apply random delay
        },
      },
    };
  };

  return (
    <div className='absolute top-[-15rem] left-[15rem]'>
    <div className="flex justify-center items-center h-screen relative space-x-12">
      {letters.map((letter, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center"
          variants={getRandomSwing()} // Apply random swing for each letter
          animate="swing"
        >
          {/* The thread/rope */}
          <div className="w-[1px] h-[20rem] bg-light-gray"></div>

          {/* Swinging letter */}
          <div className={`text-[8.8rem] font-bold font-livvic ${colors[index]} text-center border px-[10px]`}>
            {letter}
          </div>
        </motion.div>
      ))}
    </div>
    </div>
  );
};

export default HangingLetter;
