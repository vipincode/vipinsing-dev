'use client'
import { routes } from '@/config/routes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Links = [
  {
    label: 'About',
    route: routes.about,
  },
  {
    label: 'Projects',
    route: routes.projects,
  },
  {
    label: 'Blogs',
    route: routes.blogs,
  },
]

export default function UserLinks() {
  const pathname = usePathname()
  return (
    <>
      {Links.map((link) => (
        <li
          key={link.label}
          className={`hover:text-primary text-sm ${link.route === pathname ? 'text-primary' : 'dark:text-blue-300'}`}
        >
          <Link href={link.route}>{link.label}</Link>
        </li>
      ))}
    </>
  )
}
