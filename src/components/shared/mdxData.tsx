import { MDXRemote } from 'next-mdx-remote/rsc'
import { Projects } from '@prisma/client'

export default function mdxData({ data }: { data: Projects }) {
  return <MDXRemote source={data.description || ''} />
}
