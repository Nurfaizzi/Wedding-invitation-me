import React from "react";
import localfont from "next/font/local";
import galeryy1 from "/public/galeryy1.png";
import galeryy2 from "/public/galeryy2.jpg";
import galeryy3 from "/public/galeryy3.png";
import galeryy4 from "/public/galeryy4.png";
import galeryy5 from "/public/galeryy5.png";
import galeryy6 from "/public/galeryy6.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const fontjavasoul = localfont({
  src: "../banner/JavasSoul.woff2",
  variable: "--font-JavasSoul",
});

const Moments = () => {
  return (
    <div className="pt-40">
      <div className="flex flex-col justify-center text-center gap-3 pr-16 pl-16">
        <h1 className="text-xl text-white">Moments</h1>
        <h5 className={`${fontjavasoul.className} text-orange-400 text-6xl`}>
          Bahagia Kami
        </h5>
        <p className="text-white">
          " Mencintai bukan untuk menyamai, tetapi keikhlasan menerima
          perbedaan."
        </p>
      </div>
      <div className="grid lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 pt-8 lg:p-16 xl:p-16 p-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is visible
          transition={{ duration: 0.8 }}
        >
          <Image
            src={galeryy1}
            alt="galery1"
            className="w-full h-auto max-w-xl rounded-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is visible
          transition={{ duration: 0.8 }}
        >
          <Image
            src={galeryy2}
            alt="galery1"
            className="w-full h-auto max-w-xl rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is visible
          transition={{ duration: 0.8 }}
        >
          <Image
            src={galeryy3}
            alt="galery1"
            className="w-full h-auto max-w-xl rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is visible
          transition={{ duration: 0.8 }}
        >
          <Image
            src={galeryy4}
            alt="galery1"
            className="w-full h-auto max-w-xl rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is visible
          transition={{ duration: 0.8 }}
        >
          <Image
            src={galeryy5}
            alt="galery1"
            className="w-full h-auto max-w-xl rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is visible
          transition={{ duration: 0.8 }}
        >
          <Image
            src={galeryy6}
            alt="galery1"
            className="w-full h-auto max-w-xl rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Moments;
