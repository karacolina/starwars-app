import { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`

/*   margin: 0;
  padding: 0;
  box-sizing: border-box; */
  body {

    --main-color: #000000;
    --text-color: #78858f;
    --neutral-normal: #ECECEC;
    --neutral-dark: #474747;
    --primary: #ffeb04;

    background-color: var(--main-color);
    font-family: Arial, sans-serif;
    
    color: var(--text-color)


  
  }
`;
export default StyledGlobal;
