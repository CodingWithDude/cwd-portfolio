import { useInView } from "react-intersection-observer";
import { projects } from "../utils/constants";
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
      className={`flex items-center justify-center pt-24 lg:items-center ${
        inView ? "fade-in-up" : "opacity-0"
      }`}
    >
      <div className="flex max-w-[900px] flex-col items-center justify-center gap-10 lg:flex-row">
        <div className="flex flex-col">
          <div className="flex justify-between gap-2">
            <p className="self-center text-accent md:text-xl">02.</p>
            <h3 className="text-xl font-bold text-primary md:text-3xl">
              Some Things I&apos;ve Built
            </h3>
            <div className="flex-1 self-center border-b-[1px] border-secondary/60"></div>
          </div>
          <div className="w-full">
            {projects.map((project) => {
              return <WorkCard key={project.title} project={project} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
