import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import SocialLinks from "../../components/SocialLinks";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-full w-full px-4">
      <Head>
        <title>Coding with Dude</title>
        <meta
          name="description"
          content="Coding with Dude Portfolio by Ryan Austin"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <SocialLinks />
      <Hero />
      <Hero />
      <Hero />
      <Hero />
      <Hero />
    </div>
  );
};

export default Home;
