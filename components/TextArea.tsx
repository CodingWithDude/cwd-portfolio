interface Props {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
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
  error,
  errorMessage = "",
  ...props
}: Props) => {
  return (
    <div className="mb-3 w-full">
      <label htmlFor={id} className="block text-lg">
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
        {...props}
      ></textarea>
      {error ? (
        <p className="text-sm italic text-red-500">{errorMessage}</p>
      ) : null}
    </div>
  );
};

export default TextArea;
