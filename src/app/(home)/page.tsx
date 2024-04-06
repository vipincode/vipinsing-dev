import MyBlogs from '@/components/home/blogs'
import ContactMe from '@/components/home/contact-me'
import Hero from '@/components/home/hero'
import HeroAbout from '@/components/home/hero-about'
import Projects from '@/components/home/projects'
import Skills from '@/components/home/skills'
import Certification from '@/components/shared/certification'
import SectionBorder from '@/components/shared/section-border'

export default function Home() {
  return (
    <>
      <Hero />
      <SectionBorder />
      <Certification />
      <div className="relative z-20 bg-primary">
        <HeroAbout />
        <Skills />
      </div>
      <div className="relative z-10">
        <Projects />
        <MyBlogs />
      </div>
      <ContactMe />
    </>
  )
}
