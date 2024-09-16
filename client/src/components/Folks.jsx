import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Folk = ({ index }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`w-full my-8 flex gap-5 ${index % 2 === 0 ? 'ml-8' : ''}`}
  >
    {<img src="./public/4.png" alt="4" />} /* Display the image of the company or business you worked with */
    
  </motion.div>
)

const Folks = () => {
    return (
      <section style={{ position: "relative", textAlign: "center" }}>
        <motion.div
          variants={textVariant()}
          className="flex items-center justify-center flex-col"
        >
          <h2 className={`md:text-6xl text-4xl font-bold tracking-widest text-black-100`}>
            FINE FOLKS WE WORKED FOR:
          </h2>
         
        </motion.div>
  
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src="https://res.cloudinary.com/drvkbxl0q/image/upload/v1710692250/4_wnjvkp.png"
            alt="Folks"
            style={{ width: "100%", maxWidth: "800px" }}
          />
        </motion.div>
      </section>
    );
  };

export default SectionWrapper(Folks, 'folks')