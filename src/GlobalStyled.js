import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  Padding_main: "20px",
};

export const GlobalStyled = createGlobalStyle`
${reset}

*{box-sizing: border-box;
}

body{
  color: #000;
  letter-spacing: -1px;
}

img{
  width: 100%;
  display: block;
}

a{
  text-decoration: none;
}

ul, li{
  list-style: none;
}

`;
