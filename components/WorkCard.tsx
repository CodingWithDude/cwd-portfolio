import Image from "next/image";
import { InView } from "react-intersection-observer";
import { useWindowSize } from "react-use";
import { GoTriangleRight } from "react-icons/go";

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
    <div className="my-12 duration-200 ease-in">
      <div className="relative w-full rounded-xl shadow-lg md:max-w-[500px]">
        <InView
          threshold={0}
          rootMargin={`-${height / 2 - 50}px 0px -${height / 2 - 50}px 0px`}
        >
          {({ inView, ref }) => (
            <div className={`w-full rounded-xl md:max-h-[499px] md:bg-accent `}>
              <div
                className={`absolute -z-[3] hidden h-full w-full rounded-lg border-2 border-accent duration-200 ease-in md:block md:max-h-[500px] md:max-w-[500px]  ${
                  inView ? "top-4 right-4 " : "top-6 right-6 "
                }`}
              ></div>
              <div
                ref={ref}
                className="flex flex-col rounded-lg md:max-h-[500px]"
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={project.image}
                    alt="blog"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                    className={`cursor-pointer rounded-lg duration-200 ease-in ${
                      inView
                        ? ""
                        : "mix-blend-multiply md:opacity-90 md:grayscale-[.5]"
                    }`}
                  />
                </a>
              </div>
            </div>
          )}
        </InView>
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 md:left-[50%]">
        <div className="flex h-full w-full items-center rounded-lg bg-[#0c2034]/95 p-6  md:bg-transparent">
          <div className="flex flex-col">
            <p className="pb-2 text-sm text-accent md:self-center">
              Featured Project
            </p>
            <h2 className="text-2xl font-bold text-gray-100 md:self-center">
              {project.title}
            </h2>
            <div className="my-6 md:w-[400px] md:self-center md:rounded-lg md:bg-[#112240]">
              <p className="text-gray-400 md:p-4">{project.description}</p>
            </div>
            <div className="rounded-lg p-2 md:flex md:w-[200px] md:justify-center md:self-center ">
              <div className="flex gap-4 text-xs text-gray-400 md:flex-col">
                {project.technologies.map((tech, index) => {
                  return (
                    <div key={index} className="flex items-center gap-1">
                      <GoTriangleRight className="text-accent" />
                      {tech}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
