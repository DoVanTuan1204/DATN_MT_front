import { CartContextProvider } from "@/components/CartContext";
import "@/styles/globals.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  background-color: #F8F8F8;
  padding: 0;
  margin: 0;
 font-family: 'Be Vietnam Pro', sans-serif;;
}`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
