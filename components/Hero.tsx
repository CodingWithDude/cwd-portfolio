import React from "react";

const Hero = () => {
  return (
    <section className="mx-4 mt-10 w-full">
      <p className="text-lg font-thin text-[#64ffda]">Hi, my name is</p>
      <h2 className="my-6 font-heebo text-5xl font-bold text-[#ccd6f6] ">
        Ryan Austin.
      </h2>
      <h2 className="mb-5 font-heebo text-5xl font-bold text-[#8892b0] ">
        I build things for the web.
      </h2>
      <p className="mb-8 text-[#8892b0]">
        I&apos;m a software engineer specialzing in building (and occationally
        designing) exceptional digital experiences. Currently, I&apos;m focused
        on building accessible, human-centered products.
      </p>
      <button className="rounded border-2 border-[#64ffda] py-4 px-8 text-xl text-[#64ffda]  filter transition duration-[.3s] ease-in-out hover:bg-[#64ffda] hover:bg-opacity-[10%]">
        Contact Me
      </button>
    </section>
  );
};

export default Hero;
