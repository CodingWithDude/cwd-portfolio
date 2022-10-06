import type { NextPage } from "next";
import Head from "next/head";
import Header from "../../components/Header";
import Main from "../../components/Main";

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
      <Main />
    </>
  );
};

export default Home;
