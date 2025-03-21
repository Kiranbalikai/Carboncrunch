import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Service = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <section className="px-6 sm:px-8 md:px-16 py-6 md:py-10 lg:py-16 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          className="lg:w-1/2 flex justify-center items-center"
          style={{ y }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="main.png"
            alt="Eco computer"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <motion.div
          className="flex-1 font-dm"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h4 className="text-[#239C0C] font-bold text-xl ml-10 tracking-wide">
            OUR SERVICES
          </h4>
          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            <span className="font-Aeon">What do </span>
            <span className="text-[#FEAB4F] font-Aeon">we do</span>?
          </h2>

          <motion.div
            className="bg-[#F5F5F8] rounded-xl p-6 mb-6 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-3 font-Aeon">
              GHG Accounting
            </h3>
            <p className="text-gray-700 mb-4">
              We provide GHG accounting services, measuring and reporting Scope
              1, 2, and 3 emissions. Our process ensures compliance and helps
              organizations track and reduce their carbon footprint.
            </p>
            <button className="bg-[#D6FFD0] text-[#28B30E] font-bold px-4 py-2 rounded hover:bg-green-200 transition">
              See More Details
            </button>
          </motion.div>

          <motion.div
            className="bg-[#F5F5F8] rounded-xl p-6 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-3 font-Aeon">
              GHG Accounting
            </h3>
            <p className="text-gray-700 mb-4">
              We provide GHG accounting services, measuring and reporting Scope
              1, 2, and 3 emissions. Our process ensures compliance and helps
              organizations track and reduce their carbon footprint.
            </p>
            <button className="bg-[#D6FFD0] text-[#28B30E] font-bold px-4 py-2 rounded hover:bg-green-200 transition">
              See More Details
            </button>
          </motion.div>

          <motion.div
            className="flex justify-center -mt-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="">
              <div className="bg-[#FFF1DA] p-3 rounded-full">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
