import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
       width: 100vw;
         height: 100vh;
            background-color: #f0f0f0;
            font-family:  Poppins
    }

    `;

export default GlobalStyle;
