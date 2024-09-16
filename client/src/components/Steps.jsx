import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const StepCard = ({ index, title, content, image, totalSteps }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="relative flex flex-col"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-gray-400 p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="step_image"
            className="w-full h-full object-cover rounded-2xl grayscale"
          />
        </div>

        <div className="mt-5 flex flex-col min-h-[300px]"> {/* Ensure minimum height */}
          <h3 className="text-black font-bold text-[24px] mb-2">{title}</h3>
          <p className="text-black text-[14px] flex-grow">
            {content}
          </p>

          {/* Add step number with white color */}
          <div className="flex justify-center items-center mt-4">
            <span className="text-white font-bold text-[20px]">
              {totalSteps}
            </span>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Steps = () => {
  const sampleSteps = [
    {
      title: "Design and Development",
      content:
        "We help fashion brands of all sizes turn their ideas into reality with custom designs, 3D illustrations, detailed tech packs, fabric options, measurement charts, and patterns.",
      image:
        "https://res.cloudinary.com/drvkbxl0q/image/upload/v1725552354/5_bdhimt.png",
    },
    {
      title: "Prototyping and Sampling",
      content:
        "We source premium fabrics from our trusted network of suppliers and textile mills, providing an extensive range of certified organic, naturally dyed, recycled, and custom-printed materials tailored to your needs.",
      image:
        "https://res.cloudinary.com/drvkbxl0q/image/upload/v1725552870/2_rvqv4k.png",
    },
    {
      title: "Fabric & Raw Material Sourcing",
      content:
        "We source premium fabrics from our trusted network of suppliers and textile mills, providing an extensive range of certified organic, naturally dyed, recycled, and custom-printed materials tailored to your needs. Our network of skilled printers and dyers provides a wide range of services, including digital printing, screen printing, and sublimation.",
      image:
        "https://res.cloudinary.com/drvkbxl0q/image/upload/v1725552628/7_m747xk.png",
    },
    {
      title: "Execution",
      content:
        "Our extensive network of factories covers every type of apparel, from t-shirts and sweatshirts to jeans, dresses, kidswear, and beyond. We provide flexible MOQs and end-to-end production support, ensuring exceptional quality and seamless execution for all your garment needs.",
      image:
        "https://res.cloudinary.com/drvkbxl0q/image/upload/v1725553557/9_dnfsnt.png",
    },
    {
      title: "Quality Assurance",
      content:
        "At Texties, we uphold the highest standards of quality through rigorous checks at every stage of the manufacturing process. We also invite buyers to engage third-party quality control experts to ensure that every detail meets their exact specifications, guaranteeing exceptional results.",
      image:
        "https://res.cloudinary.com/drvkbxl0q/image/upload/v1725411142/10_soxdtk.png",
    },
    {
      title: "Shipping",
      content:
        "At Texties, we deliver comprehensive global logistics solutions with an emphasis on speedy lead times and rapid turnaround. Our efficient network handles every aspect of shipping, ensuring your products arrive on time, wherever you need them.",
      image:
        "https://res.cloudinary.com/drvkbxl0q/image/upload/v1725553941/11_qqjlsq.png",
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`} style={{ color: "#ffffff" }}>
          How It All Blends in
        </p>
        <h2 className={`${styles.sectionHeadText}`} style={{ color: "white" }}>
          Steps Of Our Process:
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]"
        >
          Here are the steps involved in our process. Each step is explained with a brief description, showcasing how we manage and deliver our projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {sampleSteps.map((step, index) => (
          <StepCard
            key={`step-${index}`}
            index={index}
            totalSteps={index + 1}
            {...step}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Steps, "steps");
