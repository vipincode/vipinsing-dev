import Banner from '@/components/shared/banner'
import SocialsIcon from '@/components/shared/socials-icon'
import UserImage from '@/components/shared/user-image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import prisma from '@/config/db'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function AboutPage() {
  const data = await prisma.profile.findFirst({
    where: {
      id: '66080b3b328490d7371d5812',
    },
    include: {
      skills: true,
    },
  })

  return (
    <section className="min-h-screen">
      <Banner
        className="bg-[url('/assets/jpg/banner-bg-pc.jpg')] bg-cover"
        bannerHeading={`Hello, I am Vipin`}
        bannerDescription={data?.bannerTitle!}
        textAlign="left"
      />
      {data && (
        <div className="grid grid-cols-12 container min-h-full">
          <div className="col-span-3 relative">
            <div className="w-full p-[30px] border border-muted absolute top-[-100px] left-0 rounded-md bg-background">
              <div className="flex flex-col items-center">
                {!data.image && (
                  <Avatar className="w-[100px] h-[100px]">
                    <AvatarImage src={''} />
                    <AvatarFallback className="text-3xl">V</AvatarFallback>
                  </Avatar>
                )}
                {data.image && <UserImage url={data.image} />}
                <div className="pt-4 text-center">
                  <h3 className="text-[28px] font-medium">{data.name}</h3>
                  <small className="text-xs uppercase text-gray-500 dark:text-gray-200">{data.designation}</small>
                </div>
              </div>
              <div className="mt-[50px]">
                <h3 className="text-[16px] font-medium text-gray-500 dark:text-primary">Skills</h3>
                <ul className="flex flex-wrap gap-2 mt-4">
                  {data?.skills.length > 0 &&
                    data?.skills.map((skill) => {
                      return skill.name.map((item) => (
                        <li
                          className="bg-gray-200 text-gray-500 dark:bg-primary dark:text-white inline-block px-3 py-1 rounded-full text-xs"
                          key={item}
                        >
                          {item}
                        </li>
                      ))
                    })}
                </ul>
              </div>
              <div className="mt-10 mb-4">
                <SocialsIcon className="justify-start" />
              </div>
            </div>
          </div>
          <div className="col-span-9 p-[30px]">
            <article className="profile-info">
              <h2 className="text-2xl mb-4">{data.profileTitle}</h2>
              <div className="bio-text">{<MDXRemote source={data.bio || ''} />}</div>
            </article>
          </div>
        </div>
      )}
    </section>
  )
}
