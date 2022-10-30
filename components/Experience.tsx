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
      className={`flex flex-col justify-center pt-24 lg:items-center ${
        inView ? "fade-in-up" : "opacity-0"
      }`}
    >
      <p className="text-primary">Experience - Coming Soon</p>
    </section>
  );
};

export default Experience;
