const InputSection = ({
  type,
  value,
  changeHandler,
  blurHandler,
  hasError,
  label,
  placeholder,
  name,
  error,
  min,
  max,
  labelClassName,
  inputClassName,
}) => {
  return (
    <section className="flex flex-col my-3">
      <label
        className={`flex flex-col ${
          hasError && "text-red-500 font-bold"
        } ${labelClassName}`}
      >
        {label}
        <input
          type={type}
          value={value === 0 ? "" : value}
          placeholder={placeholder}
          name={name}
          onChange={changeHandler}
          onBlur={blurHandler}
          className={`p-2 mt-1 ${inputClassName}`}
          min={min}
          max={max}
        />
      </label>
      {hasError && <p className="text-red-500">{error}</p>}
    </section>
  );
};

export default InputSection;
