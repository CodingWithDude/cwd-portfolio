interface Props {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  onBlur,
  error,
  errorMessage = "",
  ...props
}: Props) => {
  return (
    <div className="mb-4 w-full">
      <label className="mb-1 block text-lg" htmlFor="{id}">
        {label}
      </label>
      <div className="relative">
        <input
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete="off"
          id={id}
          name={name}
          placeholder={placeholder}
          type="text"
          className={`mb-4 w-full rounded-md bg-gray-900 py-1 indent-2 text-gray-400 placeholder-gray-400 shadow outline-none focus:ring-2 focus:ring-accent ${
            error ? "ring-2 ring-red-500" : ""
          }`}
          {...props}
        />
        {error ? (
          <p className="absolute -bottom-3 text-sm italic text-red-500">
            {errorMessage}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Input;
