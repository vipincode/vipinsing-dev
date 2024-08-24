import { Html, Body, Container, Text, Link, Preview } from '@react-email/components';
import * as React from 'react';

const WelcomeTemplate = (props: any) => {
  return (
    <Html>
      <Preview>Welcome to board</Preview>
      <Body style={body}>
        <Container>
          <Text style={heading}>Hello</Text>
          <Link href="https://www.vipinsingh.dev">www.vipinsingh.dev</Link>
        </Container>
      </Body>
    </Html>
  );
};

const body: React.CSSProperties = {
  backgroundColor: '#fff',
};
const heading: React.CSSProperties = {
  fontSize: '32px',
};

export default WelcomeTemplate;
