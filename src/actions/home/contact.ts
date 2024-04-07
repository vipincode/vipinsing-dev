'use server'
import prisma from '@/config/db'
import { ContactSchema } from '@/schema/auth-schema'
import { z } from 'zod'

export const createContact = async (values: z.infer<typeof ContactSchema>) => {
  const validatedField = ContactSchema.safeParse(values)

  if (!validatedField.success) {
    return { error: 'Invalid data!' }
  }

  const { name, email, message } = validatedField.data

  try {
    await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    })

    return { success: 'Thank you for contacting me!' }
  } catch (error) {
    return { error: 'Something went wrong, please try again!' }
  }
}
