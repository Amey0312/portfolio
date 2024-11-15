import React from 'react'
import Typewriter from 'typewriter-effect'

import {FormComponent} from '../forms/FormComponent.jsx'

//Icons
// import { FaGithubAlt } from "react-icons/fa6";
// import { FaLinkedinIn } from "react-icons/fa";
// import { BiLogoGmail } from "react-icons/bi";
// import { FaDiscord } from "react-icons/fa";

export const Sect_3 = () => {
  return (
    <section className='w-auto h-[38rem] sm:w-auto mx-1 sm:mx-8 sm:mb-[5rem] rounded-xl z-0  overflow-hidden'  >
    <div className=''> 
      <p className='text-2xl sm:text-3xl font-sixty_four sm:text-center' >
                <Typewriter  
                  options={{
                   
                    autoStart: true,
                    loop: true,
                  }}
                 onInit={(typewriter) => {
                 typewriter.typeString('Life is simple Just: Eat')
                 .callFunction(() => {
                   console.log('String typed out!');
                 })
                 .pauseFor(100)
                 .deleteChars(3)
                 .callFunction(() => {
                   console.log('Eat is deleted');
                 })
                 typewriter.typeString('Code')
                 .callFunction(() => {
                    console.log('String typed out!');
                  })
                  .pauseFor(100)
                 .deleteChars(4)
                 .callFunction(() => {
                   console.log('Code is deleted');
                 })
                 typewriter.typeString('Sleep ')
                 .callFunction(() => {
                    console.log('String typed out!');
                  })
                  .pauseFor(100)
                  .deleteChars(6)
                  .callFunction(() => {
                    console.log('Code is deleted');
                  })
                  typewriter.typeString('Repeat ')
                 .start(); }}/>
                 </p>
    </div>
    
   <div className='hidden md:block'> 
      <div class="grid grid-cols-7 grid-rows-4  h-[34rem] w-auto rounded-3xl z-1" id='contact'>
        <div class='col-start-1 col-end-3 row-span-4 col bg-gradient-to-tr from-cyan-400 to-lime-500 my-4 mx-3 rounded-3xl ' data-aos="fade-right">
       <div className='font-Concert text-6xl'>From <span className="text-[#27ae60]">pixels </span>to prototypes, and code to coffee breaks – </div>
        <p className='text-[2rem] font-Concert ' data-aos="slide-up">
                <Typewriter  
                 onInit={(typewriter) => {
                 typewriter.typeString('<span style="color: #27ae60;">I design and develop beautiful, user-friendly web experience</span>')
                 .callFunction(() => {
                    console.log('String typed out!');
                  })
                 .start(); }}/>
        </p>
          
        </div>
       
       
        <div class='col-start-3 col-end-8 row-span-3 my-3 mx-3 rounded-3xl  ' data-aos="fade-left">
              <h1 className='font-Concert text-5xl ml-4'>Let's Talk</h1>
              <FormComponent />
        </div>
        <div className='col-start-3 col-end-8 row-start-4  mx-3 font-Concert text-9xl rounded-3xl' data-aos="fade-up">Collaborate !! </div>
      </div>
    </div>

    <div className=' md:hidden lg:hidden mt-[5rem]'>
    <h1 className='font-Concert text-5xl ml-4'>Let's Talk</h1>
      <FormComponent/>
    </div>
    </section>
  )
}
