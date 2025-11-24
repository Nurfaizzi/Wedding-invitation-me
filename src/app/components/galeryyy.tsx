import React from 'react'
import batik from '/public/batik.png'
import Image from 'next/image'
import galery1 from "/public/galery1.png"

import galery3 from "/public/galery3.png"


const Galeryyy = () => {
  return (
 <div className=' bg-red-950   relative  w-100vw h-screen  ' >
        <div className='opacity-10'>
 <Image
    
          src={batik}
         fill
          alt="hello"
          sizes="100vw"
          style={{ objectFit: "cover",}}
          priority
        />
        
        </div>


<div className="lg:pt-20 xl:pt-18 xl:p-32 lg:p-32 p-8 flex xl:justiyfy-start justify-center lg:justify-start ">
           <div className="lg:max-w-sm xl:max-w-sm max-w-sm lg:h-110 xl:h-110 h-130    absolute  bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col lg:justify-end xl:justify-end gap-8">
<Image style={{padding:10}} alt='image'
src={galery3} />
    <div className=" p-3">
        <a href="#">
            <h5 className={`text-4xl tracking-tight  dark:text-white lg:text-start xl:text-start text-center font-serif text-orange-400`}>Lamaran</h5>
        </a>
        <p className=" font-normal text-gray-700  lg:text-sm xl:text-sm text-md dark:text-gray-400 lg:text-start xl:text-start text-center">Kami memutuskan untuk mengenalkan satu sama lain ke keluarga masing masing dan meminta restu
untuk membawa hubungan kami ke jenjang yang lebih lanjut. Alhamdulillah keluarga kami setuju 
tepat pada tanggal 19 Juni 2025 kami mengadakan lamaran secara sederhana yang penuh kehangatan.
</p>
      
    </div>
</div>
</div>


               
    </div>
        
      
   
  )
}

export default Galeryyy