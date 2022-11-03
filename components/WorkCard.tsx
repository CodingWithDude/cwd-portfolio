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
    <div className={`relative flex w-full flex-col`}>
      {" "}
      <InView
        rootMargin={`-${height / 2 - 50}px 0px -${height / 2 - 50}px 0px`}
      >
        {({ inView, ref }) => (
          <div className="flex flex-col">
            <div
              className={`flex w-full ${
                index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
              }`}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 lg:hidden">
                <Image
                  src={project.image}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  alt=""
                />
              </div>
              <div ref={ref} className={`hidden h-full w-full lg:flex`}>
                {" "}
                <div
                  className={`relative flex h-full w-full ${
                    index % 2 === 0 ? "" : "justify-end"
                  } `}
                  // ${
                  //   inView ? "lg:bg-background" : "rounded-[5px] lg:bg-accent"
                  // }
                >
                  <div
                    className={`relative h-screen max-h-[375px] w-full max-w-[650px] rounded-2xl  ${
                      inView ? "bg-background" : "bg-accent"
                    }`}
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="absolute top-0 left-0 bottom-0 right-0 z-[2] cursor-pointer"></div>
                    </a>
                    <Image
                      src={project.image}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      alt=""
                      className={`cursor-pointer rounded-xl duration-200 ease-in-out ${
                        inView ? "" : "opacity-80 mix-blend-multiply"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`z-[1] flex w-full flex-col bg-[#0e2641]/[.95] py-8 px-4 lg:absolute lg:-top-8 lg:bottom-0 lg:left-0 lg:right-0 lg:bg-transparent lg:px-0 ${
                index % 2 === 0 ? "lg:items-end" : "lg:items-start"
              } ${inView ? "" : ""}`}
            >
              <p className="pb-2 text-sm text-accent">Featured Project</p>
              <h2 className="pb-4 font-heebo text-xl font-bold text-primary md:text-2xl lg:pb-8 lg:text-3xl">
                {project.title}
              </h2>
              <p
                className={`rounded py-4 font-poppins text-secondary md:text-lg lg:w-[525px] lg:bg-[#112240] lg:px-4 lg:py-6 lg:pr-6  ${
                  index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                }`}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4 text-sm text-secondary lg:w-[300px] lg:pt-8">
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
