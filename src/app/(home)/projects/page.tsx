import Banner from '@/components/shared/banner'

export default function ProjectPage() {
  return (
    <section className="min-h-screen">
      <Banner
        className="bg-[url('/assets/jpg/banner-bg-pc.jpg')] bg-cover"
        bannerHeading="Projects"
        bannerDescription="My Projects"
      />
    </section>
  )
}
