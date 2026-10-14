import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "rendition";
import Routes from "./Routes";

const theme = {
  colors: {
    primary: {
      main: "#2f89fc",
      dark: "#40514e",
      semilight: "#30e3ca",
      light: "#f5f5f5",
    },
  },
};

test("renders the portfolio homepage", () => {
  render(
    <BrowserRouter>
      <Provider theme={theme}>
        <Routes />
      </Provider>
    </BrowserRouter>,
  );

  expect(
    screen.getByText("Software Developer & System Designer"),
  ).toBeInTheDocument();
});
