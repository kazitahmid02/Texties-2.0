import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// This is the about section
const About = () => {
  return (
    <section className="flex flex-row-reverse py-20">
      {/* Insert the image here below the about us */}
      <div className="md:flex md:items-center  w-[50vw]">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-white-100 text-[17px] max-w-3xl leading-loose"
        >
          Welcome to <b>Texties</b>! We're your global <b>fashion partner</b>, making sourcing simple. With offices in <b>London</b>, <b>New York</b>, <b>Los Angeles</b>, and <b>Dhaka</b>, we're here to ensure you get the best <b>garments</b>. Our commitment to <b>quality</b>, <b>ethics</b>, and <b>sustainability</b> means you can trust us every step of the way. Whether you're just starting or already established, <b>Texties</b> is your reliable <b>sourcing solution</b>. Let's <b>collaborate</b> and shape the future of <b>fashion</b> together!

        </motion.p>
      </div>

      {/* This will take half of the screen so that you can insert the other image on the other half */}
      <motion.div
        variants={textVariant()}
        className="w-[50vw] flex items-center justify-center "
      >
        <h2 className={`${styles.sectionHeadText} font-light -rotate-90`}>
          ABOUT US.
        </h2>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(About, "about");
