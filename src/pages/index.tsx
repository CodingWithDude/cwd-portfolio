import type { NextPage } from "next";
import Head from "next/head";
import About from "../../components/About";
import Hero from "../../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Coding with Dude</title>
        <meta
          name="description"
          content="Coding with Dude Portfolio by Ryan Austin"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <About />
      <About />
      <About />
      <About />
      <About />
    </div>
  );
};

export default Home;
