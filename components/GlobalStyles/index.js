import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --color-black: #000000;
        --color-white: #ffffff;
        --color-price: #6d7173;
    }

    body {
        min-height: 100vh;
        background-color: white;
    }

    html, body {
        font-family: sofia-pro, sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        margin: 0;
        padding: 0;
    }

    svg {
        display: flex;
    }
`;

export default GlobalStyles;
