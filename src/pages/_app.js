import "@/styles/globals.css";
import { Container } from "@/components/container";
import { ThemaProvider } from "@/lib/ThemeContext";

export default function App({ Component, pageProps }) {

  return (
    <ThemaProvider>
      <Container>
        <Component {...pageProps} />;
      </Container>
    </ThemaProvider>
  )
}
