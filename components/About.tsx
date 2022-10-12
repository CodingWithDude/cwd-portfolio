import { GoTriangleRight } from "react-icons/go";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    <section
      ref={ref}
      id="about"
      className={`flex w-full flex-col justify-center px-6 pt-24 md:px-32 lg:pl-[calc(50vw-400px)] ${
        inView ? "fade-in-up" : "opacity-0"
      }`}
    >
      <div className="flex justify-between gap-2">
        <p className="self-center text-accent md:text-xl">01.</p>
        <h3 className="text-[1.4rem] font-bold text-primary md:text-3xl">
          About Me
        </h3>
        <div className="flex-1 self-center border-b-[1px] border-secondary/60"></div>
      </div>
      <div className="flex flex-col gap-4 py-4 text-sm text-secondary md:text-base">
        <p>
          Hello, my name is Ryan and I also go by Dude! I enjoy creating digital
          experiences that live on the internet. My interest in software
          development started back in 2015 with{" "}
          <a className="text-accent underline" href="https://www.sitelock.com/">
            Sitelock
          </a>{" "}
          when I started building automation tools in python to help with
          repetitive user inputs.
        </p>
        <p>
          My strength is my ability to learn and deconstruct an unfamiliar
          concept into a usable, applicable skill set. My focus is self growth
          and delivering consistent value to the teams I develop with.
        </p>
        <p>Here are a few technologies I&apos;ve been working with recently:</p>
        <div className="grid max-w-md grid-cols-2 gap-4 py-4 text-xs">
          <div className="flex items-center gap-2">
            <GoTriangleRight className=" text-accent" />
            <p>JavaScript (ES6+)</p>
          </div>
          <div className="flex items-center gap-2">
            <GoTriangleRight className=" text-accent" />
            <p>TypeScript</p>
          </div>
          <div className="flex items-center gap-2">
            <GoTriangleRight className=" text-accent" />
            <p>React</p>
          </div>
          <div className="flex items-center gap-2">
            <GoTriangleRight className=" text-accent" />
            <p>Next.js</p>
          </div>
          <div className="flex items-center gap-2">
            <GoTriangleRight className=" text-accent" />
            <p>TailwindCSS</p>
          </div>
          <div className="flex items-center gap-2">
            <GoTriangleRight className=" text-accent" />
            <p>Prisma</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
