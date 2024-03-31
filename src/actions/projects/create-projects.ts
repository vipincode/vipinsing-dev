'use server'
import prisma from '@/config/db'
import { ProjectsSchema } from '@/schema/auth-schema'
import { z } from 'zod'

export const createProjects = async (values: z.infer<typeof ProjectsSchema>) => {
  const validatedField = ProjectsSchema.safeParse(values)

  if (!validatedField.success) {
    return { error: 'Invalid data' }
  }

  const { name, description, shortDescription, title, url, image } = validatedField.data

  try {
    await prisma.projects.create({
      data: {
        name,
        description,
        shortDescription,
        title,
        url,
        image,
      },
    })
    return { success: 'Congrats, your project created successfully.' }
  } catch (error) {
    return { error: 'An error occurred while creating project.' }
  }
}
