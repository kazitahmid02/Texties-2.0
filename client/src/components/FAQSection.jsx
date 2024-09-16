import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const questions = [
  {
    question: "What services does Texties offer? ",
    answer: "Texties connects clothing brands and wholesalers with reliable manufacturers. We handle apparel sourcing, quality control, supply chain management, and logistics to ensure timely and high-quality delivery. "
  },
  {
    question: "How does the sourcing process work?",
    answer: "Once you share your requirements (product type, quantity, quality standards), we match you with a suitable manufacturer. We manage the communication, ensure the production meets your expectations, and oversee logistics for delivery. "
  },
  {
    question: "Why should I choose manufacturers from Bangladesh?",
    answer: "Bangladesh is renowned for its high-quality, affordable apparel manufacturing. It offers competitive pricing and a skilled workforce and is one of the largest garment producers in the world. In fact, Bangladesh is the second-largest global apparel exporter, contributing over $34 billion annually to the industry. By partnering with manufacturers in Bangladesh, you get top-quality products at lower costs while supporting a robust, efficient supply chain."
  },
  {
    question: " What is the typical lead time for orders? ",
    answer: "Lead times vary depending on the complexity and size of the order. On average, production can take between 60-90 days, but this can be discussed and customized based on your project’s requirements."
  },
  {
    question: " What are the minimum order quantities (MOQs)? ",
    answer: "Minimum order quantities depend on the manufacturer and the type of apparel. We work with various manufacturers, so we can typically accommodate various MOQs to suit your needs, ranging from Micro Orders (<1,000 units) to Macro Orders (>100,000 units) and everything in between."
  },
  {
    question: "Can I get product samples before placing a bulk order? ",
    answer: "Yes, we can arrange for samples to be produced and shipped to you before committing to a full production run. This way, you can ensure the quality and make any necessary adjustments before scaling up to larger orders. We also have representatives covering North America, including both coasts of the US, Europe centered in the UK, and the Middle East, ensuring support and smooth communication wherever you are located. "
  }
];

const FAQCard = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="relative bg-black p-6 rounded-2xl shadow-3xl hover:drop-shadow-3xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
    >
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-xl font-semibold text-white md:text-2xl">{question}</h3>
        <span className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>
      {isOpen && <p className="mt-4 text-white text-sm md:text-base">{answer}</p>}
    </motion.div>
  );
};

const FAQSection = () => {
  return (
    <section className="py-14 bg-gray-100 rounded-3xl shadow-inner-card">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-gray-600 text-sm md:text-base`}>Frequently Asked Questions</p>
        <h2 className={`${styles.sectionHeadText} text-center text-gray-800 text-2xl md:text-4xl`}>FAQ</h2>
      </motion.div>

      <div className="mt-12 flex flex-col items-center gap-8 px-4 md:px-8">
        {questions.map((item, index) => (
          <FAQCard key={index} {...item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(FAQSection, "faq");
