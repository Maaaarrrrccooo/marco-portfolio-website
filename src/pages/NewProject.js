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
    Type: {
      type: "string",
      oneOf: [
        { const: "10k-50k", title: "Php10,000 - Php 50,000" },
        { const: "51k-100k", title: "Php51,000 - Php 100,000" },
        { const: "101k+", title: "Php101k+" },
      ],
    },
    Budget: { type: "number" },
    Description: {
      title: "Additional details",
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
          I would love to hear about your project in mind.
        </Heading.h1>
      </Container>
      <Container width={["100%", "60%", "60%", "50%"]}>
        <Form schema={schema} uiSchema={uiSchema} />
      </Container>
    </Container>
  </Layout>
);

export default SecondPage;
