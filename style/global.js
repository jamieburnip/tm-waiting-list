import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
html { 
  font-family: Averta, helvetica, arial, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: Averta, helvetica, arial, sans-serif;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

export default Global;
