import React from 'react'


//icons
import { FaPaintBrush } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

export const Sect_1 = () => {
  return (
    <div className=' sm:h-[35rem] w-auto sm:w-auto m-4 sm:m-8 mb-[6rem] rounded-3xl z-0 overflow-hidden '>
      <div class="grid grid-cols-7 grid-rows-4 gap-4 h-[34rem] w-auto rounded-3xl z-1">
        
        
        <div class="col-start-1 col-span-1 w-[5rem] rounded-full  mt-4" data-aos="flip-down">
          <img src="../../img2.gif" alt="" className='bg-gradient-to-tr from-cyan-400 to-violet-500 object-cover rounded-full' />
        </div>
        {/* <div class="row-start-2 row-span-1 bg-gradient-to-tr from-cyan-400 to-violet-500 rounded-t-full m-2" >
          
        </div> */}
        
        <div class=" row-start-3 row-span-2 w-[5rem] sm:h-[20rem] bg-gradient from-cyan-400 to-violet-500 rounded-t-full  m-2" >
         <img src="../../img6.gif" alt="" className='bg-transparent object-cover my-[5rem] sm:my-[9rem] sm:mx-[0rem]' />
        </div>


        <div class="col-start-2 col-span-6 row-span-4 rounded-3xl m-4 " data-aos="slide-left">
          <div className='flex flex-col'>
            <div className='h-[20rem] '>
              <p className=' text-5xl font-extrabold  w-full text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white-500/2 p-2 ' data-aos="fade-up">What I Do</p>

              <div className='bg-gradient-to-b from-green-400 to-violet-500 h-[4rem] md:h-[6rem] flex rounded-3xl m-4'>
                <div className='m-4 sm:mx-8 md:text-2xl'>01/</div>
                <div className='mt-6  sm:mt-4 sm:mx-4'>
                  <FaPaintBrush sm:size={40} />
                </div>
                <div className=' font-extrabold text-2xl sm:text-3xl mt-4 mr-[17rem]'>Designer</div>
                <div className='hidden md:block text-2xl font-Concert mt-6'> I turn ideas into clean, user-friendly designs</div>
              </div>

              <div className='bg-gradient-to-b from-green-400 to-violet-500 h-[4rem] md:h-[6rem] flex rounded-3xl m-4'>
                <div className='m-4 sm:mx-8 md:text-2xl'>02/</div>
                <div className='mt-6 sm:mt-4 sm:mx-4' >
                  <FaCode  sm:size={40} />
                </div>
                <div className=' font-extrabold text-2xl sm:text-3xl mt-4 mr-[16rem]'>Developer</div>
                <div className='hidden md:block text-2xl font-Concert mt-8'>Fast, smooth, and fully responsive</div>
              </div>

              <div className='bg-gradient-to-b from-green-400 to-violet-500 h-[4rem] md:h-[6rem] flex rounded-3xl m-4'>
                <div className='m-4 sm:mx-8  md:text-2xl'>03/</div>
                <div className='mt-6 sm:mt-4  sm:mx-4'>
                  <FaCode  sm:size={40} />
                </div>
                <div className=' font-extrabold text-2xl md:text-3xl mt-4 mr-[8rem]'>DBMS</div>
                <div className='hidden md:block text-2xl font-Concert ml-[12rem] mt-8'>Desinging system flow of an org</div>
              </div>

              <p className='text-1xl font-sixty_four mt-[4rem]'>Let’s make the web a little cooler – one awesome site at a time.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
