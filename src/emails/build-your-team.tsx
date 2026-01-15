import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
} from "@react-email/components";

type BuildYourTeamProps = {
  fullName: string;
  email: string;
  companyName: string;
  phone: string;
  package: string;
  description: string;
};

export default function BuildYourTeam({
  fullName,
  email,
  companyName,
  phone,
  package: selectedPackage,
  description,
}: BuildYourTeamProps) {
  return (
    <Html>
      <Head />
      <Preview>New Build Your Team Request</Preview>

      <Body style={body}>
        <Container style={container}>
          <Heading style={heading}>Build Your Team Request</Heading>

          <Text style={paragraph}>
            You have received a new recruitment request with the following
            details:
          </Text>

          <Section>
            <Text>
              <strong>Full Name:</strong> {fullName}
            </Text>
            <Text>
              <strong>Email:</strong> {email}
            </Text>
            <Text>
              <strong>Company Name:</strong> {companyName}
            </Text>
            <Text>
              <strong>Phone Number:</strong> {phone}
            </Text>
            <Text>
              <strong>Package:</strong> {formatPackage(selectedPackage)}
            </Text>
          </Section>

          <Hr style={hr} />

          <Section>
            <Text style={label}>Description</Text>
            <Text style={descriptionStyle}>{description}</Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            This message was sent from your website recruitment form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

/* ------------------ Helpers ------------------ */
function formatPackage(value: string) {
  return value.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

/* ------------------ Styles ------------------ */
const body = {
  backgroundColor: "#f6f9fc",
  fontFamily: "Arial, sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  padding: "24px",
  borderRadius: "8px",
};

const heading = {
  fontSize: "22px",
  marginBottom: "16px",
};

const paragraph = {
  fontSize: "14px",
  color: "#333",
};

const label = {
  fontSize: "14px",
  fontWeight: "bold",
  marginBottom: "6px",
};

const descriptionStyle = {
  fontSize: "14px",
  lineHeight: "1.6",
  backgroundColor: "#f9f9f9",
  padding: "12px",
  borderRadius: "6px",
};

const hr = {
  margin: "20px 0",
};

const footer = {
  fontSize: "12px",
  color: "#888",
};

// import { Button, Html, Head, Body, Heading } from "@react-email/components";
// import * as React from "react";

// export default function BuildYourTeam(props: { name: string }) {
//   return (
//     <Html>
//       <Head />
//       <Body>
//         <Heading as="h1">{props.name}</Heading>
//         <Button
//           href="https://streetops.ng"
//           style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
//         >
//           hellow this is from street ops
//         </Button>
//       </Body>
//     </Html>
//   );
// }
