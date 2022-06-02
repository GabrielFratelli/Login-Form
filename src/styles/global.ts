import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100vw;
  height: 100vh;

  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
}

button, input {
cursor: pointer;
}

:root {
  --white: #FFFFFF;
  --subtitle: #2D3748;
  --title: #1A202C;
  --titleinput: #4A5568;
  --borderinput:  #e8e8e8;
  --placeholder: #2D3748;
  --password: #000000;
  --remember: #2D3748;
  --rememberbutton: #2C5282;
  --checkbox: #E8E8E8;
  --loginbutton: #04C35C;
  --googlebutton: #2D3748;
  --footer: #616161;
  --footerbutton: #2B6CB0;
}
`;
