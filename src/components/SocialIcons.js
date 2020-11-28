import React from "react"
import styled from "styled-components"
import { Button, Container } from "rendition"
import { faGithub, faLinkedin, faDev } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Icon = styled.a``

const SocialIcons = () => {
  return (
    <Container marginBottom="3rem">
      <Button
        href="https://www.linkedin.com/in/marcobustillo/"
        target="_blank"
        m={[1, 3, 3, 3]}
        tertiary
        icon={<FontAwesomeIcon icon={faLinkedin} />}
      />
      <Button
        href="https://github.com/marcobustillo"
        target="_blank"
        m={[1, 3, 3, 3]}
        tertiary
        icon={<FontAwesomeIcon icon={faGithub} />}
      />
      <Button
        href="https://dev.to/marcobustillo"
        target="_blank"
        m={[1, 3, 3, 3]}
        tertiary
        icon={<FontAwesomeIcon icon={faDev} />}
      />
      <Button
        href="mailto:me@marcobustillo.com"
        m={[1, 3, 3, 3]}
        tertiary
        icon={<FontAwesomeIcon icon={faEnvelope} />}
      />
    </Container>
  )
}

export default SocialIcons
