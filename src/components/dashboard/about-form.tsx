'use client'
import { aboutMe } from '@/actions/dashboard/about-me'
import FormError from '@/components/shared/form-error'
import FormSuccess from '@/components/shared/form-success'
import ImageUpload from '@/components/shared/upload/image-upload'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { AboutMeSchema } from '@/schema/auth-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import 'easymde/dist/easymde.min.css'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import SimpleMDE from 'react-simplemde-editor'
import { z } from 'zod'

export default function AboutForm() {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [publicId, setPublicId] = useState('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof AboutMeSchema>>({
    resolver: zodResolver(AboutMeSchema),
    defaultValues: {
      name: '',
      image: '',
      bannerTitle: '',
      profileTitle: '',
      designation: '',
      bio: '',
    },
  })

  console.log(publicId)
  const onSubmit = (values: z.infer<typeof AboutMeSchema>) => {
    setError('')
    setSuccess('')
    startTransition(() => {
      values.image = publicId
      aboutMe(values).then((data) => {
        setError(data.error)
        setSuccess(data.success)
        form.reset()
      })
    })
  }

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex justify-between">
          <h1 className="text-3xl text-primary dark:text-gray-200 mb-6">Add Bio</h1>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} type="text" disabled={isPending} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bannerTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Banner Title</FormLabel>
                <FormControl>
                  <Input placeholder="Banner Title" {...field} type="text" disabled={isPending} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="profileTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile Title</FormLabel>
                <FormControl>
                  <Input placeholder="Profile Title" {...field} type="text" disabled={isPending} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="designation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Designation</FormLabel>
                <FormControl>
                  <Input placeholder="Job title" {...field} type="text" disabled={isPending} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormItem>
            <FormLabel>
              Profile Image <small className="italic text-muted font-thin">(Optional)</small>
            </FormLabel>
            <ImageUpload publicId={publicId} setPublicId={setPublicId} />
          </FormItem>
          <FormItem>
            <FormLabel>
              Skills <small className="italic text-muted font-thin">(Optional)</small>
            </FormLabel>
            {/* component */}
          </FormItem>
        </div>
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <SimpleMDE placeholder="Description" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button type="submit">{isPending ? 'Submitting...' : '+ Submit'}</Button>
      </form>
    </Form>
  )
}
