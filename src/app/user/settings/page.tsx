import Banner from '@/components/shared/banner'
import { Card } from '@/components/ui/card'
import UserBreadCrumb from '@/components/user/user-breadcrumb'
import Link from 'next/link'

export default function UserSettingsPage() {
  return (
    <section className="min-h-screen">
      <header>
        <Banner
          className="bg-[url('/assets/jpg/banner-bg-pc.jpg')] bg-cover"
          bannerHeading="Settings"
          bannerDescription="Profile"
        />
      </header>
      <div className="container my-6">
        <div className="grid grid-cols-12">
          <Card className="col-span-2 min-h-[300px]">
            <ul className="p-4 space-y-6">
              <li className="text-sm">
                <Link href="#">Profile</Link>
              </li>
              <li className="text-sm">
                <Link href="#">Change Password</Link>
              </li>
            </ul>
          </Card>
          <div className="col-span-10 p-4">
            <UserBreadCrumb />
            <div className="pt-6 mt-4 border-t border-muted">Content</div>
          </div>
        </div>
      </div>
    </section>
  )
}
