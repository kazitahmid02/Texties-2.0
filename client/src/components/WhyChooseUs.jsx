import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const whyChooseUsData = [
  {
    title: 'Flexible and Low MOQ',
    description: 'Struggling with limited options and high costs due to high MOQs from your suppliers? Texties Fashion Sourcing is your solution. We offer small-batch fashion production without the high costs, so you can create what you want, when you want, without compromise. Stay flexible, innovative, and competitive with us!',
    image: 'https://res.cloudinary.com/drvkbxl0q/image/upload/v1725410763/30_oplvr5.png'
  },
  {
    title: 'One Stop Solution',
    description: 'Garment manufacturing is complex, from fabric sourcing to final logistics. We offer a seamless, end-to-end solution, connecting fashion brands with a trusted network of suppliers, manufacturers, and logistics partners worldwide. Let us handle every step, ensuring premium quality and efficiency at every stage.',
    image: 'https://res.cloudinary.com/drvkbxl0q/image/upload/v1725410869/4_b1vb00.png'
  },
  {
    title: 'Organic Sustainable',
    description: 'We prioritize organic and sustainable practices, backed by certifications like OEKO-TEX Standard 100 and Cradle to Cradle. Our eco-friendly materials, including organic cotton, bamboo, and recycled fibers, are sourced responsibly, ensuring every product reflects our commitment to quality, sustainability, and ethical production.',
    image: 'https://res.cloudinary.com/drvkbxl0q/image/upload/v1725761861/logo-no-background_nconed.png'
  },
 
  {
    title: 'Responsible Ethical',
    description: 'We are deeply committed to ethical practices and sustainability, partnering with global NGOs to champion responsible farming and eco-friendly products. Our philosophy centers on improving the environment and society, ensuring that every step of our production process aligns with the highest international standards',
    image: 'https://res.cloudinary.com/drvkbxl0q/image/upload/v1725411142/10_soxdtk.png'
  },
  {
    title: 'Struggling with Sampling Challenges?',
    description: "You're not alone! Over 82% of fashion brands find sampling to be a major hurdle, dealing with everything from high costs and time-consuming processes to coordination headaches and sustainability concerns. At Texties, we’re here to change that. Let us simplify your sampling process with tailored solutions designed to help your brand shine. Ready to tackle those challenges? Reach out and let’s make it happen together!",
    image: 'https://res.cloudinary.com/drvkbxl0q/image/upload/v1725411327/6_ldqvu1.png'
  },
];

const WhyChooseUsCard = ({ title, description, image }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "black",
        color: "#fff",
        padding: '20px',
        borderRadius: '10px',
        marginLeft: '-150px',  // Add margin to space the text box away from the circle
        marginRight: '-150px', // Add margin to space the text box away from the circle
      }}
      contentArrowStyle={{ borderRight: "10px solid white" }}
      iconStyle={{
        background: "#ec6f00",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        width: '250px',
        height: '250px',
        overflow: 'hidden',
        position: 'absolute',
        left: '41%',
        marginTop: '-30px',
        
      }}
      icon={
        <div className='w-full h-full flex justify-center items-center'>
          <img
            src={image}
            alt={title}
            className='object-cover w-full h-full rounded-full'
          />
        </div>
      }
    >
      <h3 className='text-[#ffffff] text-[18px] font-bold'>{title}</h3> {/* Adjusted font size */}
      <p className='text-[#fff] text-[12px] font-semibold'>{description}</p> {/* Adjusted font size */}
    </VerticalTimelineElement>
  );
};

const WhyChooseUs = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-white text-center text-[16px] font-semibold">
          Why Choose Us
        </p>
        <h2 className="text-center text-white text-[30px] font-bold">
          What Sets Us Apart
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor="#ffffff">
          {whyChooseUsData.map((data, index) => (
            <WhyChooseUsCard
              key={`why-choose-us-${index}`}
              title={data.title}
              description={data.description}
              image={data.image}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(WhyChooseUs, "whychooseus");
