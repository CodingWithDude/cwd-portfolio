import { useInView } from "react-intersection-observer";

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <section
      ref={ref}
      id="experience"
      className={`flex w-full flex-col justify-center px-6 pt-24 md:px-32 lg:pl-[calc(50vw-400px)] ${
        inView ? "fade-in-up" : "opacity-0"
      }`}
    >
      <p className="text-primary">Experience - Comming Soon</p>
    </section>
  );
};

export default Experience;
