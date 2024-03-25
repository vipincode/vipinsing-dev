import Banner from '@/components/shared/banner'
import { currentUser } from '@/lib/current-user'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import SocialsIcon from '@/components/shared/socials-icon'

export default async function AboutPage() {
  const session = await currentUser()
  return (
    <section className="min-h-screen">
      <Banner
        className="bg-[url('/assets/jpg/banner-bg-pc.jpg')] bg-cover"
        bannerHeading={`Hello, I am Vipin}`}
        bannerDescription="Nice to meet you!"
        textAlign="left"
      />
      <div className="grid grid-cols-12 container min-h-full">
        <div className="col-span-3 relative">
          <div className="w-full p-[30px] border border-muted absolute top-[-100px] left-0 rounded-md bg-background">
            <div className="flex flex-col items-center">
              {session && (
                <Avatar className="w-[100px] h-[100px]">
                  <AvatarImage src={session?.image!} />
                  <AvatarFallback className="text-3xl">{session?.name?.slice(0, 1)}</AvatarFallback>
                </Avatar>
              )}
              <div className="pt-4 text-center">
                {session && <h3 className="text-[28px] font-medium">{session?.name}</h3>}
                <small className="text-xs uppercase text-gray-500 dark:text-gray-200">Frontend Developer</small>
              </div>
            </div>
            <div className="mt-[50px]">
              <h3 className="text-[16px] font-medium text-gray-500 dark:text-primary">Skills</h3>
              <ul className="flex flex-wrap gap-2 mt-4">
                <li className="bg-gray-200 text-gray-500 dark:bg-primary dark:text-white inline-block px-3 py-1 rounded-full text-xs">
                  React
                </li>
                <li className="bg-gray-200 text-gray-500 dark:bg-primary dark:text-white inline-block px-3 py-1 rounded-full text-xs">
                  Next.js
                </li>
                <li className="bg-gray-200 text-gray-500 dark:bg-primary dark:text-white inline-block px-3 py-1 rounded-full text-xs">
                  JavaScript
                </li>
                <li className="bg-gray-200 text-gray-500 dark:bg-primary dark:text-white inline-block px-3 py-1 rounded-full text-xs">
                  CSS
                </li>
                <li className="bg-gray-200 text-gray-500 dark:bg-primary dark:text-white inline-block px-3 py-1 rounded-full text-xs">
                  SCSS
                </li>
              </ul>
            </div>
            <div className="mt-10 mb-4">
              <SocialsIcon className="justify-start" />
            </div>
          </div>
        </div>
        <div className="col-span-9 p-[30px]">
          <article>
            <h2 className="text-2xl mb-4">About Me</h2>
            <p className="text-sm leading-[30px] tracking-wider font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, nesciunt similique ratione distinctio
              provident fuga pariatur consequatur hic ad. Quae sed voluptatibus cumque sapiente! Nobis qui quidem
              laborum eum corporis?
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
