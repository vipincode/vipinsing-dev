import * as React from 'react'
import { Button, Html, Body, Text, Preview, Link, Container, Tailwind } from '@react-email/components'

interface EmailTemplateProps {
  email: string
  confirmLink: string
}

export const VerificationEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ email, confirmLink }) => {
  return (
    <Html>
      <Preview>Welcome to the board!</Preview>
      <Tailwind>
        <Body className="bg-slate-100">
          <Container>
            <Text className="font-bold text-3xl">Hello, please very your {email}</Text>
            <Button href={confirmLink} className="bg-blue-700 text-white rounded-md px-10 py-4">
              Verify
            </Button>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
