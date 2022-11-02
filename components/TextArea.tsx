import { FocusEvent } from "react";

interface Props {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error: boolean;
  errorMessage: string | undefined;
}

const TextArea = ({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  errorMessage = "",
  ...props
}: Props) => {
  return (
    <div className="mb-3 w-full">
      <div className="relative">
        <label htmlFor={id} className="mb-1 block text-lg">
          {label}
        </label>
        <textarea
          autoComplete="off"
          name={name}
          id={id}
          rows={5}
          style={{ resize: "none" }}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={` w-full rounded-md bg-gray-900 py-1 indent-2 outline-none  focus:ring-2
        focus:ring-accent ${error ? "ring-2 ring-red-500" : ""}`}
          {...props}
        ></textarea>
        {error ? (
          <p className="absolute -bottom-5 text-sm italic text-red-500">
            {errorMessage}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default TextArea;
