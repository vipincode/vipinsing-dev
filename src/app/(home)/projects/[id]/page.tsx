import ProjectDetail from '@/components/home/project/project-detail'
import prisma from '@/config/db'

export default async function ProjectDetailsPage({ params: { id } }: { params: { id: string } }) {
  const data = await prisma.projects.findFirst({
    where: {
      id,
    },
  })
  return (
    <div className="min-h-screen">
      {data && <ProjectDetail data={data} />}
      {!data && <div>No Details </div>}
    </div>
  )
}
