import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
/* @font-face {
    font-family: "Product Sans";
    src: url("/product-sans/ProductSans-Regular.ttf") format("truetype")
} */

html,body {
    padding: 0;
    margin: 0;
    font-family: "Product Sans",-apple-system, Ubuntu, sans-serif;
    height: 100vh;
    font-size: 1rem;
    width: 100%;
}
*,*::before,*::after{
    box-sizing: border-box;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #000 !important;
}

`;

export default globalStyles;
