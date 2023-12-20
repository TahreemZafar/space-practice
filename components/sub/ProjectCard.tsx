import Image from 'next/image';
import React from 'react'


interface Props {
    src: string;
    title: string;
    desc: string;
}


function ProjectCard({ src, title, desc }: Props ) {
  return (
    <div className=' relative overflow-hidden rounded-lg shadow-lg  border shadow-[#2A0E61]/50 border-[#2A0E61] ' >
        
         <Image 
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className=' w-full object-contain '

         />

         <div className=' relative p-[22px] pb-6 '>

            <h1 className='text-[22px] font-semibold text-white ' >{ title }</h1>
            <p className='mt-2 text-[15px] text-gray-400 ' >{ desc }</p>

         </div>

    </div>
  )
}

export default ProjectCard