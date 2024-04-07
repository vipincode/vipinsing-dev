import ProjectCard from '@/components/shared/project-card'
import prisma from '@/config/db'

export default async function Projects() {
  const data = await prisma.projects.findMany({})
  return (
    <div className="mb-[180px]">
      <div className="h-[300vh] mt-[-100vh]">
        <div className="sticky top-0 h-screen text-primary dark:text-white flex justify-center items-center">
          <div className="container">
            <h2 className="text-[42px] font-bold text-center mb-10">Projects</h2>
            <div className="grid grid-cols-4 gap-6">
              {data.map((item) => (
                <ProjectCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
