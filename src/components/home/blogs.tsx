import BlogCard from '@/components/shared/blog-card'

const data = [1, 2, 3]
export default async function MyBlogs() {
  return (
    <div className="mb-[180px]">
      <div className="h-[300vh] mt-[-100vh]">
        <div className="sticky top-0 h-screen bg-primary text-white flex justify-center items-center">
          <div className="container">
            <h2 className="text-[42px] font-bold text-center mb-10">Latest blogs</h2>
            <div className="grid grid-cols-4 gap-6">
              {data.map((item) => (
                <BlogCard key={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
