import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useScroll, useTransform } from "framer-motion";

const Card = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Parallax effect setup
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -30]);

  return (
    <motion.div
      className="font-dm px-6 sm:px-8 md:px-16 py-8 sm:py-12 md:py-20 lg:py-28 xl:py-36"
      style={{ y }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <motion.div
          className="bg-[#3A3A3A] text-white rounded-xl px-6 py-6 flex flex-col justify-between 
                     transition-transform duration-300 transform hover:scale-105 hover:shadow-xl h-full"
          data-aos="fade-up"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-5xl font-bold">98%</span>
          <span className="text-base mt-2 text-[#E2E2E2]">
            Of CEOs Agree Sustainability Is Their Responsibility
          </span>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-[#28B30E] text-black rounded-xl px-6 py-6 flex flex-col justify-between 
                     transition-transform duration-300 transform hover:scale-105 hover:shadow-xl h-full"
          data-aos="fade-up"
          data-aos-delay="100"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-5xl font-bold">3X</span>
          <span className="text-base mt-2 text-[#2D2D2D]">
            ESG High Performers Deliver A Higher Total Shareholder Return
          </span>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="bg-[#F6F6F6] text-[#28B30E] rounded-xl px-6 py-6 flex flex-col justify-between 
                     transition-transform duration-300 transform hover:scale-105 hover:shadow-xl h-full"
          data-aos="fade-up"
          data-aos-delay="200"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-5xl font-bold">37%</span>
          <span className="text-base mt-2 text-[#239C0C]">
            Of The World's Largest Companies Have A Public Net Zero Target.
            Nearly Are Off Track
          </span>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="bg-[#2D2D2D] text-white rounded-xl px-6 py-6 flex flex-col justify-between text-right 
                     transition-transform duration-300 transform hover:scale-105 hover:shadow-xl h-full"
          data-aos="fade-up"
          data-aos-delay="300"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-5xl font-bold">18%</span>
          <span className="text-base mt-2 text-[#E2E2E2]">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Of Companies Are
            Cutting Emissions Fast Enough To Reach Net Zero By 2050
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card;
