import { createGlobalStyle } from 'styled-components';

import { colors } from '@constants/colors';
import { screenPadding } from '@constants/styles';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: black;

  font-synthesis: none;
  /* stylelint-disable-next-line value-keyword-case */
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  min-height: 100vh;
  padding-block: ${screenPadding};

  background-image: linear-gradient(to bottom right, ${colors.lightBeige}, ${colors.beige});
}

button,
input[role='button'],
a {
  &:focus-visible {
    outline: 5px solid orange;
  }
}`;
