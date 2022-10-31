import Image from "next/image";
import { InView } from "react-intersection-observer";
import { useWindowSize } from "react-use";
import { GoTriangleRight } from "react-icons/go";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface Props {
  project: {
    image: string;
    title: string;
    description: string;
    technologies: string[];
    github: string;
    url: string;
  };
}

const WorkCard = ({ project }: Props) => {
  const { height } = useWindowSize();
  return (
    <div className={`relative flex w-full max-w-[900px] md:pl-6`}>
      <div className="absolute top-0 bottom-0 left-0 right-0 md:hidden">
        <Image
          src={project.image}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt=""
        />
      </div>
      <InView
        rootMargin={`-${height / 2 - 50}px 0px -${height / 2 - 50}px 0px`}
      >
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`hidden h-[323px] md:block ${
              inView ? "md:bg-background" : "rounded-[5px] md:bg-accent"
            }`}
          >
            <div
              className={`absolute top-6 left-0 -z-[3] hidden h-[323px] w-[500px] rounded-lg border-2 border-accent duration-200 ease-in-out md:block ${
                inView ? "top-4 left-2" : ""
              }`}
            ></div>
            <Image
              src={project.image}
              layout="fixed"
              objectFit="cover"
              width={500}
              height={323}
              objectPosition="center"
              alt=""
              className={`rounded duration-200 ${
                inView ? "" : "opacity-[.80] mix-blend-multiply grayscale-[.9]"
              }`}
            />
          </div>
        )}
      </InView>
      <div className="z-[1] flex w-full flex-col bg-[#0b1d32]/[.85] py-8 px-4 md:absolute md:-top-8 md:bottom-0 md:left-0 md:right-0 md:items-end md:bg-transparent">
        <p className="pb-2 text-sm text-accent">Featured Project</p>
        <h2 className="pb-4 text-xl font-bold text-gray-300 md:pb-6 md:text-2xl">
          {project.title}
        </h2>
        <p className="rounded py-4 text-sm text-slate-400 md:w-[425px] md:bg-[#112240] md:px-4 md:py-6 md:pr-6 md:text-right">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-4 pt-4 text-sm text-slate-400 md:w-[300px] md:pt-6">
          {project.technologies.map((tech) => (
            <div key={tech} className="flex items-center gap-1">
              <GoTriangleRight className="text-accent" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 pt-6 text-2xl text-gray-300">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </a>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <FiExternalLink className="mb-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
