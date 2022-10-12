const Hero = () => {
  return (
    <section
      id="hero"
      className="fade-in-up-hero flex h-screen min-h-[400px] w-full flex-col justify-center px-6 md:px-32 lg:pl-[calc(50vw-400px)]"
    >
      <div>
        <div>
          <p className=" font-thin text-[#64ffda]">Hi, my name is</p>
        </div>
        <div>
          <h2 className="my-4 font-heebo text-4xl font-bold text-[#ccd6f6] md:text-6xl lg:text-7xl">
            Ryan Austin.
          </h2>
        </div>
        <div>
          <h2 className="mb-5 font-heebo text-4xl font-bold text-[#8892b0] md:text-6xl lg:text-7xl ">
            I build things for the web.
          </h2>
        </div>
        <div>
          <p className="mb-8 max-w-[540px] font-poppins text-[#8892b0] md:mr-12">
            I&apos;m a software engineer specialzing in building (and
            occationally designing) exceptional digital experiences. Currently,
            I&apos;m focused on building accessible, human-centered products.
          </p>
        </div>
        <div>
          <button className="w-40 rounded border-2 border-[#64ffda] p-4 text-[#64ffda] filter transition duration-[.3s] ease-in-out hover:bg-[#64ffda] hover:bg-opacity-[10%]">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
