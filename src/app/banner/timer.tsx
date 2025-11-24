
" use client "
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Interface } from 'readline'

interface TimeCount {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const getTimeLeft = (expiry: string): TimeCount => {
  let days = "0";
  let hours = "0";
  let minutes = "0";
  let seconds = "0";

  const difference = new Date(expiry).getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  const dys = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const mnt = Math.floor((difference / (1000 * 60)) % 60);
  const snd = Math.floor((difference / 1000) % 60);

  days = dys < 10 ? `0${dys}` : dys.toString();
  hours = hrs < 10 ? `0${hrs}` : hrs.toString();
  minutes = mnt < 10 ? `0${mnt}` : mnt.toString();
  seconds = snd < 10 ? `0${snd}` : snd.toString();

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

const Timer = ({ launchDate }: { launchDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeCount>(getTimeLeft(launchDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(launchDate));
    }, 1000);
  }, [launchDate]);



  return (
    <div className='absolute text-white flex justify-center lg:mt-6 mt-10 xl:mt-56 lg:gap-24 max-w-96 gap-8 xl:gap-24 pl-10 font-bold'>

      <div>
     <p className={`flex flex-col justify-center items-center  opacity-200 text-white py-3 shadow-lg rounded-xl pt-13 text-6xl lg:text-7xl`}>
          {timeLeft.days}
      
      </p>
        <p className='text-orange-400 font-bold text-xl'>
       Days
        </p>
      </div>
 


<div>
   <p className={`flex flex-col justify-center items-center opacity-200 text-white pt-13 text-6xl lg:text-7xl py-3 shadow-lg rounded-xl  `}>
        {timeLeft.hours}
      </p>
        <p className='font-bold text-orange-400 text-xl'>
        Hours
        </p>
</div>

   


      <div>
  <p className={`flex flex-col justify-center items-center  opacity-200  pt-13 text-6xl lg:text-7xl py-3  shadow-lg rounded-xl`}>
         {timeLeft.minutes}
      </p>
        <p className='text-orange-400 font-bold text-xl'>
         Minutes
        </p>
      </div>
      <div>
    <p className={`flex flex-col justify-center items-center opacity-200 text-white pt-13 text-6xl lg:text-7xl py-3 shadow-lg rounded-xl `}>
        {timeLeft.seconds}
      </p>
      <p className='font-bold text-orange-400 text-xl'>
          Seconds
        </p>
      </div>
  
      </div>
  )
}

export default Timer