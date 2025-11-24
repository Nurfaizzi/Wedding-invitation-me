"use client"

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import wayang2 from "/public/wayang2.png"
import bgone from "/public/bgone.png"
import * as motion from "motion/react-client"





const Banner = () => {



  return (
    <div>
 <div className="  opacity-100 font-sans pl-16 pr-16 pt-10 min-h-screen  flex flex-col">
    
            <div className='opacity-100 bg-red-950'>
 <Image
    
          src={bgone}
         fill
          alt="hello"
          sizes="100vw"
          style={{ objectFit: "cover",}}
          priority
        />
  </div>
    

     <div className="flex flex-col pb-0 md:pb-18 lg:pb-0 xl:pb-0 items-center pt-30 mx-auto text-center justify-center">
      

       <Image src={wayang2} alt="wayang" className="  absolute w-60 items-center flex justify-center opacity-100" />
        <h1 className="absolute pt-55 font-bold text-white lg:text-2xl text-md xl:text-2xl">Wedding Invitation</h1>
     </div>

      <div className="flex pt-3 flex-col mx-auto text-center items-center gap-2 justify-center animate-fade-down animate-infinite ">
      <h1 className={`  absolute pt-70 xl:pt-80 lg:pt-80 md:pt-40 lg:text-6xl xl:text-6xl text-4xl flex text-white  `}>Aya & Rasyid</h1>
      <p className="text-white text-xl absolute pt-85 xl:pt-105 lg:pt-105 md:pt-60">10 . 12 . 25</p>
     </div>
       <div className="flex  flex-col mx-auto text-center items-center gap-0 pt-8 justify-center">
        <p className="text-white text-md absolute pt-100 xl:pt-130 lg:pt-150 md:pt-80 ">Kepada Yth;</p>
         <p className="text-white text-md absolute pt-110 xl:pt-140 lg:pt-160 md:pt-90 ">Bapak/Ibu/Saudra/i</p>
     </div>

     
     <div className="flex justify-center pt-70 xl:pt-85 lg:pt-95 md:pt-60 pl-3  items-center">
      <Link href={"/banner"} className="items-center flex absolute">
      <button type="button"  className="text-black  justify-center bg-white hover:bg-red-500 cursor-pointer focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2">
      Buka Undangan Disini
    </button>
      </Link>
      
      
     </div>

    </div>
 </div>
  );
};

export default Banner;
