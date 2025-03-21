import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="font-dm px-6 sm:px-8 md:px-16 py-4 md:py-8">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-10">
        {/* Left Section */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.p
            className="bg-[#070708] text-[#AFB0B6] px-5 py-2 rounded-full w-fit font-dm mb-2 text-sm sm:text-base"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            👋 Let's Save our Environment
          </motion.p>

          <motion.h1
            className="font-inter font-bold text-[#2D2D2D] text-4xl sm:text-5xl  xl:text-6xl my-2 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Optimize your eco <br />
            reporting with
          </motion.h1>

          <motion.h1
            className="font-inter font-bold text-4xl sm:text-5xl xl:text-6xl text-white bg-[#FEAB4F] w-fit px-6 sm:px-8 py-3 sm:py-4 rounded-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            CARBON CRUNCH
          </motion.h1>

          <motion.p
            className="font-dm text-xl lg:text-2xl my-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span className="text-[#28B30E] font-bold">95%</span> Accurate
            Carbon Calculations Trusted by Industry
            <br className="hidden sm:block" />
            Leaders
          </motion.p>

          <motion.div
            className="mt-4 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <button className="px-4 py-2 rounded-md font-dm text-base text-[#28B30E] font-bold transition duration-200 border border-[#28B30E] hover:bg-[#eafce7] hover:border-[#45b432]">
              Free Calculator
            </button>
            <button className="px-4 py-2 rounded-md font-dm text-base font-bold bg-[#28B30E] hover:bg-[#239e0c] transition duration-200">
              Book Demo
            </button>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="img1.png"
            alt="Carbon Crunch"
            className="h-auto max-h-[520px] w-full object-contain lg:max-h-[600px] xl:max-h-[680px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
