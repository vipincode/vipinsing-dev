import { Skeleton } from '@/components/ui/skeleton'

export default function AboutFormSkelton() {
  return (
    <>
      <Skeleton className=" w-[160px] h-[30px] mt-3 rounded-md" />
      <Skeleton className=" w-full mt-6 h-[350px] rounded-md" />
      <Skeleton className=" w-[110px] h-[50px] mt-10 rounded-md" />
    </>
  )
}
