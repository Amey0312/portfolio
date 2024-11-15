import React from 'react'

// Pages
import { Sect_1 } from '../../components/section/Sect_1'
import { Sect_2 } from '../../components/section/Sect_2'
import { Sect_3 } from '../../components/section/Sect_3'
import { Navbar } from '../../components/navbar/Navbar'
import { Footer } from '../../components/footer/Footer'
import { Sect_4 } from '../../components/section/Sect_4'
import { Hero } from '../../components/section/Hero'

//
import { useMouseMove, useValue, animate } from "react-ui-animate";

export const HomePage = () => {

  const CURSOR_SIZE = 10;


  const x = useValue(0);
  const y = useValue(0);

  useMouseMove(({ mouseX, mouseY }) => {
    x.value = mouseX - CURSOR_SIZE / 7;
    y.value = mouseY - CURSOR_SIZE / 7;
  });
  
  return (
    <div className="bg-black text-white w-auto md:w-auto min-h-screen overflow-x-hidden no-scrollbar">
    {/* <animate.div
        style={{
            width: CURSOR_SIZE,
            height: CURSOR_SIZE,
            backgroundColor: "white",
            borderRadius: "50%",
            translateX: x.value,
            translateY: y.value,
        }}
        className="fixed"
    /> */}
    
    {/* Navbar */}
    
        <Navbar />
    

    {/* Hero Section */}
    
        <Hero />
    

    {/* Sections */}
    
        <Sect_1 />
    
        <Sect_2 />
      
        <Sect_3 />
  
        <Sect_4 />
  
    {/* Footer */}
    
        <Footer />
    
      {/* <div className='h-[24px] w-[24px] rounded-[24px] bg-white absolute top-0 left-0 circle'>1</div>
      <div className='h-[24px] w-[24px] rounded-[24px] bg-white absolute top-0 left-0 circle'></div>
      <div className='h-[24px] w-[24px] rounded-[24px] bg-white absolute top-0 left-0 circle'></div>
      <div className='h-[24px] w-[24px] rounded-[24px] bg-white absolute top-0 left-0 circle'></div>
      <div className='h-[24px] w-[24px] rounded-[24px] bg-white absolute top-0 left-0 circle'></div>
      <div className='h-[24px] w-[24px] rounded-[24px] bg-white absolute top-0 left-0 circle'></div>
      <div className='h-[24px] w-[24px] rounded-[24px] bg-white absolute top-0 left-0 circle'></div>
      <div className='h-[24px] w-[24px] rounded-[24px] bg-white absolute top-0 left-0 circle'></div>
      <div className='h-[24px] w-[24px] rounded-[24px] bg-white absolute top-0 left-0 circle'></div>
      <div className='h-[24px] w-[24px] rounded-[24px] bg-white absolute top-0 left-0 circle'></div>  */}
      
    </div>
  )
}
