import React from 'react';
import { Button, Html, Body, Text, Preview, Link, Container, Tailwind } from '@react-email/components';

export default function WelcomeTemplate({ name }: { name: string }) {
  return (
    <Html>
      <Preview>Welcome to the board!</Preview>
      <Tailwind>
        <Body className='bg-slate-100'>
          <Container>
            <Text className='font-bold text-3xl'>Hello, {name}</Text>
            <Link href='http://vipincodelabs.com'>www.vipincodelabs.com</Link>
            <Button
              href='http://vipincodelabs.com'
              style={{ background: '#000', color: '#fff', padding: '12px 20px' }}
            >
              Click me
            </Button>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
