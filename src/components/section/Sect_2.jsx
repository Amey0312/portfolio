import React from 'react'

//Icons

import AutoSlider from '../slider/SkillSlider';
import ProjectSlider from '../slider/ProjectSlider';

export const Sect_2 = () => {

  // const list = ['01', '02', '03', '04', '05'];


  return (
    <section className='h-[45rem] w-auto sm:w-auto mx-8 sm:mb-[10rem] rounded-3xl z-0  overflow-hidden'>

      {/* Skill */}
      <p className='text-center text-6xl font-extrabold  w-full text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white-500/2 p-2 ' data-aos="fade-up">Skills</p>
      < AutoSlider/>

      {/* Projects */}
      <p className='text-center text-6xl font-extrabold  w-full text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white-500/2 p-2 ' data-aos="fade-up">Projects</p>
      
      <ProjectSlider />
      
      {/* <div className='bg-black'>06</div>
        <div className='bg-black'>07</div> */}
    </section>
  )
}
