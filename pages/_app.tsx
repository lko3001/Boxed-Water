import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Archivo_Narrow, Unbounded } from "@next/font/google";

const archivonarrow = Archivo_Narrow({
  variable: "--archivonarrow",
  subsets: ["latin"],
});
const unbounded = Unbounded({
  variable: "--unbounded",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`font-unbounded ${archivonarrow.variable} ${unbounded.variable}`}
    >
      <Component {...pageProps} />
    </main>
  );
}
