const Contact = () => {
  return (
    <section
      id="contact"
      className="flex w-full flex-col items-center justify-center gap-4 px-6 pt-24"
    >
      <p className="text-[#64ffda]">04. What&apos;s Next?</p>
      <h3 className="font-heebo text-4xl  text-[#c6d0ef]">Get In Touch</h3>
      <p className="max-w-md pb-4 text-center text-sm text-[#8892b0]">
        I am currently looking for any new opportunities to collaborate and
        grow. Whether you have a position for a fast learning self starter, or
        an open source project in need of support, reach out!
      </p>
      <button className="w-40 rounded border-2 border-[#64ffda] p-4 text-[#64ffda] filter transition duration-[.3s] ease-in-out hover:bg-[#64ffda] hover:bg-opacity-[10%]">
        Contact Me
      </button>
    </section>
  );
};

export default Contact;
