'use client'
import VipinSingh from '@/assets/jpg/vipin-singh-blue.jpg'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeoImageCard() {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      className="relative"
    >
      <motion.div
        whileHover={{
          x: -26,
          y: 20,
          skewX: 2,
        }}
        className="relative z-10"
      >
        <Image src={VipinSingh} alt="Vipin Singh" width={300} height={400} />
      </motion.div>
      <motion.div
        whileHover={{
          x: 20,
          skewX: -2,
        }}
        className="w-[300px] h-[400px] border-8 border-primary absolute top-10 right-[-40px]"
      ></motion.div>
      <motion.div
        whileHover={{
          x: -60,
          skewX: -3,
        }}
        className="w-[300px] h-[400px] border-8 border-purple-600 absolute top-[20px] right-[-20px]"
      ></motion.div>
    </motion.div>
  )
}
