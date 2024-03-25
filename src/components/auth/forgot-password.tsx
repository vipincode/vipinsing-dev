'use client'

import { resetPassword } from '@/actions/auth/reset-password'
import AuthWrapper from '@/components/auth/auth-wrapper'
import FormError from '@/components/shared/form-error'
import FormSuccess from '@/components/shared/form-success'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { routes } from '@/config/routes'
import { ResetSchema } from '@/schema/auth-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function ForgotPassword() {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError('')
    setSuccess('')
    startTransition(() => {
      resetPassword(values).then((data) => {
        setError(data?.error)
        setSuccess(data?.success)
      })
    })
  }

  return (
    <AuthWrapper
      headerLabel="Forgot your password?"
      backButtonHref={routes.auth.signIn}
      backButtonLabel="Back to login"
    >
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" disabled={isPending} {...field} type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? 'Sending...' : 'Send reset email'}
          </Button>
        </form>
      </Form>
    </AuthWrapper>
  )
}
