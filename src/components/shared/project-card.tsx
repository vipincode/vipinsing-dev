'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { routes } from '@/config/routes'
import { Projects } from '@prisma/client'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'

export default function ProjectCard({ data }: { data: Projects }) {
  return (
    <Card>
      <Link href={data.url!} target="_blank" className="p-3 block">
        {data.image && <CldImage src={data.image} width={400} height={400} alt={data.title!} />}
      </Link>
      <CardHeader className="pt-0">
        <CardTitle>
          <Link href={data.url!} target="_blank">
            {data.title}
          </Link>
        </CardTitle>
        <CardDescription>{data.tag}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{data.shortDescription}</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`${routes.projects}/${data.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
