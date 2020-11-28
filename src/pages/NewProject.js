import React, { useState } from "react";
import { Form, Container, Heading, notifications } from "rendition";
import emailjs from "emailjs-com";
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
        { const: "webapp", title: "Web app" },
        { const: "mobileapp", title: "Mobile App" },
        {
          const: "fullblown",
          title: "Full system design + web app + mobile app",
        },
      ],
    },
    Budget: {
      type: "string",
      oneOf: [
        { const: "10k-50k", title: "Php10,000 - Php 50,000" },
        { const: "51k-100k", title: "Php51,000 - Php 100,000" },
        { const: "101k+", title: "Php101k+" },
      ],
    },
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

const SecondPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    setLoading(true);
    const params = {
      from_name: data.formData.Name,
      to_name: "Marco",
      message: `Email from ${data.formData.Email} and the message is ${data.formData.Description}, type:${data.formData.Type}, budget: ${data.formData.Budget}`,
    };
    const result = await emailjs.send(
      "service_3phjpdv",
      "template_vz2gfzd",
      params,
      "user_wnmbPkWGa7UVSP2ia6rqz"
    );

    if (result) {
      setLoading(false);
      notifications.addNotification({
        content: "Message has been sent. Will contact you shortly!",
        container: "top-center",
        type: "success",
      });
    }
  };

  return (
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
          <Form
            schema={schema}
            submitButtonText={loading ? "Loading..." : "Submit"}
            disabled={loading}
            uiSchema={uiSchema}
            onFormSubmit={handleSubmit}
            submitButtonProps={{ disabled: loading, width: 1 }}
          />
        </Container>
      </Container>
    </Layout>
  );
};

export default SecondPage;
