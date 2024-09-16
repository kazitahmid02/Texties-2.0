import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Sample team data
const teamMembers = [
  {
    name: "AKM JAMAL UDDIN",
    title: "Managing Director",
    description:
      "Veteran visionary with a proven track record spanning three decades, spearheading triumphant ventures in the realms of RMG, real estate, and financial institutions, shaping industries with strategic foresight and unwavering dedication.",
    image: "./22.png",
  },
  {
    name: "JASIR JAMAL",
    title: "Head of Partnerships",
    description:
      "Cultivated years of hands-on experience in finance within a prominent Dubai-based multibillion firm, complemented by a track record of successful forays into the apparel industry and astute real estate investments across lucrative markets in the UK and the US.",
    image: "https://texties.net/23.png",
  },
  {
    name: "SHAHRIAR TAHMID",
    title: "Head of Operations",
    description:
      "Experienced professional with over 5 years of dedicated involvement in industrial sustainability within the apparel manufacturing sector, including successful engagements in government projects aimed at enhancing industrial efficiency.",
    image: "./24.png",
  },
  {
    name: "KAZI TAHMID",
    title: "IT Project Manager",
    description:
      "Driven by a fervor for streamlining IT project workflows, fortified by a wealth of experience in managing various projects within New York's bustling real estate market, and a robust entrepreneurial background. Proficient in maneuvering the intricacies of IT operations, leading initiatives such as website development and in-house computer systems.",
    image: "./25.png",
  },
  {
    name: "BEN STODOLNIC",
    title: "Head of Sales",
    description:
      "Experience in luxury watch and garment production. Comprehensive understanding of the latest trends, leveraging insider knowledge to stay ahead of the curve. Expertise lies in driving sales and cultivating strong, long-lasting relationships.",
    image: "./26.png",
  },
  {
    name: "SHAFI SALEH",
    title: "Creative Lead",
    description:
      "Immersed in the intricate landscape of the fashion industry, showcasing profound expertise cultivated through the strategic direction of two active ventures.",
    image: "./27.png",
  },
];

const Team = () => {
  return (
    <section className="container mx-auto px-4 py-16 ">
      <motion.div variants={textVariant()} className="text-center mb-12 ">
        <h2 className="text-4xl md:text-6xl font-bold text-black">
          <span className="text-3xl md:text-5xl font-semibold block">
            YOUR PARTNERS IN PROGRESS,
          </span>{" "}
          MEET OUR TEAM!
        </h2>
      </motion.div>

      <motion.div
  variants={fadeIn("", "", 0.1, 1)}
  className="flex flex-wrap gap-8 justify-center  "
>
  {teamMembers.map((member, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.05 }}
      className="rounded-3xl shadow-3xl drop-shadow-2xl 
      border-double border-black relative p-7 w-full max-w-xs"
      style={{
        background: 'radial-gradient(circle, rgba(24,24,24,1) 0%, rgba(88,88,88,1) 64%, rgba(0,0,0,1) 100%)',

        }}
    >
      <motion.div
        className="
      border-3xl border-black relative w-full h-[230px] mb-4  overflow-hidden"
        
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <h3 className="text-white text-xl font-bold mb-2 text-center">
        {member.name}
      </h3>
      <p className=" rounded bg-white text-sm md:text-base text-black shadow-inner font-extrabold text-center mb-2">
        {member.title}
      </p>
      <p className="rounded-b-lg bg-black p-5 text-xs md:text-sm text-white text-center">
        {member.description}
      </p>
    </motion.div>
  ))}
</motion.div>
    </section>
  );
};

export default SectionWrapper(Team, "team");
