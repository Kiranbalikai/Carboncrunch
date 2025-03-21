import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Features = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 30]); // subtle grid parallax

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="font-dm px-6 sm:px-8 md:px-16 ">
      <div className="mb-2">
        <span className="text-[#239C0C] font-bold text-xl ml-10 tracking-wide">
          FEATURES
        </span>
      </div>

      <h2 className="text-4xl md:text-6xl font-bold mb-8">
        <span className="text-[#FEAB4F] font-Aeon">Why </span>
        <span className="text-[#2D2D2D] font-Aeon">Carbon Crunch </span>
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#F5F5F8] p-6 rounded-xl"
        style={{ y }}
      >
        {[
          {
            img: "1.png",
            title: "Automated Data Collection",
            text: "Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting.",
          },
          {
            img: "5.png",
            title: "Monitoring & Reporting",
            text: "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.",
          },
          {
            img: "6.png",
            title: "Monitoring & Reporting",
            text: "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.",
          },
          {
            img: "3.png",
            title: "Simplified Certification Process",
            text: "Streamline your certification process with our simplified, automated solution, reducing complexity and ensuring faster compliance.",
          },
          {
            img: "2.png",
            title: "AI-Driven Insights",
            text: "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.",
          },
          {
            img: "2.png",
            title: "AI-Driven Insights",
            text: "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.",
          },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-8 rounded-lg"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <img src={feature.img} alt="" />
            </div>
            <h3 className="text-[22px] font-bold mb-3">{feature.title}</h3>
            <p className="text-[#2D2D2D] text-base">{feature.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Features;
