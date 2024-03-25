import LinkedInLearning from '@/assets/png/linkedin-learning.png'
import TeamTreeHouse from '@/assets/svg/teamtreehouse.svg'
import UdemyLearning from '@/assets/svg/logo-udemy.svg'
import Image from 'next/image'
import SectionBorder from '@/components/shared/section-border'

export default function Certification() {
  return (
    <div className="mb-[100px]">
      <div className="text-center pb-20">
        <h2 className="text-[38px] font-bold leading-[68px] text-primary">
          Learning & <span className="text-purple-600">Certification</span>
        </h2>
      </div>
      <div className="grid grid-cols-3 items-center max-w-[800px] mx-auto">
        <div className="flex justify-center items-center">
          <Image width={142} height={50} src={LinkedInLearning} alt="" />
        </div>
        <div className="flex justify-center items-center">
          <Image width={142} height={50} src={TeamTreeHouse} alt="" />
        </div>
        <div className="flex justify-center items-center">
          <Image width={100} height={50} src={UdemyLearning} alt="" />
        </div>
      </div>
      <SectionBorder marginBottom="100px" marginTop="100px" />
    </div>
  )
}
