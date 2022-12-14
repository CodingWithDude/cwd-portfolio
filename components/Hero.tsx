interface Props {
  setShowContactModal: (
    value: boolean | ((prevVar: boolean) => boolean)
  ) => void;
}

const Hero = ({ setShowContactModal }: Props) => {
  return (
    <section
      id="hero"
      className="fade-in-up flex h-screen min-h-[400px] w-full flex-col justify-center pb-24 lg:items-center"
    >
      <div>
        <div>
          <p className=" text-accent">Hi, my name is</p>
        </div>
        <div>
          <h2 className="my-4 font-heebo text-4xl font-bold text-primary md:text-6xl lg:text-7xl">
            Ryan Austin.
          </h2>
        </div>
        <div>
          <h2 className="mb-5 font-heebo text-4xl font-bold text-secondary md:text-6xl lg:text-7xl ">
            I build things for the web.
          </h2>
        </div>
        <div>
          <p className="mb-8 max-w-[540px] font-poppins text-secondary md:mr-12 md:text-lg">
            I&apos;m a software engineer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I&apos;m focused on building accessible, human-centered products.
          </p>
        </div>
        <div>
          <button
            onClick={() => setShowContactModal((prev) => !prev)}
            className="w-40 rounded border-2 border-accent p-4 text-accent filter transition duration-[.3s] ease-in-out hover:bg-accent hover:bg-opacity-[10%]"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
