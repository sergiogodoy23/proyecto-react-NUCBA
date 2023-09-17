import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    :root {
    --blue-bg: #023e8aff;
    --blue: #023e8aff;
    --blue-sky: #caf0f8ff;
    --white-bg: #fff;
  --btn-gradient: linear-gradient(83deg, #03045eff, #363088);
  --btn-gradient-secondary: linear-gradient(140deg, #03045eff, #fff);
  }

  html{
    scroll-behavior: smooth;
  }

  html{
    scroll-behavior: smooth;
  }

    body {
    margin: 0;
    padding: 0;
    background: #f5f5f5;
    font-family: 'Montserrat', sans-serif;
    color: var(--blue-bg);
    -webkit-tap-highlight-color: tranSparent;
    overflow-x: hidden
    }

    a {
    text-decoration: none;
    }

    a:visited {
    color: white;
    }

    li {
    list-style: none;
    }

   

`;
