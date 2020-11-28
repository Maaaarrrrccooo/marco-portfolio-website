import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Box, Flex, Heading, Txt, Button, useTheme } from "rendition";
import SectionContainer from "./SectionContainer";

const CallToActionContainer = styled(SectionContainer)`
  background-color: ${(props) => props.backgroundColor};
  text-align: center;
`;

const CallToAction = () => {
  const theme = useTheme();
  const history = useHistory();

  return (
    <CallToActionContainer
      backgroundColor={theme.colors.primary.main}
      padding={["1rem 1rem", "5rem 1.5rem"]}
    >
      <Box
        padding="2.8rem 1.2rem;"
        marginTop={["-2rem", "-4rem"]}
        marginRight="auto"
        marginLeft="auto"
        maxWidth="1200px"
        style={{
          borderRadius: 10,
          boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px #141c3a",
        }}
        backgroundColor={theme.colors.primary.dark}
      >
        <Flex flexWrap="wrap" justifyContent="space-around" alignItems="center">
          <Box>
            <Heading.h1 bold fontSize="2rem" color="white">
              Start a project
            </Heading.h1>
          </Box>
          <Box>
            <Txt.p fontSize="1rem" maxWidth="300px" bold color="white">
              Interested in working together? We should queue up a chat. I’ll
              buy the coffee.
            </Txt.p>
          </Box>
          <Box>
            <Button
              primary
              outline
              color="white"
              onClick={() => history.push("/planner")}
            >
              Lets do this
            </Button>
          </Box>
        </Flex>
      </Box>
    </CallToActionContainer>
  );
};

export default CallToAction;
