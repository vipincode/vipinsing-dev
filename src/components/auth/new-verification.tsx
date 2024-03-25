'use client'
import { newVerification } from '@/actions/auth/new-verification'
import { routes } from '@/config/routes'
import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners'
import FormError from '@/components/shared/form-error'
import FormSuccess from '@/components/shared/form-success'
import AuthWrapper from '@/components/auth/auth-wrapper'

export default function NewVerificationForm() {
  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()
  const searchPrams = useSearchParams()
  const token = searchPrams.get('token')

  const onSubmit = useCallback(() => {
    if (success || error) return
    if (!token) {
      setError('Missing Token')
      return
    }
    newVerification(token)
      .then((data) => {
        setSuccess(data.success)
        setError(data.error)
      })
      .catch(() => {
        setError('Something went wrong!')
      })
  }, [token, success, error])

  useEffect(() => {
    onSubmit()
  }, [onSubmit])

  return (
    <AuthWrapper
      headerLabel="Confirm your verification"
      backButtonHref={routes.auth.signIn}
      backButtonLabel="Back to Login"
    >
      <div className="flex items-center w-full justify-center">
        {!success && !error && <BeatLoader />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </AuthWrapper>
  )
}
