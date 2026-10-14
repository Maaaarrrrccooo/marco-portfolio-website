import React from "react";
import styled from "styled-components";
import { Container, Heading } from "rendition";
import avatarImg from "../assets/marco-pic.png";

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  text-align: center;
  padding: 0 1.5rem;
`;

const HeroBody = styled.div`
  flex: 1;
  padding: 3rem 1.5rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
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

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBody>
        <Container>
          <Heading.h1 color="black" fontSize="var(--font-size-display)">
            Software Developer & System Designer
          </Heading.h1>
          <Heading.h2 color="black" fontSize="var(--font-size-lead)">
            I design and build simple things, and I love what I do.
          </Heading.h2>
          <Avatar src={avatarImg} />
        </Container>
      </HeroBody>
    </HeroContainer>
  );
};

export default Hero;
