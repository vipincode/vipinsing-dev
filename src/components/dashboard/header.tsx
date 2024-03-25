import AdminBreadCrumb from '@/components/dashboard/admin-breadcrumb'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { currentUser } from '@/lib/current-user'

export default async function Header() {
  const user = await currentUser()
  return (
    <header className="bg-background border-b border-muted h-[60px] px-4 flex items-center">
      <div className="flex justify-between items-center flex-1">
        <div>
          <AdminBreadCrumb />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-light">{user?.name}</span>
          <Avatar>
            <AvatarImage src={user?.image!} />
            <AvatarFallback>{user?.name?.slice(0, 1)}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
