import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  Container,
  Link,
  Flex,
  Button,
  useTheme,
  Heading,
  Txt,
  Navbar,
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
  const history = useHistory();

  return (
    <Navbar
      p="2.25rem 1.5rem"
      backgroundColor="white"
      color={theme.colors.primary.main}
      brand={
        <Link height="40px" href="/">
          <Heading.h3 style={{ fontWeight: 100 }}>
            Marco <Txt.span bold>Bustillo</Txt.span>
          </Heading.h3>
        </Link>
      }
    >
      <Flex alignItems="center">
        <Link marginRight="1rem" href="https://blog.marcobustillo.com">
          Blog
        </Link>
        <Button
          primary
          outline
          onClick={() => history.push("/contact")}
          color={theme.colors.primary.main}
        >
          Say Hello
        </Button>
      </Flex>
    </Navbar>
  );
};

export default Navigation;
