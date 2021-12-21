import "antd/dist/antd.css";
import "react-vertical-timeline-component/style.min.css";
import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <meta name="description" content="Mint your WDW Citizens NFT" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="preload" href="/fonts/font.woff" as="font" crossOrigin="" />
        <title>WDW Citizens</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
