import SocialsIcon from '@/components/shared/socials-icon'
import { Button } from '@/components/ui/button'
import { routes } from '@/config/routes'
import Link from 'next/link'

export default function HeroIntro() {
  return (
    <section>
      <div className="grid grid-cols-2 mb-[100px]">
        <div className="border-t border-primary/50"></div>
        <div className="border-t border-muted relative">
          <div className="absolute left-[60%] 2xl:left-[45%] translate-x-[-50%] top-[-18px]">
            <div className="w-full bg-secondary px-2 py-1 rounded-md">
              <SocialsIcon size={24} />
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-[100px]">
        <article className="max-w-[60%] mx-auto text-center px-[26px]">
          <h2 className="text-[38px] font-bold leading-[68px] text-primary">Me</h2>
          <p className="text-[18px] text-gray-500 dark:text-gray-300 leading-[42px] font-normal">
            As a seasoned developer with 5 years of CSS and SCSS expertise and 2 years of React experience, I&apos;ve
            honed my skills in crafting visually appealing and responsive user interfaces. My familiarity with UI
            libraries has equipped me to create elegant and efficient designs
          </p>
          <Button variant="link" className="text-[12px] uppercase tracking-widest mt-6">
            <Link href={routes.about}> Know more</Link>
          </Button>
        </article>
      </div>
    </section>
  )
}
