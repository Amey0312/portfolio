import React from 'react'

export const Sect_4 = () => {
  return (
    //Sect-4: About 
    <section className='w-auto m-2 sm:w-auto flex justify-between md:h-[29rem] sm:mt-[10rem ] mx-8 rounded-3xl z-0 ' id='about'>
     
      <div className='bg-gradient-r from-green-400 to-cyan-500 w-[20rem] md:w-[40rem] m-4 rounded-3xl ' data-aos="fade-right">
        <p className='md:text-5xl font-sixty_four'>About</p>
        <div className='md:text-5xl font-Concert'>"Hello, World! 🌍 Building beautiful, responsive websites is my thing <br />(And Debugging Them Too!)"</div>
        <br />
        <br />
        <br />
        <p className='hidden md:block text-3xl font-Concert'>
          Need smooth animations, killer layouts, or JavaScript so clean you could eat off it? You’re in the right place.
        </p>
      </div>

      <div className='bg-gradient-to-r from-cyan-400 to-green-300 w-[6.5rem] h-[5rem] md:w-[25rem] md:h-[26rem] m-4 rounded-full text-xl content-center' data-aos="flip-right">
        Image
      </div>
      
     
    
    </section>
  )
}
