'use client'
import LinkedInLearning from '@/assets/png/linkedin-learning.png'
import UdemyLearning from '@/assets/svg/logo-udemy.svg'
import TeamTreeHouse from '@/assets/svg/teamtreehouse.svg'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function Certification() {
  const certificationRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: certificationRef,
  })
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0])

  return (
    <section className="my-[100px]" ref={certificationRef}>
      <motion.div style={{ opacity }} className="text-center pb-10">
        <h2 className="text-[38px] font-bold leading-[68px] text-primary">
          Learning & <span className="text-purple-600">Certification</span>
        </h2>
      </motion.div>
      <motion.div style={{ opacity }} className="grid grid-cols-3 items-center max-w-[800px] mx-auto pb-20">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          whileInView="visible"
          viewport={{ amount: 0.9 }}
          exit="hidden"
          animate="hidden"
          className="flex justify-center items-center"
        >
          <Image width={142} height={50} src={LinkedInLearning} alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center items-center"
        >
          <Image width={142} height={50} src={TeamTreeHouse} alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center items-center"
        >
          <Image width={100} height={50} src={UdemyLearning} alt="" />
        </motion.div>
      </motion.div>
    </section>
  )
}
