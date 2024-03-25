'use client'

import { signin } from '@/actions/auth/sign-in'
import AuthWrapper from '@/components/auth/auth-wrapper'
import FormError from '@/components/shared/form-error'
import FormSuccess from '@/components/shared/form-success'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { routes } from '@/config/routes'
import { SignInSchema } from '@/schema/auth-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useSearchParams } from 'next/navigation'

export default function SignIn() {
  const searchParams = useSearchParams()
  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked' ? 'Email is already is use with different provider!' : ''

  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (values: z.infer<typeof SignInSchema>) => {
    setError('')
    setSuccess('')
    startTransition(() => {
      signin(values)
        .then((data) => {
          if (data?.error) {
            form.reset()
            setError(data?.error)
          }
          if (data?.success) {
            form.reset()
            setSuccess(data?.success)
          }
        })
        .catch(() => setError('Something went wrong'))
    })
  }

  return (
    <AuthWrapper
      headerLabel="Welcome back"
      backButtonHref={routes.auth.signUp}
      backButtonLabel="Don't have an account"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input disabled={isPending} placeholder="john.doe@example.com" {...field} type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input disabled={isPending} placeholder="******" {...field} type="password" />
                  </FormControl>
                  <Button size="sm" variant="link" asChild className="px-0 font-normal">
                    <Link href={routes.auth.forgotPassword}>Forgot Password?</Link>
                  </Button>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error || urlError} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? 'Login...' : 'Login'}
          </Button>
        </form>
      </Form>
    </AuthWrapper>
  )
}
