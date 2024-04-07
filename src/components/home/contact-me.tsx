'use client'

import { FormControl, Form, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '../ui/button'

export default function ContactMe() {
  const form = useForm()
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
            <form className="space-y-6">
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary dark:text-slate-500">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} type="text" />
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
                        <Input placeholder="Your email" {...field} type="email" />
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
                        <Textarea placeholder="Message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="min-w-[100px]" id="#contact">
                Send
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}
