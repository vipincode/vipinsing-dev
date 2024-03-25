import HerpBlueSvg from '@/assets/svg/hero-blue-svg.svg'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex justify-center">
      <div className="grid grid-cols-12 container items-center">
        <div className="col-span-7">
          <h1 className="text-[18px] font-normal uppercase text-gray-500 dark:text-gray-300 mb-4 tracking-wider">
            Frontend Developer & Web designer
          </h1>
          <h3 className="text-[58px] capitalize font-semibold text-primary leading-[70px] mb-10 tracking-tight">
            I specialize in <br /> creating delightful <br /> user experiences using{' '}
            <span className="text-blue-700">React</span> and <span className="text-purple-700">Next.js</span>
          </h3>

          <Button type="submit" size="lg">
            Schedule a online meeting
          </Button>
        </div>
        <div className="flex justify-center items-center col-span-5">
          <Image src={HerpBlueSvg} alt="Hero image" width={600} height={600} />
        </div>
      </div>
    </section>
  )
}
