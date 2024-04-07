import { ThemeButton } from '@/components/theme/theme-button'
import { routes } from '@/config/routes'
import { currentUser } from '@/lib/current-user'
import Link from 'next/link'
import UserMenu from '@/components/shared/user-menu'
import UserLinks from './user-links'

export const HeroNavbar = async () => {
  const user = await currentUser()
  return (
    <header className="px-5 py-2 dark:bg-background light:bg-white border-b border-primary/10 h-[80px] flex items-center">
      <nav className="flex justify-between items-center container">
        <Link href={routes.homePage} className="text-[26px] tracking-wide font-bold text-primary">
          Vipin Singh
        </Link>
        <ul className="flex items-center gap-8">
          <li>
            <ThemeButton />
          </li>
          <UserLinks />
          {!user && (
            <li className="dark:text-slate-500 hover:text-primary text-sm">
              <Link href={routes.auth.signIn}>Sign In</Link>
            </li>
          )}
          {user && (
            <li>
              <UserMenu />
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}
