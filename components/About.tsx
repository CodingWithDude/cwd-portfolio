import Image from "next/image";
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
      className={`flex w-full items-center justify-center px-6 pt-24 md:px-32 lg:items-center ${
        inView ? "fade-in-up" : "opacity-0"
      }`}
    >
      <div className="flex max-w-[900px] flex-col items-center justify-center gap-10 lg:flex-row">
        <div className="shrink-1 flex flex-col">
          <div className="flex  justify-between gap-2">
            <p className="self-center text-accent md:text-xl">01.</p>
            <h3 className="text-[1.4rem] font-bold text-primary md:text-3xl">
              About Me
            </h3>
            <div className="flex-1 self-center border-b-[1px] border-secondary/60"></div>
          </div>
          <div className="flex max-w-[900px] flex-col gap-4 py-4 text-sm text-secondary md:text-base">
            <p>
              Hello, my name is Ryan and I also go by Dude! I enjoy creating
              digital experiences that live on the internet. My interest in
              software development started back in 2015 with{" "}
              <a
                className="text-accent underline"
                href="https://www.sitelock.com/"
              >
                Sitelock
              </a>{" "}
              when I started building automation tools in python to help with
              repetitive user inputs.
            </p>
            <p>
              My strength is my ability to learn and deconstruct an unfamiliar
              concept into a usable, applicable skill set. My focus is self
              growth and delivering consistent value to the teams I develop
              with.
            </p>
            <p>
              Here are a few technologies I&apos;ve been working with recently:
            </p>
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
        </div>
        <div className="group mb-12 w-screen max-w-[200px] rounded-lg bg-accent  lg:max-w-[300px]">
          <div className="absolute  top-6 left-6 -z-[3] h-full w-full rounded-lg border-2 border-accent duration-200 ease-in group-hover:top-4 group-hover:left-4"></div>
          <div className="absolute top-0 left-0 h-full w-full rounded-lg  bg-accent/10 duration-200 ease-in group-hover:bg-transparent"></div>
          <Image
            src="https://res.cloudinary.com/djjxydn3p/image/upload/c_scale,w_500/v1666827367/profile-final_ouylky.png"
            alt="profile"
            layout="responsive"
            width={300}
            height={300}
            className="-z-[1] rounded-lg  mix-blend-multiply group-hover:bg-white group-hover:mix-blend-normal"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
