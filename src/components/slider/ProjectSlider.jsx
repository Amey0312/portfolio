import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ProjectSlider = () => {
  const sliderRef = useRef(null);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300, // Adjust to control the scroll distance
        behavior: 'smooth',
      });
    }
  };

  const handlePrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300, // Adjust to control the scroll distance
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative">
      {/* Slider container */}
      <div ref={sliderRef} className="overflow-x-auto no-scrollbar scroll-smooth">
        <div className="grid grid-cols-10 w-[100rem]">
          {/* Slide Items */}
          <div className="bg-gradient-to-tr from-cyan-400 to-violet-500 flex flex-col h-[20rem] col-start-1 col-span-2 m-4 rounded-3xl">
            <h1 className="font-Concert text-6xl m-1">Todo list</h1>
            <h2 className="font-mono ml-4">To schedule your plans</h2>
            <img src="" alt="" className="h-[15rem] bg-slate-300 m-4 rounded-3xl" />
          </div>
          <div className="bg-gradient-to-tr from-cyan-400 to-violet-500 flex flex-col h-[20rem] col-start-3 col-span-2 m-4 rounded-3xl">
            <h1 className="font-Concert text-6xl m-1">Blog Post</h1>
            <h2 className="font-mono ml-4">Write about yourself</h2>
            <img src="" alt="" className="h-[15rem] bg-slate-300 m-4 rounded-3xl" />
          </div>
          <div className="bg-gradient-to-tr from-cyan-400 to-violet-500 flex flex-col h-[20rem] col-start-5 col-span-2 m-4 rounded-3xl">
            <h1 className="font-Concert text-6xl m-1">Grocery Website</h1>
            <h2 className="font-mono ml-4">Buy your daily groceries here</h2>
            <img src="" alt="" className="h-[15rem] bg-slate-300 m-4 rounded-3xl" />
          </div>
          <div className="bg-gradient-to-tr from-cyan-400 to-violet-500 flex flex-col h-[20rem] col-start-7 col-span-2 m-4 rounded-3xl">
            <h1 className="font-Concert text-6xl m-1">Twitter Clone</h1>
            <h2 className="font-mono ml-4">A clone using MERN stack</h2>
            <img src="" alt="" className="h-[15rem] bg-slate-300 m-4 rounded-3xl" />
          </div>
          <div className="bg-gradient-to-tr from-cyan-400 to-violet-500 flex flex-col h-[20rem] col-start-9 col-span-2 m-4 rounded-3xl">
            <h1 className="font-Concert text-6xl m-1">DEFI App</h1>
            <h2 className="font-mono ml-4">A decentralized dbank app</h2>
            <img src="" alt="" className="h-[15rem] bg-slate-300 m-4 rounded-3xl" />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-slate-600 rounded-full text-white"
      >
        <FaArrowLeft size={20} />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-slate-600 rounded-full text-white"
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default ProjectSlider;
