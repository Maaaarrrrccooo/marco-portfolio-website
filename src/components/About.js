import React from "react";
import styled from "styled-components";
import { space, typography } from "styled-system";
import { Heading, Container } from "rendition";

const AboutContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  min-height: 500px;
  ${space}
  background-color: ${(props) => props.theme.colors.primary.main};
  color: #fff;
`;

const SubTitle = styled.h3`
  ${typography}
  font-weight:300;
  word-break: break-word;
`;

const About = () => {
  return (
    <AboutContainer pb={["10rem", "14rem", "16rem", "16rem"]}>
      <Container p={["5rem", 0, 0, 0]}>
        <Heading.h1
          lineHeight="1.125"
          fontSize={["1.5rem", "1.5rem", "3rem", "3rem"]}
        >
          Hi, I’m Marco. Nice to meet you.
        </Heading.h1>
        <Container p={0} m={0} width={["100%", "80%", "80%", "60%"]}>
          <SubTitle lineHeight="1.8" fontSize="1rem">
            Joining the workforce 3 years ago, I have done full-stack
            development for freelancing and corporate setting. I always want to
            be involved from the start and to the end of the project because I
            am confident that I can contribute to any part of the project. I
            like to solve problems, be proactive, work with a team, and be
            assertive. I am also a very committed person and constantly want to
            improve me because I believe when you stop learning that's when you
            stop growing
          </SubTitle>
        </Container>
      </Container>
    </AboutContainer>
  );
};

export default About;
