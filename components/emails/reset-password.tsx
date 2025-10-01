import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface PasswordResetEmailProps {
  userName: string;
  passwordResetUrl: string;
}

const PasswordResetEmail = ({
  userName,
  passwordResetUrl,
}: PasswordResetEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>Reset your password - Action required</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-sm max-w-[600px] mx-auto p-[40px]">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[24px] font-bold text-gray-900 m-0">
                Password Reset Request
              </Heading>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                Hello {userName},
              </Text>

              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                We received a request to reset the password for your account. If
                you made this request, click the button below to create a new
                password.
              </Text>

              <Section className="text-center my-[32px]">
                <Button
                  href={passwordResetUrl}
                  className="bg-blue-600 text-white px-[24px] py-[12px] rounded-[8px] text-[16px] font-semibold no-underline box-border inline-block"
                >
                  Reset Password
                </Button>
              </Section>

              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                This link will expire in 24 hours for security reasons.
              </Text>

              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                If you didn't request a password reset, you can safely ignore
                this email. Your password will remain unchanged.
              </Text>
            </Section>

            {/* Security Notice */}
            <Section className="bg-gray-50 p-[20px] rounded-[8px] mb-[32px]">
              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[8px] font-semibold">
                Security Tips:
              </Text>
              <Text className="text-[14px] text-gray-600 leading-[20px] m-0">
                • Never share your password with anyone
                <br />
                • Use a strong, unique password
                <br />• Enable two-factor authentication if available
              </Text>
            </Section>

            {/* Alternative Link */}
            <Section className="mb-[32px]">
              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[8px]">
                If the button doesn't work, copy and paste this link into your
                browser:
              </Text>
              <Link
                href={passwordResetUrl}
                className="text-blue-600 text-[14px] break-all"
              >
                {passwordResetUrl}
              </Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default PasswordResetEmail;
