import Head from "next/head";

import About from "../components/About";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer/Footer";
import Intro from "../components/Intro";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="preload"
          href="/fonts/Gilroy-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Gilroy-SemiBold.ttf"
          as="font"
          crossOrigin=""
        />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <meta name="description" content="Mint your WDW Citizens NFT" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <title>WDW Citizens</title>
      </Head>
      <main className={styles.container}>
        <Intro />
        <About />
        <Roadmap />
        <FAQ />
        <Team />
      </main>
    </div>
  );
}
