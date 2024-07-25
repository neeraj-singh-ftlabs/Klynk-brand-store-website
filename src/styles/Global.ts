//color scheme globally 
import { createGlobalStyle } from 'styled-components';
import { theme } from '@/utils/theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: ${theme.colors.accent};
  }

  h1, h2, h3 {
    color: ${theme.colors.primary};
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default GlobalStyle;
