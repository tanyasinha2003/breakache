import '../styles/global.css';
import Head from "next/head";

export default function App({ Component, pageProps }) {
   return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Breakache</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
  }
  