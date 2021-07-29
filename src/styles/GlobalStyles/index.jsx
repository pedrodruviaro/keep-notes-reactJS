import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.text};
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    img {
        width: 100%;
    }
`

export default GlobalStyles