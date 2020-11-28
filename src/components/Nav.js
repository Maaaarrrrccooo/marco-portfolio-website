import React from "react";

import styled from "styled-components";
import {
  Container,
  Link,
  Flex,
  Button,
  useTheme,
  Heading,
  Txt,
} from "rendition";

const Nav = styled.nav`
  padding: 2.25rem 1.5rem;
  box-shadow: none;
  z-index: auto;
  background-color: #fff;
  min-height: 3.25rem;
`;

const Navigation = () => {
  const theme = useTheme();
  return (
    <Nav>
      <Container>
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link height="40px" href="/">
            <Heading.h3 style={{ fontWeight: 100 }}>
              Marco <Txt.span bold>Bustillo</Txt.span>
            </Heading.h3>
          </Link>
          <Flex alignItems="center">
            <Link marginRight="1rem" href="https://blog.marcobustillo.com">
              Blog
            </Link>
            <Button
              primary
              outline
              onClick={() => {}}
              color={theme.colors.primary.main}
            >
              Say Hello
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Nav>
  );
};

export default Navigation;
