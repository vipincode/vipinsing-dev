'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { formatDate } from '@/lib/date'
import { Projects } from '@prisma/client'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import Markdown from 'markdown-to-jsx'

export default function ProjectDetail({ data }: { data: Projects }) {
  return (
    <div className="my-6">
      <div className="grid grid-cols-8 gap-8 container mx-auto">
        <div className="col-span-5">
          <Link href={data.url!} target="_blank">
            <CldImage src={data.image!} width={1920} height={300} alt={data.title!} />
          </Link>
          <div className="mt-10">
            <h2 className="text-[32px] font-bold text-primary mb-4">Description:</h2>
            <div>
              <Markdown options={{ forceBlock: true }}>{data.description as string}</Markdown>
            </div>
          </div>
          <div className="my-10">
            <Button asChild>
              <Link href={data.url!} target="_blank">
                View Demo
              </Link>
            </Button>
          </div>
        </div>
        <div className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>{data.title}</CardTitle>
              <CardDescription className="flex items-center gap-3">
                <strong>Develop by:</strong> {data.name}
                <strong>Create At:</strong> {formatDate(data.createdAt)}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <p>{data.shortDescription}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={data.url!} target="_blank">
                  View Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
