export default function HeroAbout() {
  return (
    <section>
      <div className="relative mb-[100px] bg-primary">
        <video className="w-full" autoPlay loop muted preload="none">
          <source src="/video/about-video.mp4" type="video/mp4" />
        </video>
        <div className=" absolute top-0 left-0 w-full h-full bg-primary dark:bg-background opacity-65">
          <article className="h-full w-full flex items-center container py-[60px] px-[50px]">
            <div className="max-w-[68%] opacity-100">
              <h2 className="text-[60px] leading-[74px] font-medium text-white mb-8">
                I create beautiful websites for small businesses and start-ups to help them reach bigger audiences
              </h2>
              <p className="text-[21px] font-light leading-[42px] my-3 text-white">
                As a passionate frontend developer, I specialize in creating delightful user experiences using React and
                Next.js. With a keen eye for design and a love for clean code.
              </p>
              <p className="text-[21px] font-light leading-[42px] my-3 text-white">
                I craft responsive web applications that seamlessly blend aesthetics and functionality. Whether
                it&apos;s building interactive interfaces, optimizing performance, or solving complex challenges, I
                thrive on turning ideas into reality.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
