import { Tailwind, Html, Body, Container, Text, Link, Preview } from '@react-email/components';
import * as React from 'react';

const WelcomeTemplateTailwind = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome to board</Preview>
      <Tailwind>
        <Body className="bg-primary-100">
          <Container>
            <Text className="text-3xl font-bold">Hello {name}</Text>
            <Link href="https://www.vipinsingh.dev">www.vipinsingh.dev</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body: React.CSSProperties = {
  backgroundColor: '#fff',
};
const heading: React.CSSProperties = {
  fontSize: '32px',
};

export default WelcomeTemplateTailwind;
