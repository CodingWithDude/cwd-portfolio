import type { NextPage } from "next";
import Head from "next/head";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Experience from "../../components/Experience";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Work from "../../components/Work";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
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
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
