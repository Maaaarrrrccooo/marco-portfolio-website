import React from "react";
import styled from "styled-components";
import { Container, Heading } from "rendition";
import avatarImg from "../assets/marco-pic.png";

const HeroContainer = styled.section`
  display: flex;
  padding-top: 2rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  text-align: center;
  padding: 0rem 1.5rem;
`;

const HeroBody = styled.div`
  flex: 1;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 425px) {
    padding: 1rem;
  }
`;

const HeroFooter = styled.div`
  padding: 0rem 1.5rem;
  flex-grow: 0;
  flex-shrink: 0;
`;

const Avatar = styled.img`
  width: 210px;
  margin: 2rem 0;
  height: auto;
  max-width: 100%;

  @media (max-width: 768px) {
    width: 105px;
  }

  @media (max-width: 425px) {
    width: 80px;
  }
`;

const HeroImageBottom = styled.img`
  max-width: 860px;
  margin-bottom: -0.45rem;
  height: auto;

  @media (max-width: 768px) {
    width: 430px;
  }

  @media (max-width: 425px) {
    width: 300px;
  }

  @media (max-width: 320px) {
    width: 270px;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBody>
        <Container>
          <Heading.h1
            color="black"
            fontSize={["1.5rem", "1.5rem", "3rem", "3rem"]}
          >
            Software Developer & System Designer
          </Heading.h1>
          <Heading.h2
            color="black"
            fontSize={["0.8rem", "0.8rem", "1.5rem", "1.5rem"]}
          >
            I design and build simple things, and I love what I do.
          </Heading.h2>
          <Avatar src={avatarImg} />
        </Container>
      </HeroBody>
      <HeroFooter>
        <Container>{/* <HeroImageBottom src={heroImg} /> */}</Container>
      </HeroFooter>
    </HeroContainer>
  );
};

export default Hero;
