import "@/styles/globals.css";
import { StyleSheetManager, createGlobalStyle } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { SessionProvider } from "next-auth/react"
import { surfaceBG, surfaceBright} from "@/lib/colors";


const GlobalStyles = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        background-color: ${surfaceBG};
        color: ${surfaceBright};
    }
`;

export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <StyleSheetManager
        shouldForwardProp={isPropValid}
        disableVendorPrefixes={false}
      >
        <GlobalStyles />
          <Component {...pageProps} />
      </StyleSheetManager>
    </SessionProvider>
  )
}