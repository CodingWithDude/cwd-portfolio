import React from "react";

const Hero = () => {
  return (
    <section className="my-52 mx-20">
      <p className="text-[#64ffda]">Hi, my name is</p>
      <h2 className="my-6 font-heebo text-6xl font-bold text-[#ccd6f6]">
        Ryan Austin
      </h2>
      <h2 className="mb-6 font-heebo text-6xl font-bold  text-[#8892b0]">
        I build things for the web.
      </h2>
      <p className="mb-12 w-[500px] text-[#8892b0]">
        I&apos;m a software engineer specialzing in building (and occationally
        designing) exceptional digital experiences. Currently, I&apos;m focused
        on building accessible, human-centered products.
      </p>
      <button className="rounded border-2 border-[#64ffda] py-2 px-4 text-[#64ffda] contrast-75 filter transition duration-[.3s] ease-in-out hover:bg-[#64ffda] hover:bg-opacity-[10%]">
        Contact Me
      </button>
    </section>
  );
};

export default Hero;
