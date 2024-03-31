'use client'
import { createSkills } from '@/actions/dashboard/about-me'
import FormError from '@/components/shared/form-error'
import FormSuccess from '@/components/shared/form-success'
import InputTags from '@/components/shared/input-tags'
import { Button } from '@/components/ui/button'
import { routes } from '@/config/routes'
import { SkillsSchema } from '@/schema/auth-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import BackToButton from '../shared/back-to-button'

export default function SkillsForm() {
  const [tags, setTags] = useState<string[]>([])
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof SkillsSchema>>({
    resolver: zodResolver(SkillsSchema),
    defaultValues: {
      skills: [],
    },
  })

  const handleTagsChange = (newTags: string[]) => {
    setTags(newTags)
  }

  const onSubmit = (values: z.infer<typeof SkillsSchema>) => {
    setError('')
    setSuccess('')
    if (tags.length === 0) {
      setError('Please enter at least one skill tag.')
      return
    }
    startTransition(() => {
      createSkills({ ...values, skills: tags }).then((data) => {
        setError(data.error)
        setSuccess(data.success)
      })
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <BackToButton className="pl-0" href={routes.admin.about} label="Back to about" />
      </div>
      <div className="space-y-2">
        <label htmlFor="skill" className="text-lg">
          Add Skills
        </label>
        <InputTags initialValue={tags} onChange={handleTagsChange} placeholder="Enter skills" />
      </div>
      <FormError message={error} />
      <FormSuccess message={success} />
      <Button onClick={form.handleSubmit(onSubmit)}>{isPending ? 'Creating skills...' : '+ Create Skills'}</Button>
    </div>
  )
}
