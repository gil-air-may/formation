import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'CascadiaCode';
    src: url('../fonts/Cascadia.ttf');
  }
  body {
    font-family: "CascadiaCode";
    margin: 0;
    padding: 12px;
    font-family: 'Source Code Pro', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
  }
  /* Other global styles */
`;
