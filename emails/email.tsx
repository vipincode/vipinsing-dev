import * as React from 'react';
import { Tailwind, Html, Body, Container, Text, Link, Column, Row, Section } from '@react-email/components';

interface UrlProps {
  name: string;
  email: string;
  message: string;
}

export function Email({ name, email, message }: UrlProps) {
  return (
    <Html lang="en">
      <Tailwind>
        <Body className="bg-primary-100">
          <Container>
            <Section>
              <Row>
                <Column>
                  <Text className="text-3xl font-bold">Name:</Text>
                </Column>
                <Column>
                  <Text className="text-xl font-bold">{name}</Text>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Text className="text-3xl font-bold">Email:</Text>
                </Column>
                <Column>
                  <Text className="text-xl font-bold">{email}</Text>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Text className="text-3xl font-bold">Message:</Text>
                </Column>
                <Column>
                  <Text className="text-xl font-bold">{message}</Text>
                </Column>
              </Row>
            </Section>
            <Link href="https://www.vipinsingh.dev">www.vipinsingh.dev</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
