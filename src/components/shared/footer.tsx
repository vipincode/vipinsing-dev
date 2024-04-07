import SocialsIcon from '@/components/shared/socials-icon'
import { routes } from '@/config/routes'
import Link from 'next/link'
import SectionBorder from './section-border'

export default function Footer() {
  return (
    <footer>
      <SectionBorder />
      <div className="container py-10">
        <div className="flex justify-center items-center flex-col gap-[30px] min-h-[100px]">
          <div className="flex items-center gap-6">
            <Link
              className="text-sm font-light leading-9 text-gray-500 dark:text-slate-500 hover:text-primary"
              href={routes.homePage}
            >
              Home
            </Link>
            <Link
              className="text-sm font-light leading-9 text-gray-500 dark:text-slate-500 hover:text-primary"
              href={routes.about}
            >
              About
            </Link>
            <Link
              className="text-sm font-light leading-9 text-gray-500 dark:text-slate-500 hover:text-primary"
              href={routes.projects}
            >
              Project
            </Link>
            <Link
              className="text-sm font-light leading-9 text-gray-500 dark:text-slate-500 hover:text-primary"
              href={routes.blogs}
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
      <div className="py-8">
        <div className="container flex justify-between items-center">
          <p className="text-xs dark:text-slate-500 tracking-wider font-light">
            <span className="text-primary dark:text-slate-500 text-base">&copy; </span>
            {new Date().getFullYear()} all right reserved.
          </p>
          <SocialsIcon size={16} />
        </div>
      </div>
    </footer>
  )
}
