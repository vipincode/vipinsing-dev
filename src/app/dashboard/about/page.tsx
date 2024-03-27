import AboutFormSkelton from '@/components/shared/skelton/About-form-skelton'
import dynamic from 'next/dynamic'
const AboutForm = dynamic(() => import('@/components/dashboard/about-form'), {
  ssr: false,
  loading: () => <AboutFormSkelton />,
})

export default function AboutMe() {
  return <AboutForm />
}
