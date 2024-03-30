import { Skeleton } from '@/components/ui/skeleton'

export default function AboutFormSkelton() {
  return (
    <>
      <Skeleton className=" w-[160px] h-[38px] mb-3 rounded-md" />
      <div className="grid grid-cols-2 gap-6">
        <Skeleton className=" w-full h-[38px] mt-3 rounded-md" />
        <Skeleton className=" w-full h-[38px] mt-3 rounded-md" />
        <Skeleton className=" w-full h-[38px] mt-3 rounded-md" />
        <Skeleton className=" w-full h-[38px] mt-3 rounded-md" />
      </div>
      <Skeleton className=" w-full mt-6 h-[350px] rounded-md" />
      <Skeleton className=" w-[110px] h-[38px] mt-10 rounded-md" />
    </>
  )
}
