import React from 'react'
import { motion } from 'framer-motion'

import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'

// this component show the partners section
const Capabilities = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
      {/* Insert the two images here */}
      <motion.div variants={textVariant()}>
        <h2
          className={`text-4xl md:text-6xl font-bold text-start tracking-widest text-black-100`}
        >
          OUR MANUFACTURING CAPABILITIES
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className='mx-auto text-black-100 text-[17px] px-3 text-sm md:text-base w-screen max-w-screen-lg my-20'
      >
        <div className='md:my-12 flex items-center space-x-4 text-2xl md:text-6xl font-semibold md:font-medium'>
          <div className='bg-black p-4 rounded-sm text-white md:py-10 w-24 h-24 flex flex-col items-center justify-center'>
            <span className='text-4xl'>10+</span>
          </div>
          <p className='underline underline-offset-4 text-2xl font-bold'>
            PARTNERS
          </p>
        </div>

        <div className='my-5 md:my-12 flex items-center space-x-4 text-2xl md:text-6xl font-semibold md:font-medium'>
          <div className='bg-black p-4 rounded-sm text-white md:py-10 w-24 h-24 flex flex-col items-center justify-center'>
            <span className='text-3xl'>200+</span>
          </div>
          <p className='underline underline-offset-4 text-2xl font-bold'>
            PRODUCTION LINES
          </p>
        </div>

        <div className='my-5 md:my-12 flex items-center space-x-4 text-2xl md:text-6xl font-semibold md:font-medium'>
          <div className='bg-black p-4 rounded-sm text-white md:py-10 w-24 h-24 flex flex-col items-center justify-center'>
            <span className='text-base text-center font-bold'>
              upto <br /> 200K <br /> pcs/month
            </span>
          </div>
          <p className='underline underline-offset-4 text-2xl font-bold'>
            CAPACITY
          </p>
        </div>
      </motion.div>

      {/* Insert the image here */}
    </section>
  )
}

export default SectionWrapper(Capabilities, 'Capabilities')
