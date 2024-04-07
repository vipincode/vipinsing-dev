'use client'

import { createContact } from '@/actions/home/contact'
import FormError from '@/components/shared/form-error'
import FormSuccess from '@/components/shared/form-success'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ContactSchema } from '@/schema/auth-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function ContactMe() {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = (values: z.infer<typeof ContactSchema>) => {
    setError('')
    setSuccess('')
    startTransition(() => {
      createContact(values).then((data) => {
        setError(data.error)
        setSuccess(data.success)
        form.reset()
      })
    })
  }

  return (
    <section className="h-[200vh] mt-[-100vh]">
      <div className="sticky top-0 h-screen text-white mb-[100px] mx-auto lg:w-[75%] flex items-center justify-center">
        <div className="grid grid-cols-2">
          <div className="pr-5 h-full">
            <div className="pt-6">
              <h2 className="text-[38px] font-bold leading-[52px] text-primary">Have a question?</h2>
              <h2 className="text-[28px] font-bold leading-[52px] text-purple-600">Schedule a online meeting.</h2>
              <p className="text-gray-500 dark:text-slate-500">Let&apos;s create something amazing together!</p>
            </div>
          </div>
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary dark:text-slate-500">Name</FormLabel>
                      <FormControl>
                        <Input
                          className="text-slate-600"
                          placeholder="Your name"
                          {...field}
                          disabled={isPending}
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary dark:text-slate-500">Email</FormLabel>
                      <FormControl>
                        <Input
                          className="text-slate-600"
                          placeholder="Your email"
                          {...field}
                          disabled={isPending}
                          type="email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary dark:text-slate-500">Your Message</FormLabel>
                      <FormControl>
                        <Textarea className="text-slate-600" placeholder="Message" disabled={isPending} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button type="submit" className="min-w-[100px]" id="#contact">
                {isPending ? 'Sending...' : 'Send'}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}
