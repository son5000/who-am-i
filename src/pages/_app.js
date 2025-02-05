import "@/styles/globals.css";
import { Container } from "@/components/container";

export default function App({ Component, pageProps }) {
  return (
  <>
    <Container>
     <Component {...pageProps} />;
    </Container>
  </>
  )
}
