import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import Input from "./Input";
import TextArea from "./TextArea";
import { validate } from "../utils/validate";

interface Props {
  setShowContactModal: (
    value: boolean | ((prevVar: boolean) => boolean)
  ) => void;
}

const ContactModal = ({ setShowContactModal }: Props) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(values);
    const isError = Object.keys(errors).length;
    if (isError && isError > 0) {
      setErrors(errors);
      return;
    }
    setErrors({});
    setShowContactModal((prev) => !prev);
    console.log(values);
  };

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm">
      <div className="flex h-screen items-center justify-center">
        <div className="flex-col justify-center rounded-lg border-4 border-sky-500 bg-white p-2">
          <div className="flex justify-end border-black text-3xl">
            <button onClick={() => setShowContactModal((prev) => !prev)}>
              <CgClose />
            </button>
          </div>
          <form
            className="flex flex-col rounded-lg"
            onSubmit={(e) => handleSubmit(e)}
          >
            <h1 className="text-2xl font-bold dark:text-gray-50">
              Send a message
            </h1>
            <Input
              error={!!errors.name}
              errorMessage={errors.name}
              value={values.name}
              onChange={onChange}
              id="name"
              name="name"
              placeholder="dude"
              label="Name"
            />
            <Input
              error={!!errors.email}
              errorMessage={errors.email}
              value={values.email}
              onChange={onChange}
              id="email"
              name="email"
              placeholder="dude@gmail.com"
              label="Email"
            />
            <TextArea
              error={!!errors.message}
              errorMessage={errors.message}
              value={values.message}
              onChange={onChange}
              id="message"
              name="message"
              placeholder="Hello there!"
              label="Message"
            />
            <div className="flex flex-row items-center justify-start">
              <button
                type="submit"
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
