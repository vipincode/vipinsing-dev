import Banner from '@/components/shared/banner'
import ProjectCard from '@/components/shared/project-card'
import prisma from '@/config/db'

export default async function ProjectPage() {
  const data = await prisma.projects.findMany({})
  return (
    <section className="min-h-screen">
      <Banner
        className="bg-[url('/assets/jpg/banner-bg-pc.jpg')] bg-cover"
        bannerHeading="Projects"
        bannerDescription="My Projects"
      />
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-4 gap-6">
          {data && data.map((item) => <ProjectCard key={item.id} data={item} />)}
        </div>
      </div>
    </section>
  )
}
