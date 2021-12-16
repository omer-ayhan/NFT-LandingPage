import Head from "next/head";
import About from "../components/About";
import Intro from "../components/Intro";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vandal NFT</title>
        <meta name="description" content="Discover Vandal's latest NFTs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <Intro />
        <About />
      </main>
    </div>
  );
}
