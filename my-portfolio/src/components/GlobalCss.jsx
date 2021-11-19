import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

const GlobalStyle = createGlobalStyle`
  ${normalize}

  img {
      max-width: 100%;
  }
  a {
    text-decoration:none; 
  }
`
export default GlobalStyle
