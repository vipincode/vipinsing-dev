'use client'
import { FadeIn } from '@/components/shared/fade-in'

export default function Skills() {
  return (
    <div className="mx-auto lg:w-[692px] relative z-20 text-[40px] text-white font-bold space-y-12 pb-36">
      <h2 className="text-[62px] font-bold text-center mb-14">My Skills</h2>
      <FadeIn>
        <p>React and Next.js for frontend development.</p>
      </FadeIn>
      <FadeIn>
        <p>React Query and Reduxtoolkit for state management.</p>
      </FadeIn>
      <FadeIn>
        <p>TypeScript and JavaScript.</p>
      </FadeIn>
      <FadeIn>
        <p>SCSS, CSS, Tailwind create interactive ui.</p>
      </FadeIn>
      <FadeIn>
        <p>Wordpress and Elementor.</p>
      </FadeIn>
      <FadeIn>
        <p>Framer Motion and GreenShock animation.</p>
      </FadeIn>
      <FadeIn>
        <p>Prisma, MongoDb and SQL.</p>
      </FadeIn>
      <FadeIn>
        <p>Git and GitHub.</p>
      </FadeIn>
      <FadeIn>
        <p>PSD to HTML | React, Figma to HTML | React.</p>
      </FadeIn>
    </div>
  )
}
