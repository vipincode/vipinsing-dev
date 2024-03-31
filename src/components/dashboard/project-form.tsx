'use client'

import { createProjects } from '@/actions/projects/create-projects'
import FormError from '@/components/shared/form-error'
import ImageUpload from '@/components/shared/upload/image-upload'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ProjectsSchema } from '@/schema/auth-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import 'easymde/dist/easymde.min.css'
import { Plus } from 'lucide-react'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import SimpleMDE from 'react-simplemde-editor'
import { z } from 'zod'
import FormSuccess from '../shared/form-success'

export default function ProjectForm() {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [publicId, setPublicId] = useState('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof ProjectsSchema>>({
    resolver: zodResolver(ProjectsSchema),
    defaultValues: {
      name: '',
      image: '',
      url: '',
      title: '',
      shortDescription: '',
      description: '',
    },
  })
  const onSubmit = (values: z.infer<typeof ProjectsSchema>) => {
    setError('')
    setSuccess('')
    startTransition(() => {
      values.image = publicId
      createProjects(values).then((data) => {
        setError(data.error)
        setSuccess(data.success)
        form.reset()
      })
    })
  }
  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Title</FormLabel>
              <FormControl>
                <Input placeholder="Project title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project url</FormLabel>
              <FormControl>
                <Input placeholder="https://www.project-url.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-[50%]">
          <FormItem>
            <FormLabel>
              Project Image <small className="italic text-muted font-thin">(Optional)</small>
            </FormLabel>
            <ImageUpload publicId={publicId} setPublicId={setPublicId} />
          </FormItem>
        </div>
        <FormField
          control={form.control}
          name="shortDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Short Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Short description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <SimpleMDE placeholder="Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button type="submit">
          <Plus /> {isPending ? 'Creating...' : 'Create Project'}
        </Button>
      </form>
    </Form>
  )
}
