import Header from '@/components/dashboard/header'
import SidebarMenu from '@/components/dashboard/sidebar-menu'
import { ChildProps } from '@/types'

export default function DashboardRootLayout({ children }: ChildProps) {
  return (
    <div className="min-h-screen grid grid-cols-12">
      <SidebarMenu />
      <section className="col-span-10">
        <Header />
        <div className="p-6">{children}</div>
      </section>
    </div>
  )
}
