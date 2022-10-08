import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Blur from "../../components/Blur";
import Header from "../../components/header/Header";
import Hero from "../../components/Hero";
import SocialLinks from "../../components/SocialLinks";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <SocialLinks />
      <main className="text-white">
        <Blur isOpen={isOpen} setIsOpen={setIsOpen} />
        <Hero />
        <Hero />
      </main>
    </div>
  );
};

export default Home;
