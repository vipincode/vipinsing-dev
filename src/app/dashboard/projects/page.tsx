import ProjectFormSkelton from '@/components/shared/skelton/project-form-skelton'
import dynamic from 'next/dynamic'

const ProjectForm = dynamic(() => import('@/components/dashboard/project-form'), {
  ssr: false,
  loading: () => <ProjectFormSkelton />,
})

export default function ProjectPage() {
  return <ProjectForm />
}
