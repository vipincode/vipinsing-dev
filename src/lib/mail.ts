import { Resend } from 'resend'
import { VerificationEmailTemplate } from '@email/verification-email'

const resend = new Resend(process.env.RESEND_API_KEY)

const domain = process.env.NEXT_PUBLIC_APP_URL

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/new-password?token=${token}`
  await resend.emails.send({
    from: 'support@vipincodelabs.com',
    to: email,
    subject: 'Reset your password',
    html: `<p><a href="${resetLink}">here</a> to reset password</p>`,
  })
}

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/new-verification?token=${token}`
  await resend.emails.send({
    from: 'support@vipincodelabs.com',
    to: email,
    subject: 'Confirm your email',
    react: VerificationEmailTemplate({ email, confirmLink }) as unknown as string,
  })
}
