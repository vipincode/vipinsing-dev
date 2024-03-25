import Footer from '@/components/shared/footer'
import { ChildProps } from '@/types'

export default function HomeRootLayout({ children }: ChildProps) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
