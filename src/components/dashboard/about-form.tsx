'use client'
import { Button } from '@/components/ui/button'
import { AboutMeSchema } from '@/schema/auth-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'

export default function AboutForm() {
  const form = useForm<z.infer<typeof AboutMeSchema>>({
    resolver: zodResolver(AboutMeSchema),
    defaultValues: {
      bio: '',
    },
  })
  return (
    <div>
      <h1 className="text-3xl text-primary dark:text-gray-200 mb-6">Add Bio</h1>
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit((data) => console.log(data))}>
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <SimpleMDE placeholder="Description" {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}
