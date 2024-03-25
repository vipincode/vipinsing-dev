import ContactMe from '@/components/home/contact-me'
import Hero from '@/components/home/hero'
import HeroAbout from '@/components/home/hero-about'
import HeroIntro from '@/components/home/hero-intro'
import Certification from '@/components/shared/certification'

export default function Home() {
  return (
    <>
      <Hero />
      <HeroIntro />
      <HeroAbout />
      <Certification />
      <ContactMe />
    </>
  )
}
