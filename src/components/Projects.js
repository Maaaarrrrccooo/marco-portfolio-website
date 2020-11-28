import React from "react";
import {
  Container,
  Heading,
  Txt,
  Card,
  Flex,
  Img,
  Button,
  useTheme,
} from "rendition";
import SectionContainer from "./SectionContainer";
import donnaImg from "../assets/drf.png";
import techMaker from "../assets/techmaker-logo-circle.png";
import opensource from "../assets/opensource.png";

const data = [
  {
    title: "Influencia",
    image: donnaImg,
    description:
      "Full-stack Web application for an e-commerce for perfumes and essentials",
    url: "https://www.influenciabydonitaclaire.com/",
  },
  {
    title: "Opensource labs",
    image: opensource,
    description:
      "An application that curates all open open-source issues for contributions",
    url: "https://opensourcelabs.ml/",
  },
  {
    title: "Techmaker",
    image: techMaker,
    description:
      "Portfolio website for an innovation startup in the Philippines",
    url: "https://www.techmaker.ph/",
  },
];

const Projects = () => {
  const theme = useTheme();
  return (
    <SectionContainer padding={["5rem 1rem", "5rem 1.5rem"]}>
      <Container textAlign="center">
        <Heading.h3 bold>My Recent Works</Heading.h3>
        <Txt.p fontSize="1.2rem">
          Here are my projects I've worked on recently.
        </Txt.p>
        <Flex flexWrap="wrap" justifyContent="center">
          {data.map((item) => (
            <Flex
              key={item.title}
              flex={["0 1 100%", "0 1 50%", "0 1 50%", "0 1 30%"]}
              p={0}
              m={1}
            >
              <Card small p="2rem" m={0} width="100%">
                <Flex justifyContent="center">
                  <Img src={item.image} height="90px" width="90px" />
                </Flex>
                <Heading.h3>{item.title}</Heading.h3>
                <Txt.p>{item.description}</Txt.p>
                <Button
                  primary
                  outline
                  color={theme.colors.primary.main}
                  href={item.url}
                  target="_blank"
                >
                  Visit Site
                </Button>
              </Card>
            </Flex>
          ))}
        </Flex>
      </Container>
    </SectionContainer>
  );
};

export default Projects;
