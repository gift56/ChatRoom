import React from "react";

const CustomizeInput = ({
  htmlFor,
  showLabel,
  id,
  label,
  className,
  labelClassName,
  inpuClassName,
  error,
  onChange,
  onKeyDown,
  onBlur,
  accept,
  containerClass,
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-1 w-full ${containerClass}`}>
      {showLabel === false && (
        <label htmlFor={htmlFor} className={labelClassName}>
          {label}
        </label>
      )}
      <input
        {...props}
        className={`${className} ${error ? "border !border-red-400" : ""}`}
        id={id}
        onBlur={onBlur}
        onChange={onChange}
        accept={accept}
        onKeyDown={onKeyDown}
      />
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </div>
  );
};

export default CustomizeInput;
