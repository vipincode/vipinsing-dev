'use client'
import HeoImageCard from '@/components/home/hero-image-card'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex justify-center">
      <div className="grid grid-cols-12 container items-center">
        <div className="col-span-7">
          <motion.div initial={{ opacity: 0, x: -120 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-[16px] font-normal uppercase text-primary/75 dark:text-gray-300 mb-4 tracking-wider">
              Frontend Developer & Web designer
            </h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -120 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h3 className="text-[58px] capitalize font-semibold text-primary leading-[70px] mb-10 tracking-tight">
              I specialize in <br /> creating delightful <br /> user experiences using{' '}
              <span className="text-blue-700">React</span> and <span className="text-purple-700">Next.js</span>
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="#contact"
              smooth={true}
              duration={500}
              href="#contact"
              className="bg-primary px-6 py-3 rounded-lg text-white inline-block"
            >
              Schedule a online meeting
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center col-span-5"
        >
          <HeoImageCard />
        </motion.div>
      </div>
    </section>
  )
}
