import type { NextPage } from "next";
import Head from "next/head";
import Header from "../../components/Header";
import Hero from "../../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Coding with Dude</title>
        <meta
          name="description"
          content="Coding with Dude Portfolio by Ryan Austin"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
};

export default Home;
