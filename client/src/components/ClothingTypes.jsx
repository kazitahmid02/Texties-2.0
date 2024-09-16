import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const clothingItems = [
  {
    title: "Casual Wear",
    description: "Comfortable and stylish casual wear for everyday use. Designed with the latest trends in mind and made from high-quality materials.",
    image: "https://res.cloudinary.com/drvkbxl0q/image/upload/v1726014368/19_bcurru.png",
  },
  {
    title: "Formal Wear",
    description: "Elegant and sophisticated formal wear for special occasions. Tailored to perfection with premium fabrics and meticulous attention to detail.",
    image: "https://res.cloudinary.com/drvkbxl0q/image/upload/v1726014368/19_bcurru.png",
  },
  {
    title: "Sportswear",
    description: "High-performance sportswear designed for both comfort and functionality. Perfect for athletes and fitness enthusiasts seeking durable and stylish options.",
    image: "https://res.cloudinary.com/drvkbxl0q/image/upload/v1726014368/19_bcurru.png",
  },
  {
    title: "Sportswear",
    description: "High-performance sportswear designed for both comfort and functionality. Perfect for athletes and fitness enthusiasts seeking durable and stylish options.",
    image: "https://res.cloudinary.com/drvkbxl0q/image/upload/v1726014368/19_bcurru.png",
  },
  {
    title: "Sportswear",
    description: "High-performance sportswear designed for both comfort and functionality. Perfect for athletes and fitness enthusiasts seeking durable and stylish options.",
    image: "https://res.cloudinary.com/drvkbxl0q/image/upload/v1726014368/19_bcurru.png",
  },
  {
    title: "Sportswear",
    description: "High-performance sportswear designed for both comfort and functionality. Perfect for athletes and fitness enthusiasts seeking durable and stylish options.",
    image: "https://res.cloudinary.com/drvkbxl0q/image/upload/v1726014368/19_bcurru.png",
  },
  
];

const ClothingTypes = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % clothingItems.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + clothingItems.length) % clothingItems.length);
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div variants={textVariant()} className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          <span className="text-3xl md:text-5xl font-semibold block">
            Our Clothing Range
          </span>
          Explore Our Collections
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Discover our diverse range of clothing types, designed to meet all your fashion needs. From casual wear to formal attire, we have something for everyone.
        </p>
      </motion.div>

      <div className="relative mx-auto ">
        <div className="carousel-container overflow-hidden">
          <div className="carousel-slide flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {clothingItems.map((item, index) => (
              <div key={index} className="carousel-item flex-shrink-5 w-full flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-inner flex flex-col justify-between"
                  style={{ height: '400px',  }} // Fixed height for all items
                >
                  <div className="relative w-full h-1/2 mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col flex-grow justify-center text-center">
                    <h3 className="text-black text-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-inner"
        >
          &#10094;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-inner"
        >
          &#10095;
        </button>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {clothingItems.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 bg-gray-400 rounded-full cursor-pointer ${currentSlide === index ? 'bg-gray-800' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(ClothingTypes, "clothing-types");
