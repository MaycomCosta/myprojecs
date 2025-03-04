import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
  ::after,
  ::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #0f2637;
    color: hsl(210, 36%, 96%);
    line-height: 1.5;
    font-size: 0.875rem;
  }
`
export default GlobalStyle