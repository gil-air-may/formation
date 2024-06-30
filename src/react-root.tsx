import { createRoot } from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";
import App from "./app";

import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    heading: "CascadiaCode, sans-serif",
    body: "CascadiaCode, sans-serif",
  },
  styles: {
    global: {
      body: {
        fontFamily: "CascadiaCode, sans-serif",
      },
    },
  },
});

import { GlobalStyles } from "./styles";

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ThemeProvider>
  );
};

const root = createRoot(document.body);
root.render(<Main />);
