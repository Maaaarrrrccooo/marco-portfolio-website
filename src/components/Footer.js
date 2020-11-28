import React from "react";
import styled from "styled-components";
import { Container, Link, Heading, Txt, useTheme } from "rendition";
import SocialIcons from "./SocialIcons";

const FooterContainer = styled.footer`
  background-color: ${(props) => props.backgroundColor};
`;

const AvatarItem = styled.img`
  height: 2.5rem;
`;

const Footer = () => {
  const theme = useTheme();
  return (
    <FooterContainer backgroundColor={theme.colors.primary.main}>
      <Container textAlign="center" p={3}>
        <Container marginBottom="2rem">
          <Link height="40px" href="/">
            <Heading.h3 color="white" style={{ fontWeight: 100 }}>
              Marco <Txt.span bold>Bustillo</Txt.span>
            </Heading.h3>
          </Link>
        </Container>
        <Container marginBottom="3rem">
          <Heading.h2 color="white" fontSize="1.6rem">
            Always walk through life as if you have something new to learn and
            you will.
          </Heading.h2>
        </Container>
        <SocialIcons />
        <Container marginBottom="2rem">
          <Txt.p color="white">{`Copyright © ${new Date().getFullYear()} Marco Bustillo`}</Txt.p>
        </Container>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
