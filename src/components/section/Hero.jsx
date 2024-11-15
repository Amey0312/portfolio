import React from 'react'

import Typewriter from 'typewriter-effect';

export const Hero = () => {
    return (

     
      // bg-[url('https://camo.githubusercontent.com/4fd007a9db2f46b92856dbba073aea1b9e0b927473eb566a2a8d5ccb5d819b0f/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f63362f33332f63322f63363333633230656465383266306530636564376435373064626533613166332e676966')]
        <div className=' h-[30rem] sm:h-[34rem] w-auto sm:w-auto m-4  flex flex-col sm:flex-row overflow-x-hidden'>
            
            <img class=" h-[22rem] sm:h-[30rem] w-[26rem] sm:w-[50rem] mt-4  rounded-3xl content-center" src="https://camo.githubusercontent.com/4fd007a9db2f46b92856dbba073aea1b9e0b927473eb566a2a8d5ccb5d819b0f/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f63362f33332f63322f63363333633230656465383266306530636564376435373064626533613166332e676966"></img>


            <div className='overflow-hidden'>
                <p className='w-[5rem] sm:w-[20rem] font-lobster absolute top-[7rem] right-[16rem] sm:left-[30rem] sm:top-[20rem]' data-aos="fade-right">Hey! I'm </p>
                <div className='overflow-hidden text-5xl h-[5rem] sm:text-[10rem] sm:h-[12rem] sm:w-[56rem] font-lobster absolute top-[8rem] left-[9rem] sm:top-[20rem] sm:left-[29rem]' data-aos="slide-left">Amey Nitore</div>
                {/* <p className=' text-[2rem] w-[25rem] font-lobster absolute bottom-16 left-[50rem]' data-aos="slide-up">Frontend  Designer || Developer </p> */}
                <p className='w-[10rem] font-lobster absolute top-[11rem] left-[15rem] sm:w-[25rem] sm:text-2xl sm:top-[31rem] sm:left-[53rem] ' data-aos="slide-up">
                <Typewriter  
                 onInit={(typewriter) => {
                 typewriter.typeString('Frontend Designer')
                 .callFunction(() => {
                   console.log('String typed out!');
                 })
                 .pauseFor(2500)
                 .deleteChars(8)
                 .callFunction(() => {
                   console.log('designer is deleted');
                 })
                 typewriter.typeString('Developer')
                 .callFunction(() => {
                    console.log('String typed out!');
                  })
                 .start(); }}/>
                 </p>
            </div>
        </div>
    )
}
