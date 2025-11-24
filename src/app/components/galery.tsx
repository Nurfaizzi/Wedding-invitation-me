import React from 'react'
import batik from '/public/batik.png'
import Image from 'next/image'
import galery6 from "/public/galery6.png"
import wayang from "/public/wayang.jpg";


const Galery = () => {
  return (
    <div>

<div className=' bg-red-950  relative  xl:w-100vw lg:100vw xl:h-screen   lg:h-screen   ' >
  
  
        <div className='opacity-10'>
 <Image
    
          src={wayang}
         fill
          alt="hello"
          sizes="100vw"
          style={{ objectFit: "cover",}}
          priority
        />
        
        </div>
         <div className="">
          <div className='flex justify-center text-center'>
 <h2
            className={`absolute  justify-center  pt-10 text-4xl lg:text-6xl  text-orange-400 text-center `}
          >
            Perjalanan Kami
          </h2>
          </div>
         
          <div className="lg:pt-20 xl:pt-18 xl:p-32 lg:p-32 p-16   mt-5 flex xl:justiyfy-start justify-center lg:justify-start ">
           <div className="lg:max-w-sm xl:max-w-sm max-w-xs lg:h-110 xl:h-110 h-130  absolute mt-5 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col lg:justify-start xl:justify-start gap-8">
<Image style={{padding:10}} alt='image'
src={galery6} />
    <div className=" p-3">
        <a href="#">
            <h5 className={` text-4xl tracking-tight   lg:text-start xl:text-start text-center font-serif  text-orange-400`}>Pertama Bertemu</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700  lg:text-sm xl:text-sm text-sm dark:text-gray-400 lg:text-start xl:text-start text-center">Di bulan terakhir 2024 Allah menakdirkan kami berdua untuk bertemu secara tidak sengaja
dari yang hanya mengenal nama hingga akhirnya bertukar no WhatsApp. Percakapan sederhana dimulai di sana, candaan yang setiap hari di lontarkan hingga akhirnya komunikasi terjalin baik setiap harinya.
</p>
      
    </div>
</div>
          </div>
          </div>





               
    </div>
    </div>
 
        
      
   
  )
}

export default Galery