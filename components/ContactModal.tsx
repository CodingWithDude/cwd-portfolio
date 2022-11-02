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

  const onBlur = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const errors = validate(values);

    if (
      errors.name &&
      Object.keys(errors.name).length !== 0 &&
      e.target.name === "name"
    ) {
      const updatedValue = { name: `${errors.name}` };
      setErrors((errors) => ({
        ...errors,
        ...updatedValue,
      }));
      return;
    }
    if (
      errors.email &&
      Object.keys(errors.email).length !== 0 &&
      e.target.name === "email"
    ) {
      const updatedValue = { email: `${errors.email}` };
      setErrors((errors) => ({
        ...errors,
        ...updatedValue,
      }));
      return;
    }
    if (
      errors.message &&
      Object.keys(errors.message).length !== 0 &&
      e.target.name === "message"
    ) {
      const updatedValue = { message: `${errors.message}` };
      setErrors((errors) => ({
        ...errors,
        ...updatedValue,
      }));
      return;
    }
    setErrors(errors);
  };

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="fixed inset-0 z-[2] backdrop-blur-sm">
      <div className="mx-auto flex h-screen w-full max-w-[500px] items-center justify-center px-8">
        <div className="w-full flex-col justify-center rounded bg-[#0e2641] p-8 shadow-[8px_8px_5px_0px_rgba(0,0,0,0.2)]">
          <div className="mb-4 flex-col text-3xl text-gray-300">
            <div className="flex justify-between">
              <h1 className="font-heebo">Contact Me</h1>
              <button onClick={() => setShowContactModal((prev) => !prev)}>
                <CgClose className="hover:text-accent" />
              </button>
            </div>
          </div>
          <form
            className="flex flex-col rounded-lg text-gray-400"
            onSubmit={(e) => handleSubmit(e)}
          >
            <Input
              error={!!errors.name}
              errorMessage={errors.name}
              value={values.name}
              onChange={onChange}
              onBlur={onBlur}
              id="name"
              name="name"
              placeholder="Dude"
              label="Name"
            />
            <Input
              error={!!errors.email}
              errorMessage={errors.email}
              value={values.email}
              onChange={onChange}
              onBlur={onBlur}
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
              onBlur={onBlur}
              id="message"
              name="message"
              placeholder="Hello there!"
              label="Message"
            />
            <div className="flex flex-row items-center justify-start">
              <button
                type="submit"
                className="mt-8 flex flex-row items-center rounded-md border-2 border-accent bg-[#0e2641] p-4 px-10 py-2 text-lg font-medium text-accent filter transition duration-[.3s] ease-in-out hover:bg-accent hover:bg-opacity-[10%] "
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
