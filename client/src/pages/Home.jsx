import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store'
import { CustomButton } from '../components'
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'
import { Link } from 'react-router-dom'

const Home = () => {
  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <Link to='/' className='text-3xl font-semibold'>
              <img src="./back.png" alt="Texties Logo" className="hover:scale-105 transition-transform" style={{ width: '50px', height: 'auto' }} />
            </Link>
          </motion.header>

          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text' style={{ fontSize: '3rem', lineHeight: '1.2', '@media (max-width: 767px)': { fontSize: '2rem', lineHeight: '1.5' } }}>
                LET'S <br className='xl:block hidden' /> DESIGN IT!
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className='flex flex-col gap-5 items-center sm:items-start' // Center items on small devices, start on larger devices
            >
              <div className="bg-black rounded-lg shadow-lg p-4">
                <p className='max-w-md font-normal text-white text-base'>
                Design your one-of-a-kind shirt using our cutting-edge 3D customization tool.Let your<strong> creativity flow </strong>and <strong>craft</strong> your distinctive <strong>style</strong>.{' '}
                Tap the button below to begin!<br />   <br />📢PLEASE NOTE: The AI feature is currently not functioning, but will be implemented soon!
                </p>
              </div>
              
              
              <CustomButton
                type='filled'
                title='Start'
                handleClick={() => (state.intro = false)}
                customStyles='w-fit px-4 py-2.5 font-bold text-white bg-black hover:bg-yellow-500 hover:text-black hover:scale-105 transition-transform'
              />


            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home
