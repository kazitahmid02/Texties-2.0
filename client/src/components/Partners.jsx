import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'

// this component show the partners section
const Partners = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
      {/* Insert the two images here */}
      <motion.div variants={textVariant()}>
        <h2
          className={`text-4xl font-bold text-start tracking-widest text-black-100`}
        >
          OUR MANUFACTURING PARTNERS
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-black-100 text-[17px] max-w-3xl leading-loose italic '
      >
        "Emotion weaves through every thread as our partners, the heart of our
        business, craft our story from raw materials to the final cut and sew.
        Rooted in trust and shared passion, our journey unfolds in Dhaka, where
        production thrives, and our procurement team finds a home. Together, we
        create beyond products- forging a connection that echoes with the
        vibrant spirit of Bangladesh."
      </motion.p>
      {/* Insert the image here */}
    </section>
  )
}

export default SectionWrapper(Partners, 'partners')
