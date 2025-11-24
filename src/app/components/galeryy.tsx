
import React from 'react'
import batik from '/public/batik.png'
import Image from 'next/image'
import galery1 from "/public/galery1.png"
import galery2 from "/public/galery2.jpg"


const Galeryy = () => {
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


<div className="lg:pt-20 xl:pt-18 xl:p-32 lg:p-32 p-16  flex xl:justiyfy-end justify-center lg:justify-end ">
           <div className="lg:max-w-sm xl:max-w-sm max-w-sm  lg:h-110 xl:h-110 h-130   absolute mt-5 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col lg:justify-end xl:justify-end gap-8">
<Image style={{padding:10}} alt='image'
src={galery2} />
    <div className=" p-3">
        <a href="#">
            <h5 className={`  text-4xl tracking-tight  lg:text-start xl:text-start text-center dark:text-white   text-orange-400`}>Pendekatam</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700  lg:text-sm xl:text-sm text-md lg:text-start xl:text-start text-center dark:text-gray-400">Baiknya jalinan komunikasi di antara kami membuat kami saling merasa nyaman, di sela kesibukan kami sesekali memutuskan untuk sekedar menikmati indahnya kota Jogjakarta yang romantis. Rasa tidak ingin kehilangan di antara kami mulai tumbuh, jauh di lubuk hati terbesit rasa ingin selalu Bersama dan saling memiliki.

</p>
      
    </div>
</div>
</div>



               
    </div>
  )
}

export default Galeryy