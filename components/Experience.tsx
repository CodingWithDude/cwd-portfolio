import { useInView } from "react-intersection-observer";
import SectionTitle from "./SectionTitle";

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <section
      ref={ref}
      id="experience"
      className={`flex flex-col items-center justify-center pt-24 ${
        inView ? "fade-in-up" : "opacity-0"
      }`}
    >
      <div className="w-full max-w-[900px]">
        <SectionTitle sectionNumber="02." title="Experience" />
      </div>
    </section>
  );
};

export default Experience;
