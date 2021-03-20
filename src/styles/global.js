import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body{
    height: 100%;
    background-color: var(--body);
    color: var(--primary-text);
    font-family: var(--primary-font);
}

input, button{
    background: none;
    outline: none;
    border: 0;
    display: block;
}

button{
    cursor: pointer;
}

ul li{
    list-style: none;
}

a{
    text-decoration: none;
}

:root{
    --body: #F2F6FA;
    --white: #FFFFFF;

    --primary-blue:#2E01FF;
    --primary-green: #02F7A9;

    --primary-button: #2E01FF;
    --primary-button-hover: #02F7A9;

    --primary-text: #0A1E2B;
    --primary-text-opacity: #0A1E2B60;

    --input-background: #F2F6FA;
    --input-border: #ABC0CD;

    --primary-font: 'IBM Plex Sans', sans-serif;
}
`;
