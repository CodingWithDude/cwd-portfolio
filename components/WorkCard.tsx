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
  index: number;
}

const WorkCard = ({ project, index }: Props) => {
  const { height } = useWindowSize();
  return (
    <div className={`relative flex w-full max-w-[900px] flex-col`}>
      {" "}
      <InView
        rootMargin={`-${height / 2 - 50}px 0px -${height / 2 - 50}px 0px`}
      >
        {({ inView, ref }) => (
          <div className="flex flex-col">
            <div
              className={`flex w-full ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 md:hidden">
                <Image
                  src={project.image}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt=""
                />
              </div>
              <div
                ref={ref}
                className={`hidden h-[323px] w-[549px] md:block  ${
                  inView ? "md:bg-background" : "rounded-[5px] md:bg-accent"
                }`}
              >
                <Image
                  src={project.image}
                  layout="fixed"
                  objectFit="cover"
                  width={550}
                  height={323}
                  alt=""
                  className={`self-end rounded duration-700 ease-in-out ${
                    inView ? "" : "opacity-[.6] "
                  }`}
                />
              </div>
            </div>
            <div
              className={`z-[1] flex w-full flex-col bg-[#0e2641]/[.9] py-8 px-4 md:absolute md:-top-8 md:bottom-0 md:left-0 md:right-0 md:bg-transparent md:px-0 ${
                index % 2 === 0 ? "md:items-end" : "md:items-start"
              }`}
            >
              <p className="pb-2 text-sm text-accent">Featured Project</p>
              <h2 className="pb-4 font-heebo text-xl font-bold text-primary md:pb-6 md:text-2xl">
                {project.title}
              </h2>
              <p
                className={`rounded py-4 font-poppins text-secondary md:w-[425px] md:bg-[#112240] md:px-4 md:py-4 md:pr-6  ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4 text-sm text-secondary md:w-[300px] md:pt-6">
                {project.technologies.map((tech) => (
                  <div key={tech} className="flex items-center gap-1">
                    <GoTriangleRight className="text-accent" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-8 text-2xl text-primary">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub />
                </a>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink className="mb-1" />
                </a>
              </div>
            </div>
          </div>
        )}
      </InView>
    </div>
  );
};

export default WorkCard;
