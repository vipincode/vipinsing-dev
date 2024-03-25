import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { routes } from '@/config/routes'
import { currentUser } from '@/lib/current-user'
import { UserRole } from '@prisma/client'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import LogoutButton from '@/components/auth/logout-button'

export default async function UserMenu() {
  const user = await currentUser()
  return (
    <Menubar className="border-none p-0">
      <MenubarMenu>
        <MenubarTrigger className="p-0 data-[state=open]:bg-transparent focus:bg-transparent cursor-pointer">
          <Avatar>
            <AvatarImage src={user?.image as string} />
            <AvatarFallback>{user?.name?.slice(0, 1)}</AvatarFallback>
          </Avatar>
        </MenubarTrigger>
        <MenubarContent align="end">
          <MenubarItem>
            <div>
              <small className="uppercase">Welcome!</small>
              <p>{user?.email}</p>
            </div>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            {user?.role === UserRole.USER && <Link href={routes.user.settings}>Settings</Link>}
            {user?.role === UserRole.ADMIN && <Link href={routes.admin.settings}>Settings</Link>}
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <LogoutButton>
              <span className="flex items-center gap-[6px]">
                <LogOut size={18} /> Logout
              </span>
            </LogoutButton>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
