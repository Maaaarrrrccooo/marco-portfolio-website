import React from "react"
import { Flex, Card, Heading, Txt, Container, useTheme } from "rendition"
import styled from "styled-components"
import frontend from "../assets/front-end.svg"
import backend from "../assets/backend.svg"
import systemdesign from "../assets/relational.svg"
import SectionContainer from "./SectionContainer"

const FigureContainer = styled.figure`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const FigureImage = styled.img`
  height: 48px;
`

const value = [
  {
    image: frontend,
    title: "Front-end Developer",
    description: "I translate UI/UX designs into reality",
    skillDescription: "Things I enjoy creating:",
    skills: ["UI", "Web", "Mobile", "Apps"],
    toolDescription: "Front-end Dev Tools:",
    tools: [
      "Balsamiq",
      "Adobe XD",
      "VSCode",
      "ReactJS",
      "Flutter",
      "Sass",
      "Git",
      "React-Native",
      "Styled-Components",
    ],
  },
  {
    image: backend,
    title: "Back-end Developer",
    description: "I like things that can be scaled and easily maintained",
    skillDescription: "Languages I speak:",
    skills: ["Javascript", "Typescript", "Go"],
    toolDescription: "Back-end Dev Tools:",
    tools: [
      "NodeJS",
      "Serverless",
      "GoLang",
      "MongoDB",
      "Redis",
      "ElasticSearch",
      "GraphQL",
      "Rest API",
      "AWS",
    ],
  },
  {
    image: systemdesign,
    title: "System Designer",
    description: "I really love to create and re-create various systems",
    skillDescription: "Experiences I draw from:",
    skills: ["Product design", "Freelancing", "Consultancy"],
    toolDescription: "System Designed:",
    tools: [
      "E-Commerce",
      "Omnichannel",
      "Social Media",
      "Food Delivery Service",
      "Learning management system",
    ],
  },
]

const Skills = () => {
  const theme = useTheme()
  return (
    <SectionContainer padding={["1rem 1rem", "5rem 1.5rem"]}>
      <Container p={0}>
        <Flex justifyContent="center" marginTop="-16rem" flexWrap="wrap">
          {value.map((val, i) => {
            return (
              <Card
                key={i.toString()}
                justifyContent="center"
                flex="1 1 30%"
                padding="1.5rem 1rem"
                margin={["5px", "10px", "10px", "10px"]}
              >
                <Container p={0} textAlign="center">
                  <FigureContainer>
                    <FigureImage src={val.image} />
                  </FigureContainer>
                  <Container minHeight="30px">
                    <Heading.h3
                      bold
                      fontSize={["1rem", "1rem", "1.2rem", "1.2rem"]}
                    >
                      {val.title}
                    </Heading.h3>
                  </Container>
                  <Container minHeight="50px">
                    <Txt.p fontSize={["0.8rem", "0.8rem", "1rem", "1rem"]}>
                      {val.description}
                    </Txt.p>
                  </Container>
                  <Heading.h4
                    bold
                    color={theme.colors.primary.main}
                    fontSize={["1rem", "1rem", "1.2rem", "1.2rem"]}
                  >
                    {val.skillDescription}
                  </Heading.h4>
                  <Container minHeight="40px">
                    <Txt.p fontSize={["0.8rem", "0.8rem", "1rem", "1rem"]}>
                      {val.skills.join(", ")}
                    </Txt.p>
                  </Container>
                  <Heading.h4
                    bold
                    fontSize={["1rem", "1rem", "1.2rem", "1.2rem"]}
                    color={theme.colors.primary.main}
                  >
                    {val.toolDescription}
                  </Heading.h4>

                  {val.tools.map((tool, i) => (
                    <Txt.p
                      key={i.toString()}
                      m={1}
                      fontSize={["0.8rem", "0.8rem", "1rem", "1rem"]}
                    >
                      {tool}
                    </Txt.p>
                  ))}
                </Container>
              </Card>
            )
          })}
        </Flex>
      </Container>
    </SectionContainer>
  )
}

export default Skills
