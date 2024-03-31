'use client'

import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import ImageUpload from '../shared/upload/image-upload'
import { useState, useTransition } from 'react'

export default function ProjectForm() {
  const [publicId, setPublicId] = useState('')
  const [isPending, startTransition] = useTransition()

  const form = useForm()
  const onSubmit = (values: any) => {
    console.log('values:', values)
  }
  return (
    <Form {...form}>
      <form className="space-y-6">
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

        <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
          <Plus /> Create Project
        </Button>
      </form>
    </Form>
  )
}
