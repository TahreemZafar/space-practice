"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

function HeroContent() {
  return (
    <motion.div
        initial="hidden"
        animate="visible"
        className='flex flex-row items-center justify-center px-20 mt-36 w-full z-[20]'
       
    >
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start '>

            <motion.div className='Welcome-box py-[12px] pl-[10px] pr-[22px] border border-[#7042f88b] opacity-[0.9] '
               variants={slideInFromTop}
            >
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5 ' />
                 <h1 className='Welcome-text text-[13px] ' >Frontend Developer Portfolio</h1>
            </motion.div>
 

            <motion.div variants={slideInFromLeft(0.5)}
               className='flex flex-col mt-6 gap-6 text-5xl font-bold text-white w-auto h-auto max-w-[600px] '
            >
                <span>
                Providing  <span className='text-transparent bg-clip-text  bg-gradient-to-r from-purple-500 to-cyan-500'>the best </span>

                project experience
                </span>

            </motion.div>


            <motion.p 
                variants={slideInFromLeft(0.8)}
                className='text-lg text-gray-400 mt-3 mb-5 max-w-[600px] '
             >
                 I&apos;m a Frontend Developer with experience in simple and fully functioning Website
                  development. Check out my projects and skills.
            </motion.p>

            <motion.a
          variants={slideInFromLeft(1)}
          className="py-3 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>

        </div>

          
          <motion.div
             variants={slideInFromRight(0.8)}
             className='w-full h-full flex items-center justify-center'
          >

             <Image 
                src="/mainIconsdark.svg"
                alt='Working homePage Icons'
                width={650}
                height={650}
             />

          </motion.div>


      

    </motion.div>
  )
}

export default HeroContent