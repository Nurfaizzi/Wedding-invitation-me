import React from 'react'
import batik from '/public/batik.png'
import Image from 'next/image'
import galery1 from "/public/galery1.png"

import galery4 from "/public/galery4.png"

const Galery4 = () => {
  return (
 <div className=' bg-red-950   relative  w-100vw h-screen ' >
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

<div className="lg:pt-20 xl:pt-18 xl:p-32 lg:p-32 p-16 flex xl:justiyfy-end justify-center lg:justify-end ">
           <div className="lg:max-w-sm xl:max-w-sm max-w-sm  lg:h-110 xl:h-110 h-130  absolute  bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col lg:justify-start xl:justify-start gap-8">
<Image style={{padding:10}} alt='image'
src={galery4} />
    <div className=" p-3">
        <a href="#">
            <h5 className={` text-4xl tracking-tight  dark:text-white lg:text-start xl:text-start text-center font-serif text-orange-400`}>Pernikahan</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700  lg:text-sm xl:text-sm text-md lg:text-start xl:text-start text-center dark:text-gray-400">Pada tanggal 10 Desember 2025 kami berdua akan mengikrarkan janji suci sebagai awal dari 
perjalanan ibadah terpanjang yang kami mulai berdua sebagai sepasang suami istri membangun keluarga kecil yang Sakinah mawadah warahmah aamiin.


</p>
      
    </div>
</div>
</div>


               
    </div>
        
      
   
  )
}

export default Galery4