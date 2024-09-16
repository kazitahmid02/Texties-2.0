import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Compliance component (Futuristic Redesign with White Background)
const Compliance = () => {
  return (
    <section className="relative w-full py-20 bg-white">
      {/* Title and Text Section */}
      <motion.div
        variants={textVariant()}
        className="flex flex-col items-center justify-center space-y-4 px-6"
      >
        <h2 className="text-3xl md:text-5xl text-gray-800 font-extrabold tracking-tight">
          STANDARDS & COMPLIANCES
        </h2>
        <span className="text-lg md:text-xl text-gray-600 font-medium">
          WE CARE FOR THE WORLD
        </span>
        <span className="text-base md:text-lg text-gray-500 font-light">
          Compliance Certificates
        </span>
      </motion.div>

      {/* Interactive Image Section */}
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 1)}
        className="mt-12 flex justify-center"
      >
        <motion.img
          src="https://res.cloudinary.com/drvkbxl0q/image/upload/v1726515625/21_xbsrez.png"
          alt="Compliance Image"
          className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-3xl shadow-xl transform transition-transform duration-700 ease-in-out hover:scale-105"
          style={{
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          }}
        />
      </motion.div>

      {/* Futuristic Elements */}
     

      {/* Subtle Motion Blur Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle, rgba(255,255,255,0.1) 20%, rgba(0,0,0,0.1) 100%)] z-[-1]" />
    </section>
  );
};

export default SectionWrapper(Compliance, "compliance");
