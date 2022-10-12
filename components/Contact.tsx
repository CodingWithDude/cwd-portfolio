import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    <section
      ref={ref}
      id="contact"
      className={`flex w-full flex-col items-center justify-center gap-4 px-6 pt-24 ${
        inView ? "fade-in-up" : "opacity-0"
      }`}
    >
      <p className="text-accent">04. What&apos;s Next?</p>
      <h3 className="font-heebo text-4xl  text-primary">Get In Touch</h3>
      <p className="max-w-md pb-4 text-center text-sm text-secondary">
        I am currently looking for any new opportunities to collaborate and
        grow. Whether you have a position for a fast learning self starter, or
        an open source project in need of support, reach out!
      </p>
      <button className="w-40 rounded border-2 border-accent p-4 text-accent filter transition duration-[.3s] ease-in-out hover:bg-accent hover:bg-opacity-[10%]">
        Contact Me
      </button>
    </section>
  );
};

export default Contact;
