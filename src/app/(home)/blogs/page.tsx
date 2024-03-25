import Banner from '@/components/shared/banner'

export default function BlogsPage() {
  return (
    <section className="min-h-screen">
      <Banner
        className="bg-[url('/assets/jpg/banner-bg-pc.jpg')] bg-cover"
        bannerHeading="Blogs"
        bannerDescription="My Blogs"
      />
    </section>
  )
}
