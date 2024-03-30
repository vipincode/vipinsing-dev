'use server'

import { AboutMeSchema } from '@/schema/auth-schema'
import { z } from 'zod'
import prisma from '@/config/db'

export const aboutMe = async (values: z.infer<typeof AboutMeSchema>) => {
  const validatedField = AboutMeSchema.safeParse(values)

  if (!validatedField.success) {
    return { error: 'Invalid data' }
  }

  const { name, bannerTitle, designation, profileTitle, image, bio } = validatedField.data
  const id = '66080b3b328490d7371d5812'
  try {
    let result
    if (id) {
      result = await prisma.profile.update({
        where: { id },
        data: {
          name,
          bannerTitle,
          designation,
          profileTitle,
          image,
          bio,
        },
      })
    } else {
      result = await prisma.profile.create({
        data: {
          name,
          bannerTitle,
          designation,
          profileTitle,
          image,
          bio,
        },
      })
    }

    return { success: 'Congrats, your data was created/updated successfully.', data: result }
  } catch (error) {
    return { error: 'An error occurred while creating/updating data.' }
  }
}
