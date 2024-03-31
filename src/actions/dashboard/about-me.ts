'use server'

import prisma from '@/config/db'
import { AboutMeSchema, SkillsSchema } from '@/schema/auth-schema'
import { z } from 'zod'

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

export const createSkills = async (values: z.infer<typeof SkillsSchema>) => {
  const validatedField = SkillsSchema.safeParse(values)

  if (!validatedField.success) {
    return { error: 'Invalid data' }
  }
  const { skills } = validatedField.data
  const id = '66090d6290e421709d9d9ad3'
  try {
    if (id) {
      await prisma.skills.update({
        where: { id: id },
        data: {
          name: skills,
        },
      })
    } else {
      await prisma.skills.create({
        data: {
          name: skills,
          profileId: '66080b3b328490d7371d5812',
        },
      })
    }

    return { success: 'Congrats, your skills added successfully.' }
  } catch (error) {
    return { error: 'Error creating skills' }
  }
}
