import React from "react";
import { Form, Container, Heading } from "rendition";
import Layout from "../components/Layout";
import Nav from "../components/Nav";

const schema = {
  type: "object",
  properties: {
    Name: {
      type: "string",
    },
    Email: { type: "string" },
    Description: {
      type: "string",
    },
  },
};

const uiSchema = {
  Description: {
    "ui:options": {
      rows: 5,
    },
    "ui:widget": "textarea",
  },
};

const SecondPage = () => (
  <Layout>
    <Container p="0rem 1.5rem">
      <Nav />
      <Container textAlign="center">
        <Heading.h1
          color="black"
          fontSize={["1.5rem", "1.5rem", "3rem", "3rem"]}
        >
          Thank you for reach out. How can I help you?
        </Heading.h1>
      </Container>
      <Container width={["100%", "60%", "60%", "50%"]}>
        <Form schema={schema} uiSchema={uiSchema} />
      </Container>
    </Container>
  </Layout>
);

export default SecondPage;
