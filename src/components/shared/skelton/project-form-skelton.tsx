import { Skeleton } from '@/components/ui/skeleton'

export default function ProjectFormSkelton() {
  return (
    <div className="space-y-6">
      <Skeleton className="w-[160px] h-[38px] mb-3 rounded-md" />
      <Skeleton className="w-full h-[38px] mt-3 rounded-md" />
      <Skeleton className="w-full h-[38px] mt-3 rounded-md" />
      <Skeleton className="w-full h-[100px] mt-3 rounded-md" />
      <Skeleton className="w-full h-[300px] mt-10 rounded-md" />
    </div>
  )
}
