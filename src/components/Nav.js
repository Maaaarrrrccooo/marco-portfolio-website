import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Link, Flex, Button, useTheme, Heading, Txt } from "rendition";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 2.25rem 1.5rem;
  background-color: #fff;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const Navigation = () => {
  const theme = useTheme();
  const history = useHistory();

  return (
    <NavContainer>
      <Link height="40px" href="/">
        <Heading.h3 style={{ fontWeight: 100 }}>
          Marco <Txt.span bold>Bustillo</Txt.span>
        </Heading.h3>
      </Link>
      <Flex alignItems="center" flexWrap="nowrap">
        <Link marginRight="1rem" href="https://dev.to/marcobustillo">
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
    </NavContainer>
  );
};

export default Navigation;
