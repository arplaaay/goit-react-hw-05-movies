import { createGlobalStyle } from 'styled-components';
import 'normalize.css'; /* bring in normalize.css styles */

export const AppGlobalStyles = createGlobalStyle`

body {
  margin: 0;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;

  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: radial-gradient(circle at 0% 0%, #373b52, #1a1b23 51%, #1d1e26) */
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;
