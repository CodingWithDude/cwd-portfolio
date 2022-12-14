import Image from "next/image";
import React from "react";
import { GoTriangleRight } from "react-icons/go";
import { InView, useInView } from "react-intersection-observer";
import { useIntersection, useWindowSize } from "react-use";
import SectionTitle from "./SectionTitle";

const About = () => {
  const { height } = useWindowSize();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <section
      ref={ref}
      id="about"
      className={`flex w-full items-center justify-center pt-24 lg:items-center ${
        inView ? "fade-in-up" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
        <div className=" flex flex-col">
          <SectionTitle sectionNumber="01." title="About Me" />
          <div className="flex flex-col gap-4 py-4 font-poppins  text-secondary md:text-lg">
            <p>
              Hello, my name is Ryan and I also go by Dude! I enjoy creating
              digital experiences that live on the internet. My interest in
              software development started back in 2015 with{" "}
              <a
                className="text-accent hover:underline"
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
            <div className="grid max-w-md grid-cols-2 gap-4 py-4 font-notoSansMono text-sm">
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
        <InView
          rootMargin={`-${height / 2 - 50}px 0px -${height / 2 - 50}px 0px`}
        >
          {({ inView, ref }) => (
            <div
              ref={ref}
              className="group mb-12 w-screen max-w-[200px] rounded-[5px] bg-accent lg:max-w-[300px]"
            >
              <div
                className={`absolute top-6 left-6 -z-[3] h-screen max-h-[200px] w-screen max-w-[200px] rounded border-2 border-accent duration-200 ease-in lg:max-h-[300px] lg:max-w-[300px] ${
                  inView ? "top-4 left-4 " : ""
                }`}
              ></div>

              <Image
                src="https://res.cloudinary.com/djjxydn3p/image/upload/c_scale,w_500/v1666827367/profile-final_ouylky.png"
                alt="profile"
                layout="responsive"
                width={300}
                height={300}
                className={`-z-[1] rounded duration-200 ease-in  ${
                  inView ? "bg-white mix-blend-normal " : "mix-blend-multiply "
                }`}
              />
            </div>
          )}
        </InView>
      </div>
    </section>
  );
};

export default About;
