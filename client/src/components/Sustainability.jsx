import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

// Sample data for sustainability
const sustainabilityData = {
  title: 'Sustainability in Action',
  content: 'Our commitment to sustainability goes beyond just using eco-friendly materials. We actively participate in reducing our carbon footprint, ensuring ethical production, and supporting recycling and waste management initiatives. Join us in making a positive impact on the planet.',
  image: 'https://res.cloudinary.com/drvkbxl0q/image/upload/v1725552354/5_bdhimt.png',
};

const Sustainability = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div variants={textVariant()} className="text-center mb-12">
        <h2 className="text-3xl font-bold text-black-100 mb-4">
          Sustainability
        </h2>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="text-gray-700 text-[17px] max-w-3xl mx-auto mb-8"
        >
          {sustainabilityData.content}
        </motion.p>
      </motion.div>

      <div className="flex justify-center">
        <div className="bg-tertiary p-5 rounded-2xl shadow-lg w-full max-w-lg">
          <div className="relative w-full h-[230px] mb-4">
            <img
              src={sustainabilityData.image}
              alt="Sustainability"
              className="w-full h-full object-cover rounded-2xl grayscale"
            />
          </div>

          <div>
            <h3 className="text-white text-xl font-bold mb-2">
              {sustainabilityData.title}
            </h3>
            <p className="text-gray-300">
              {sustainabilityData.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Sustainability, 'sustainability');
