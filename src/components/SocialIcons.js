import React from "react"
import styled from "styled-components"
import { Button } from "rendition";
import {
  faGithub,
  faLinkedin,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

const SocialIcons = () => {
  return (
    <SocialLinks>
      <Button
        href="https://www.linkedin.com/in/marcobustillo/"
        target="_blank"
        width={["2.75rem", "3rem"]}
        height={["2.75rem", "3rem"]}
        p={0}
        tertiary
        icon={
          <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "1.125rem" }} />
        }
      />
      <Button
        href="https://github.com/marcobustillo"
        target="_blank"
        width={["2.75rem", "3rem"]}
        height={["2.75rem", "3rem"]}
        p={0}
        tertiary
        icon={
          <FontAwesomeIcon icon={faGithub} style={{ fontSize: "1.125rem" }} />
        }
      />
      <Button
        href="https://dev.to/marcobustillo"
        target="_blank"
        width={["2.75rem", "3rem"]}
        height={["2.75rem", "3rem"]}
        p={0}
        tertiary
        icon={<FontAwesomeIcon icon={faDev} style={{ fontSize: "1.125rem" }} />}
      />
      <Button
        href="mailto:me@marcobustillo.com"
        width={["2.75rem", "3rem"]}
        height={["2.75rem", "3rem"]}
        p={0}
        tertiary
        icon={
          <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "1.125rem" }} />
        }
      />
    </SocialLinks>
  );
};

export default SocialIcons
