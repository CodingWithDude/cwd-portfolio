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
      className={`flex w-full items-center justify-center pt-24 lg:items-center ${
        inView ? "" : "opacity-0"
      }`}
    >
      <div className="flex w-full max-w-[900px] flex-col items-center justify-center gap-10 lg:flex-row">
        <div className="flex w-full flex-col">
          <div className="flex justify-between gap-2">
            <p className="mt-[1px] self-center text-accent md:text-xl">03.</p>
            <h3 className="text-xl font-bold text-primary md:text-3xl">
              Some Things I&apos;ve Built
            </h3>
            <div className="flex-1 self-center border-b-[1px] border-secondary/60"></div>
          </div>
          <div className="flex flex-col gap-8 pt-12 md:gap-28">
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
