'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function HeroAbout() {
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ['start end', 'end end'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0])

  return (
    <section>
      <div className="relative mb-[100px]">
        <motion.div ref={videoContainerRef} style={{ opacity }} className="absolute top-0 left-0 w-full h-[200vh]">
          <video className="w-full sticky top-0 opacity-85" autoPlay loop muted preload="none">
            <source src="/video/about-video.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <div className="relative z-10 min-h-[100svh] flex items-center justify-center">
          <motion.article
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileInView="visible"
            viewport={{ amount: 0.9 }}
            exit="hidden"
            animate="hidden"
            className="h-full w-full flex items-center container py-[60px] px-[50px]"
          >
            <div className="w-full max-w-[80%] mx-auto text-center">
              <h2 className="text-[60px] leading-[74px] font-semibold text-white mb-8">
                I create beautiful websites for small businesses and start-ups.
              </h2>
              <p className="text-[21px] font-light leading-[42px] my-3 text-white">
                With four years of experience in UI design and website development, I specialize in creating visually
                stunning and user-friendly interfaces. Leveraging a deep understanding of design principles and modern
                technologies like React and Next.js.
              </p>

              <p className="text-[21px] font-light leading-[42px] my-3 text-white">
                I craft responsive web applications that seamlessly blend aesthetics and functionality. Whether
                it&apos;s building interactive interfaces, optimizing performance, or solving complex challenges, I
                thrive on turning ideas into reality.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
