import { createGlobalStyle } from "styled-components";
import { backgroundColor } from ".";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        padding: 0px;
        height: 100vh;
        background-color: ${backgroundColor}
    }   

    #root {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
`