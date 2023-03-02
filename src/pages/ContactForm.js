import React, { useState } from "react";
import { Form, Container, Heading, notifications } from "rendition";
import { CaptchaWidget } from "rendition/dist/extra/Form/captcha";
import emailjs from "emailjs-com";
import Layout from "../components/Layout";
import Nav from "../components/Nav";

Form.registerWidget("captcha", CaptchaWidget);

window.RECAPTCHA_V2_API_KEY = "6Lfj8vAZAAAAAAUFYoqs04zNLz3uq1mig8Gsvmx7";

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
    Captcha: {
      type: "string",
      format: "captcha",
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

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (data) => {
    setLoading(true);
    const params = {
      from_name: data.formData.Name,
      to_name: "Marco",
      message: `Email from ${data.formData.Email} and the message is ${data.formData.Description}`,
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
            Thank you for reach out. How can I help you?
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
export default Contact;
