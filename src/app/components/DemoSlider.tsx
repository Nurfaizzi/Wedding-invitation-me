"use client"; // <===== REQUIRED

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/pagination"

import localfont from "next/font/local";


export const fontjavasoul = localfont({
  src: "../banner/JavasSoul.woff2",
  variable: "--font-JavasSoul",
});

// Our custom button component
import SliderButtons from "./SliderButton";

interface Slide {
  id: number;
  title: string;
  titlee : string;
  date : string;
  tagline: string;
  image: string;
  buttons: ButtonProps[];
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface DemoSliderProps {
  data: Slide[];
}

const DemoSlider: React.FC<DemoSliderProps> = ({ data }) => {
  return (
    <section className="w-full ">
      <div className=" h-screen">
        <ul className="h-full w-full">
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Autoplay]}
          >
            {data.map(({ id, image, tagline, title, titlee, date, buttons }) => (
              <SwiperSlide key={id}>
                <div
                  className="h-full w-full absolute left-0 "
                  style={{
                    background: `url(${image}) center center / cover scroll no-repeat`,
                  }}
                ></div>
                <div className="h-full w-full absolute left-0 top-0 bg-black opacity-20 p-16"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    {tagline && (
                      <p className="text-md sm:text-xl lg:text-3xl font-semibold text-white">
                        {tagline}
                      </p>
                    )}
                    <p className={`text-3xl sm:text-6xl lg:text-8xl font-bold pt-8 ${fontjavasoul.className} text-orange-500`}>
                      {title}
                    </p>
                     <p className="text-sm sm:text-6xl lg:text-sm pt-6 font-bold text-white flex gap-36 leading-relaxed text">
                      {titlee}
                    </p>
                     <p className="text-sm sm:text-6xl lg:text-sm pt-8 font-bold text-white">
                      {date}
                    </p>
                    
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default DemoSlider;
