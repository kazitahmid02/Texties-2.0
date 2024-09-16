import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

// Sample data for testimonials
const testimonials = [
  {
    testimonial: "Fast changes in the market are easy because of Texties' quick supply.",
    name: "John McGriskin",
    designation: "Project Manager",
    company: "Real New York",
    image: "https://res.cloudinary.com/drvkbxl0q/image/upload/v1710694876/Texties%20Assets/JB_lcvnop.jpg"
  },
  {
    testimonial: "We love Texties! Their responsible production aligns with our customers' values, boosting our brand. Plus, the digital passport makes tracking products a breeze, adding transparency we appreciate.",
    name: "Justin DiGiulio",
    designation: "CEO",
    company: "DiGiulio Group",
    image: "https://res.cloudinary.com/drvkbxl0q/image/upload/v1710694877/Texties%20Assets/Justin_apar8l.jpg"
  },
  {
    testimonial: "Sales happen quicker with Texties. They deliver and respond fast.",
    name: "Brian Mostofa",
    designation: "CEO",
    company: "Midtown MoDa",
    image: "https://res.cloudinary.com/drvkbxl0q/image/upload/v1710694874/Texties%20Assets/Brian_evnpk1.jpg"
  }
  // Add more testimonials here
];

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const CustomerReviews = () => {
  return (
    <div className='mt-12 bg-gray-400 rounded-[20px]'>
      <div className='bg-grey rounded-2xl p-8 min-h-[300px]'>
        <motion.div variants={textVariant()}>
          <div className="flex justify-center mb-4">
            <img 
              src="customers.png" 
              alt="Customers"
              style={{ width: '60px', height: 'auto' }} // Adjust size if needed
            />
          </div>
          <h1 
            className='rounded bg-black text-center font-extrabold'
            style={{
              fontSize: '2rem',
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >
            What Our Clients Are Saying:
          </h1>
        </motion.div>
      </div>
      <div className='-mt-20 pb-14 px-8 flex flex-wrap gap-7'>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={index} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(CustomerReviews, 'customerReviews');
