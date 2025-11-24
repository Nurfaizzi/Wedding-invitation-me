import { useState } from "react";

import Image from "next/image";
import batik from "/public/batik.png";
import gopay from "/public/gopay.png";
import bca from "/public/bca.png";
import kado from "/public/kado.png";
import { motion } from "framer-motion";

const Gift = () => {
  const [textToCopyBca, setTextToCopyBca] = useState("5721352634");
  const [isCopied, setIsCopied] = useState(false);
  const [textToCopyGopay, setTextToCopyGopay] = useState("088225025122");
  const [isCopiedGopay, setIsCopiedGopay] = useState(false);
  const [textToCopyAddress, setTextToCopyAdress] = useState(
    "Dusun Kalimaro, Dusun I, Bapangsari, Kec. Bagelen, Kabupaten Purworejo, Jawa Tengah 54174"
  );
  const [isCopiedAddress, setIsCopiedAddress] = useState(false);

  const handleCopyGopay = async () => {
    try {
      await navigator.clipboard.writeText(textToCopyGopay);
      setIsCopiedGopay(true);
      // Optional: Reset the "copied" state after a short delay
      setTimeout(() => setIsCopiedGopay(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      // Handle error, e.g., show a message to the user
    }
  };

  const handleCopyaddress = async () => {
    try {
      await navigator.clipboard.writeText(textToCopyAddress);
      setIsCopiedAddress(true);
      // Optional: Reset the "copied" state after a short delay
      setTimeout(() => setIsCopiedAddress(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      // Handle error, e.g., show a message to the user
    }
  };

  const handleCopyBca = async () => {
    try {
      await navigator.clipboard.writeText(textToCopyBca);
      setIsCopied(true);
      // Optional: Reset the "copied" state after a short delay
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      // Handle error, e.g., show a message to the user
    }
  };

  return (
    <div className=" ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is visible
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center text-center">
          <h1
            className={`font-serif absolute bg-red-950 justify-center  lg:pt-10 xl:pt-0 pt-5 text-3xl lg:text-6xl  text-orange-400 text-center font-semibold tracking-wider`}
          >
            Wedding Gift
          </h1>
          <p className="text-white bg-red-950 font-semibold pt-20  xl:pl-36 xl:pr-36 lg:pl-36 lg:pr-36 xl:pt-20 lg:pt-20 lg:p-8 xl:p-8 p-13">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan
            jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi
            kado secara cashless.
          </p>
        </div>
      </motion.div>

      <div className="flex flex-wrap justify-center pt-0 lg:pt-10 xl:pt-10 absolute items-center  bg-red-950">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is visible
          transition={{ duration: 0.8 }}
        >
          <div className="p-4 max-w-xs">
            <div className="flex  rounded-lg h-full bg-white p-8 flex-col">
              <div className="flex items-center ">
                <Image src={gopay} alt="gopay" />
              </div>
              <div className="flex flex-col pt-8  justify-center text-center gap-4">
                <p className=" text-2xl leading-relaxed  text-gray-500 dark:text-gray-300">
                  a/n Nurhayati
                </p>
                <p className="text-xl leading-relaxed text-gray-500">
                  {textToCopyGopay}
                </p>
                <button
                  className="bg-cyan-600 px-1.5 py-2 text-white"
                  onClick={handleCopyGopay}
                >
                  {" "}
                  {isCopiedGopay ? "Copied!" : "Copy Text"}{" "}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is visible
          transition={{ duration: 0.8 }}
        >
          <div className="p-4 max-w-xs">
            <div className="flex  rounded-lg h-full dark:bg-gray-800 bg-white p-8 flex-col">
              <div className="flex items-center ">
                <Image src={bca} alt="gopay" width={180} />
              </div>
              <div className="flex flex-col pt-8  justify-center text-center gap-4">
                <p className=" text-2xl leading-relaxed  text-gray-500 dark:text-gray-300">
                  a/n Nurfaizzi Rasyid
                </p>
                <p className="text-xl leading-relaxed text-gray-500">
                  {textToCopyBca}
                </p>
                <button
                  className="bg-cyan-600  px-1.5 py-2 text-white"
                  onClick={handleCopyBca}
                >
                  {" "}
                  {isCopied ? "Copied!" : "Copy Text"}{" "}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is visible
          transition={{ duration: 0.8 }}
        >
          <div className="p-4 lg:max-w-2xl xl:max-w-2xl max-w-xs gap-4">
            <div className="flex rounded-lg h-full dark:bg-gray-800 bg-white p-8 flex-col">
              <div className="flex flex-col items-center mb-3">
                <div className="w-100 mr-3 inline-flex items-center justify-center  text-black ">
                  <Image src={kado} alt="kado" width={100} />
                </div>
                <div className="flex flex-col justify-between text-center gap-4 pt-8">
                  <p className="text-gray-500 lg:text-2xl xl:text-2xl text-md leading-relaxed">
                    {" "}
                    Nurhayati - 0822-2502-5122
                  </p>
                  <p className=" leading-relaxed text-base text-black dark:text-gray-300">
                    {textToCopyAddress}
                  </p>
                  <button
                    className="bg-cyan-600 px-1.5 py-2 text-white"
                    onClick={handleCopyaddress}
                  >
                    {" "}
                    {isCopiedAddress ? "Copied!" : "Copy Text"}{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gift;
