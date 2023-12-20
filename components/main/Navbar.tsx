import { Socials } from "@/cosnstants";
import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="w-full h-[72px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] ">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center "
        >
          <Image
            src="/NavLogo.png"
            alt="space logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-spin "
          />

          <span className="font-bold ml-[10px] text-gray-100 hidden md:block " >TZSpace Dev</span>
        </a>

         <div className="w-[500px] h-full flex flex-row items-center justify-center md:mr-20 ">
            <div className="flex items-center justify-around gap-4 border
             border-[#7042f861] w-10/12 h-[70%] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 ">

                 <a href="#about-me" className=" cursor-pointer " > About me </a>
                 <a href="#skills" className=" cursor-pointer " > Skills </a>
                 <a href="#projects" className=" cursor-pointer " > Projects </a>

            </div>
         </div>
     
         
         <div className="flex flex-row gap-5">
             { Socials.map((social) => (
                 <Image
                    src={social.src}
                    alt={social.name}
                    key={social.name}
                    width={24}
                    height={24}
                    className=""  
                 />
             )) }
         </div>


      </div>
    </div>
  );
}

export default Navbar;
