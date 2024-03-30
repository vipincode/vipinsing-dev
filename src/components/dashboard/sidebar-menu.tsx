'use client'
import LogoutButton from '@/components/auth/logout-button'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AdminNavLinks } from './nav-links'

export default function SidebarMenu() {
  const pathname = usePathname()
  return (
    <div className="col-span-2 ">
      <Card className="rounded-none sticky top-0">
        <div className="flex flex-col justify-between min-h-screen">
          <div>
            <div className="text-center py-2 mt-2">
              <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-primary">Dashboard</span>
            </div>
            <div className="p-4 space-y-6">
              {AdminNavLinks.map((link) => (
                <Button
                  asChild
                  className="w-full justify-start"
                  variant={pathname === link.route ? 'default' : 'outline'}
                  key={link.label}
                >
                  <Link href={link.route}>
                    {link.icon}
                    {link.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          <div className="pb-4 px-4">
            <LogoutButton>
              <Button className="w-full justify-start" variant="ghost">
                <LogOut size={18} className="mr-2" />
                Logout
              </Button>
            </LogoutButton>
          </div>
        </div>
      </Card>
    </div>
  )
}
