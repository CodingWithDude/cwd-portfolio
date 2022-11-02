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

const Input = ({
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
      <label className="block text-lg" htmlFor="{id}">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        autoComplete="off"
        id={id}
        name={name}
        placeholder={placeholder}
        type="text"
        className="w-full rounded-md border-gray-400 border-opacity-50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
        {...props}
      />
      {error ? (
        <p className="text-sm italic text-red-500">{errorMessage}</p>
      ) : null}
    </div>
  );
};

export default Input;
