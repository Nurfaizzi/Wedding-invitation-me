"use client";

import React from "react";
import wayang from "/public/wayang.jpg";
import wayang2 from "/public/wayang2.png";
import aya from "/public/aya.jpg";
import bg2 from "/public/bg2.png";
import bg3 from "/public/bg3.png";
import batik from "/public/batik.png";
import ocit from "/public/ocit.jpg";
import galery1 from "/public/galery1.png";
import Image from "next/image";
import localfont from "next/font/local";
import Timer from "./timer";
import burung from "/public/burung.png";
import Countdown from "./timer";
import Mapss from "../components/mapss";
import Galery from "../components/galery";
import Galeryy from "../components/galeryy";
import Galeryyy from "../components/galeryyy";
import Galery4 from "../components/galery4";
import Moments from "../components/moment";
import Gift from "../components/gift";
import DemoSlider from "../components/DemoSlider";
import dataSlider from "../data/slider-data.json";
import Link from "next/link";
import { useAudio } from "react-use";
import { motion } from "framer-motion";

 const FontJavaSoul = localfont({
  src: "./JavasSoul.woff2",
  variable: "--font-JavasSoul",
});

const Index = () => {
  const [Audio, state, constrols, ref] = useAudio({
    src: "/laguu.mp3",
    autoPlay: true,
  });

  return (
    <div className=" bg-red-950">
      {Audio}
      <DemoSlider data={dataSlider} />

      <div className="   mx-auto text-center items-center justify-center relative">
        <div className="  opacity-100 font-sans pl-16 pr-16 min-h-screen  ">
          <div className="opacity-10 animate-pulse">
            <Image
              src={wayang}
              fill
              alt="hello"
              sizes="100vw"
              style={{ objectFit: "cover" }}
              priority
              className=" animate-pulse"
            />
          </div>
          <div className="w-full absolute top-1 left-0 text-center mt-10">
            <div className="flex flex-col gap-6">
              <h2 className={`text-2xl font-bold text-white text-center`}>
                Pasangan
              </h2>
              <h2 className={`text-4xl font-bold text-white text-center `}>
                Pengantin
              </h2>
            </div>
            <p className="flex flex-col text-white font-bold pt-3 ">
              Maha Suci Allah SWT, Yang telah menciptakan makhlukNya
              berpasang-pasangan. Ya Allah, perkenankanlah dan Ridhoilah
              Pernikahan kami.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is visible
            transition={{ duration: 0.8 }}
          >
            <div className="flex pt-72 items-center justify-center">
              <div className="max-w-sm flex flex-col ">
                <Image
                  src={aya}
                  alt="aya"
                  className=" rounded-full w-86 lg:h-130 xl:h-130 p-8"
                />

                <div className="lg:pt-8 xl:pt-8 md:pt-8 pt-13 xl:gap-2 lg:gap-2 gap-2 flex flex-col">
                  <h1
                    className={`flex justify-center text-center text-4xl  font-semibold  text-orange-400 text-shadow-lg `}
                  >
                    Nurhayati
                  </h1>
                  <p className="mb-3 text-white dark:text-gray-400 text-center font-bold ">
                    Anak Pertama Dari Bapak Mistak & Sugiarti
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className=" lg:pt-20 xl:pt-30 md:pt-90 pt-20 flex flex-col  mx-auto text-center items-center justify-center relative">
          <div className="relative text-center">
            <div className="w-full left-0 text-center mt-10">
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is visible
                  transition={{ duration: 0.8 }}
                >
                  <div className="max-w-sm flex flex-col ">
                    <Image
                      src={ocit}
                      alt="aya"
                      className=" rounded-full w-96  lg:h-130 xl:h-130 p-16"
                    />

                    <div className="lg:pt-13 xl:pt-8 pt-3 pb-33 xl:gap-2 lg:gap-2 gap-2 flex flex-col">
                      <h1
                        className={`flex justify-center text-center text-4xl  font-semibold  text-orange-400 text-shadow-lg `}
                      >
                        Nurfaizzi Rasyid
                      </h1>
                      <p className="mb-3 text-white dark:text-gray-400 text-center font-bold ">
                        Anak Kedua Dari Bapak Nurwahdan Supriyadi & Churiyah
                        Ulfah
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start invisible and 50px down
        whileInView={{ opacity: 1, y: 0 }} // Animate to visible and normal position when in view
        transition={{ duration: 0.8, ease: "easeIn" }}
        // Animation duration and easing
        viewport={{ once: true, amount: 0.5 }} // Only animate once and when 50% of the element is visible
      >
        <div className="relative   min-h-screen">
          <div className="flex text-center justify-center p-6 gap-8">
            <h1 className="text-white flex absolute  text-2xl lg:text-3xl  font-extrabold">
              Hitung Mundur
            </h1>
            <h2
              className={`absolute pt-13 text-4xl lg:text-7xl  text-orange-400 text-center ${FontJavaSoul.className}`}
            >
              Menuju Hari Bahagia
            </h2>
            <div className="lg:pt-20 xl:pt-18 pt-32  flex items-center justify-center ">
              <Timer launchDate="2025-12-10T10:00:00+07:00" />
            </div>
            <Link
              href={"https://calendar.google.com/calendar/u/0/r/day/2025/12/10"}
              className="flex justify-center"
            >
              <button className=" cursor-pointer absolute text-white  lg:mt-75 xl:m-t-60 mt-60 ml-0  bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm lg:px-10 xl:px-10 md:px-15 px-5  lg:py-5 xl:py-3 md:py-5 py-2.5 text-center flex justify-center items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40e">
                <p className="flex gap-3">
                  <svg
                    className="w-6 h-6 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
                  </svg>
                  Google Calender
                </p>
              </button>
            </Link>
          </div>
          <div className="flex text-center justify-center lg:mt-80 xl:mt-70 mt-35 gap-8 ">
            <h1 className="absolute flex text-white justify-center text-center text-xl">
              بسم الله الرحمن الرحيم
            </h1>

            <p className="flex flex-col absolute text-white lg:pt-18 xl:pt-18 pt-10 text-sm pl-10 pr-10">
              " Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu
              pasangan hidup
              <a href="">
                dari jenismu sendiri supaya kamu dapat ketenangan hati dan
                dijadikannya kasih sayang di antara kamu.
              </a>
              <a>
                Sesungguhnya yang demikian menjadi tanda-tanda kebesaran-Nya
                bagi orang-orang yang berpikir.
              </a>
            </p>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-center items-center xl:pt-5 lg:pt-5 text-center relative">
        <div className="opacity-10">
          <Image
            src={wayang}
            fill
            alt="hello"
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="flex flex-col  mx-auto text-center items-center justify-center relative">
          <div className="relative text-center gap-4 flex flex-col">
            <Image
              src={wayang2}
              alt="wayang"
              className="w-sm lg:w-sm xl:w-sm opacity-100 pt-8 animate-pulse"
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is visible
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-blod text-xl<div></div> font-semibold text-white">
                Waktu & Tempat{" "}
              </h1>
              <h1
                className={`font-blod lg:text-8xl xl:text-8xl text-6xl text-center justify-center flex text-orange-400 ${FontJavaSoul.className}`}
              >
                pernikahan
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is visible
        transition={{ duration: 0.8 }}
      >
        <div className="relative">
          <div className="opacity-10">
            <Image
              src={wayang}
              fill
              alt="hello"
              sizes="100vw"
              style={{ objectFit: "cover" }}
              priority
              className="flex "
            />
          </div>
          <div className="flex justify-between items-center  text-center lg:p-10 xl:p-10 p-13 gap-8 lg:flex-row xl:flex-row flex-col relative ">
            <div className="rounded-t-full min-h-full items-center bg-white border-orange-200 shadow-amber-200 shadow-2xl border-4 flex px-6 py-8 flex-col w-100 h-100">
              <Image src={burung} alt="wayang" className="w-20 " />
              <h1 className=" font-bold text-gray-500">AKAD</h1>
              <h1
                className={`text-decoration-line: underline underline-offset-8 font-blod lg:text-4xl xl:text-4xl text-2xl text-center justify-center flex text-orange-400 ${FontJavaSoul.className}`}
              >
                Pernikahan
              </h1>
              <div className={`flex flex-col pt-10 `}>
                <p
                  className={`text-orange-400 text-4xl ${FontJavaSoul.className}`}
                >
                  10
                </p>
                <p className={`text-black text-2xl ${FontJavaSoul.className}`}>
                  Desember 2025
                </p>
              </div>

              <div className={`flex flex-col pt-10 `}>
                <p className={`text-orange-400 text-xl font-semibold`}>
                  10 : 00 WIB
                </p>
                <p className={` text-xl text-gray-500`}>s/d Selesai</p>
              </div>
            </div>

            <div className="rounded-t-full rotate-180 lg:rotate-none items-center lg:pt-8 xl:pt-8 pt-8 xl:rotate-none min-h-full bg-white border-orange-200 shadow-amber-200 shadow-2xl border-4 flex px-6 lg:py-8 xl:py-8 py-18 flex-col w-96 h-100">
              <div className="rotate-180 lg:rotate-none xl:rotate-none items-center flex flex-col  ">
                <Image src={burung} alt="wayang" className="w-20 " />
                <h1 className=" font-bold text-gray-500">Resepsi</h1>
                <h1
                  className={`text-decoration-line: underline underline-offset-8 font-blod lg:text-4xl xl:text-4xl text-2xl text-center justify-center flex text-orange-400 ${FontJavaSoul.className}`}
                >
                  Pernikahan
                </h1>
                <div className={`flex flex-col pt-10 `}>
                  <p
                    className={`text-orange-400 text-4xl ${FontJavaSoul.className}`}
                  >
                    10
                  </p>
                  <p
                    className={`text-black text-2xl ${FontJavaSoul.className}`}
                  >
                    Desember 2025
                  </p>
                </div>

                <div className={`flex flex-col pt-10 `}>
                  <p className={`text-orange-400 text-xl font-semibold`}>
                    11 : 30 WIB
                  </p>
                  <p className={` text-xl text-gray-500`}>s/d Selesai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="relative">
        <div className="opacity-10">
          <Image
            src={wayang}
            fill
            alt="hello"
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority
            className="flex "
          />
        </div>

        <div>
          <div className="justify-center items-center  text-center flex-col gap-3 p-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is visible
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-xl text-white">Bertempat Di</h1>
              <h1
                className={`text-4xl text-yellow-400 ${FontJavaSoul.className}`}
              >
                Mempelai Wanita
              </h1>
              <p className="text-white text-md">
                Dusun Kalimaro, 01/08 Bapangsari, Kec. Bagelen, Kabupaten
                Purworejo, Jawa Tengah 54174
              </p>
            </motion.div>

            <div className="pt-16">
              <Mapss />
            </div>
            <div className="pt-8 justify-center flex">
              <Link
                href="https://maps.app.goo.gl/QY5Yco4zptKXv5zS9"
                className="flex justify-center mb-3"
              >
                <button className=" cursor-pointer absolute p-8 text-white justify-center  bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm lg:px-15 xl:px-15 md:px-15 px-5  lg:py-5 xl:py-5 md:py-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40e">
                  <p className="flex gap-3">Google Maps</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is visible
        transition={{ duration: 0.8 }}
      >
        <Galery />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is visible
        transition={{ duration: 0.8 }}
      >
        <Galeryy />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is visible
        transition={{ duration: 0.8 }}
      >
        <Galeryyy />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is visible
        transition={{ duration: 0.8 }}
      >
        <Galery4 />
      </motion.div>

      <Moments />

      <Gift />
    </div>
  );
};

export default Index;
