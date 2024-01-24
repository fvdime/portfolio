import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type EmailTemplateProps = {
  message: string;
  sender: string;
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
  sender,
}) => (
  <Html>
    <Head />
    <Preview>New message from my portfolio site!!!</Preview>
    <Tailwind>
      <Body className="bg-white text-black">
        <Container key="email-container">
          <Section
            key="email-section"
            className="bg-gray-50 border-gray-200 my-12 px-12 py-4 rounded-md"
          >
            <Heading key="email-heading" className="leading-tight">
              New message from the contact form
            </Heading>
            <Text key="email-sender" className="text-lg font-semibold">
              From: {sender}
            </Text>
            <Hr key="email-hr" />
            <Text key="email-message">{message}</Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
