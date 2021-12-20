import Head from "next/head";

import About from "../components/About";
import FAQ from "../components/FAQ";
import Intro from "../components/Intro";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vandal NFT</title>
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
        <meta name="description" content="Discover Vandal's latest NFTs" />
        <link rel="icon" href="/favicon.ico" />
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
