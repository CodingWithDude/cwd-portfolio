import { useInView } from "react-intersection-observer";

const Work = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    <section
      ref={ref}
      id="work"
      className={`flex w-full flex-col justify-center px-6 pt-20 md:px-32 lg:items-center ${
        inView ? "fade-in-up" : "opacity-0"
      }`}
    >
      <p className="text-primary">Work - Comming Soon</p>
    </section>
  );
};

export default Work;
