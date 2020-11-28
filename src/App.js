import React from "react";
import { Provider } from "rendition";
import Test from "./pages";

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

function App() {
  return (
    <Provider theme={theme}>
      <Test />
    </Provider>
  );
}

export default App;
