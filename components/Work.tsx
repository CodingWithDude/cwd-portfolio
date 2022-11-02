import { useInView } from "react-intersection-observer";
import { projects } from "../utils/constants";
import SectionTitle from "./SectionTitle";
import WorkCard from "./WorkCard";

const Work = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    <section
      ref={ref}
      id="work"
      className={`flex w-full items-center justify-center pt-24 lg:items-center ${
        inView ? "" : "opacity-0"
      }`}
    >
      <div className="flex w-full max-w-[900px] flex-col items-center justify-center gap-10 lg:flex-row">
        <div className="flex w-full flex-col">
          <SectionTitle sectionNumber="03." title="Work" />
          <div className="flex flex-col gap-8 pt-12 md:gap-44 md:pt-16">
            {projects.map((project, index) => {
              return <WorkCard key={index} project={project} index={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
