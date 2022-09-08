import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
    --color-button-purple: rgb(98,54,255);
    --color-text-grey: rgb(136,136,136);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.App {
height: 100vh;
width: 100vw;

}
`;

export default GlobalStyle


