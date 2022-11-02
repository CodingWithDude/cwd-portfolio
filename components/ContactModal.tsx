import { useState } from "react";
import { CgClose } from "react-icons/cg";
interface Props {
  setShowModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const ContactModal = ({ setShowModal }: Props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = () => ({});

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm">
      <div className="flex h-screen items-center justify-center">
        <div className="flex-col justify-center rounded-lg border-4 border-sky-500 bg-white p-2">
          <div className="flex justify-end border-black text-3xl">
            <button onClick={() => setShowModal((prev) => !prev)}>
              <CgClose />
            </button>
          </div>
          <form className="flex flex-col rounded-lg">
            <h1 className="text-2xl font-bold dark:text-gray-50">
              Send a message
            </h1>

            <label
              htmlFor="name"
              className="mt-8 font-light text-gray-500 dark:text-gray-50"
            >
              Name<span className="text-red-500 dark:text-gray-50">*</span>
            </label>
            <input
              type="text"
              name="name"
              className="border-b bg-transparent py-2 font-light text-gray-500 ring-green-500 focus:rounded-md focus:outline-none focus:ring-1"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <label
              htmlFor="email"
              className="mt-4 font-light text-gray-500 dark:text-gray-50"
            >
              E-mail<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="border-b bg-transparent py-2 font-light text-gray-500 ring-green-500 focus:rounded-md focus:outline-none focus:ring-1"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label
              htmlFor="message"
              className="mt-4 font-light text-gray-500 dark:text-gray-50"
            >
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              className="border-b bg-transparent py-2 font-light text-gray-500 ring-green-500 focus:rounded-md focus:outline-none focus:ring-1"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
            <div className="flex flex-row items-center justify-start">
              <button
                type="submit"
                onSubmit={() => handleSubmit()}
                className="mt-8 flex flex-row items-center rounded-md bg-[#130F49] px-10 py-2 text-lg font-light text-gray-50"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
