import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --font-size-body: 1rem;
    --font-size-small: 0.875rem;
    --font-size-card-title: 1rem;
    --font-size-section-title: 1.5rem;
    --font-size-lead: 1.125rem;
    --font-size-display: 2rem;
  }

  @media (min-width: 768px) {
    :root {
      --font-size-card-title: 1.2rem;
      --font-size-section-title: 2rem;
      --font-size-lead: 1.5rem;
      --font-size-display: 3rem;
    }
  }

  html, body {
    margin: 0;
    min-width: 320px;
    font-size: var(--font-size-body);
    line-height: 1.5;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  );
}
