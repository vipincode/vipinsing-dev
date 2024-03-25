import { ChildProps } from '@/types'
import { HeroNavbar } from '@/components/home/hero-navbar'
import Footer from '@/components/shared/footer'

export default function HomeRootLayout({ children }: ChildProps) {
  return (
    <>
      <HeroNavbar />
      <>{children}</>
      <Footer />
    </>
  )
}
