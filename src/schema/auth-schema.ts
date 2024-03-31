import * as z from 'zod'

export const SignUpSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Email is required' }),
  password: z.string().min(6, { message: 'Minimum (6) characters required' }),
})

export const SignInSchema = z.object({
  email: z.string().email({ message: 'Email is required' }),
  password: z.string().min(1, { message: 'Password is required' }),
  code: z.optional(z.string()),
})

export const ResetSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
})

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: 'Minimum 6 characters required',
  }),
})

export const AboutMeSchema = z.object({
  name: z.string().min(1, {
    message: 'Minimum 1 letter required',
  }),
  image: z.string().optional(),
  bannerTitle: z.string().min(1, {
    message: 'Minimum 3 letter required',
  }),
  profileTitle: z.string().min(1, {
    message: 'Minimum 3 letter required',
  }),
  designation: z.string().min(1, {
    message: 'Minimum 3 letter required',
  }),
  bio: z.string().min(6, {
    message: 'Minimum 6 characters required',
  }),
})

export const SkillsSchema = z.object({
  skills: z.array(z.string()).optional(),
  publicId: z.string().optional(),
})
