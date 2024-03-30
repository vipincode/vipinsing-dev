'use client'

import { CldImage } from 'next-cloudinary'

export default function UserImage({ url }: { url: string }) {
  return (
    <CldImage
      src={url}
      width={100}
      height={100}
      className="h-[100px] w-[100px] object-cover rounded-full"
      alt="Profile Image"
    />
  )
}
