import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import About from "../../components/About";
import Contact from "../../components/Contact";
import ContactModal from "../../components/ContactModal";
import Experience from "../../components/Experience";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Work from "../../components/Work";

const Home: NextPage = () => {
  const [showContactModal, setShowContactModal] = useState(false);
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
      {showContactModal ? (
        <ContactModal setShowContactModal={setShowContactModal} />
      ) : null}
      <Hero setShowContactModal={setShowContactModal} />
      <About />
      <Experience />
      <Work />
      <Contact setShowContactModal={setShowContactModal} />
      <Footer />
    </div>
  );
};

export default Home;
