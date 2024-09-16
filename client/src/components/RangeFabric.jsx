import React from "react";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { Tilt } from 'react-tilt';
; // Import Tilt correctly


// Circular coin card component
// Circular coin card component with pop-out box on hover
const CircularCard = ({ image, label, description }) => {
  return (
    <div className="border-double border-black flex flex-col items-center mb-4 sm:ml-32 relative group">
      {/* Circular Card */}
      <div className="w-40 h-40 rounded-full bg-white flex justify-center items-center mb-2 shadow-lg border border-transparent transition-transform hover:scale-105">
        <img
          src={image}
          alt={label}
          className="w-32 h-32 object-cover rounded-full border border-transparent"
        />
      </div>

      {/* Pop-out box on hover */}
      <div
        className="absolute top-[-30px] left-0 w-56 p-4 bg-black text-white rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-[-15px] transition-all duration-300 ease-in-out z-10 shadow-lg"
        style={{
          transform: 'translateY(10px)',
        }}
      >
        <h3 className="text-lg font-bold mb-2">{label}</h3>
        <p className="text-sm">{description}</p>
      </div>

      <p className="text-center font-bold">{label}</p>
    </div>
  );
};

const RangeFabric = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg p-9 shadow-inner-card mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className="mb-16 text-center"
        >

          <div className="bg-black rounded p-4 "><h3 className="text-4xl md:text-6xl font-bold  tracking-widest text-white">
          RANGE OF FABRICS
          </h3>

          </div>
          
          <p className="sectionSubText text-black font-bold mt-11">Select 100% pure, organic, and sustainable fabrics from Texties, backed by globally recognized certifications. These premium materials ensure you receive only the finest quality, providing the confidence you need to create exceptional garment collections for your fashion brand. Our range of fabrics include:</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className="mx-auto text-black text-[17px] px-3 text-sm md:text-base mb-16"
        >
          <div className="flex xxs:flex-col lg:flex-row justify-around">
            <div className="flex flex-col xxs:justify-center lg:justify-start lg:space-y-20 text-lg">
              <div className="flex items-center justify-center">
                <h3 className="-rotate-90 font-bold ml-[-10px]">Woven</h3>
                <img src="./12.png" alt="Woven Fabric" className="w-60 h-41 ml-0" />
              </div>
              <div className="flex items-center justify-center">
                <h3 className="-rotate-90 font-bold">Knit</h3>
                <img src="./13.png" alt="Knit Fabric" className="w-60 h-50 ml-4" />
              </div>
            </div>
            <div className="grid grid-cols-7 gap-x-6 gap-y-6 font-bold lg:ml-24">
              <div className="xxs:col-span-7 sm:col-span-3 lg:col-span-2">
                <CircularCard image="./29.png" label="Cotton" description="Soft, breathable, and durable fabric used for everyday wear." />
              </div>
              <div className="xxs:col-span-7 sm:col-span-3 lg:col-span-2">
                <CircularCard image="./28.png" label="Organic Cotton" description="Eco-friendly alternative to traditional cotton." />
              </div>
              <div className="xxs:col-span-7 sm:col-span-3 lg:col-span-2">
                <CircularCard image="./30.png" label="Denim" description="Heavy-duty fabric ideal for jeans and jackets." />
              </div>
              <div className="xxs:col-span-7 sm:col-span-3 lg:col-span-2">
                <CircularCard image="./31.png" label="Bamboo Fabric" description="Sustainable fabric with natural softness and breathability." />
              </div>
              <div className="xxs:col-span-7 sm:col-span-3 lg:col-span-2">
                <CircularCard image="./32.png" label="Wool" description="Warm and insulating fabric perfect for colder climates." />
              </div>
              <div className="xxs:col-span-7 sm:col-span-3 lg:col-span-2">
                <CircularCard image="./33.png" label="Cashmere" description="Luxurious and soft fabric prized for its warmth." />
              </div>
              <div className="xxs:col-span-7 sm:col-span-3 lg:col-span-2">
                <CircularCard image="./34.png" label="Hemp" description="Durable and eco-friendly fabric with a natural feel." />
              </div>
              <div className="xxs:col-span-7 sm:col-span-3 lg:col-span-2">
                <CircularCard image="more.png" label="Much More!" description="Explore a variety of other sustainable fabrics we offer." />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(RangeFabric, "RangeFabric");
