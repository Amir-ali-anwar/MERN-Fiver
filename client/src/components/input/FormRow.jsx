import React from "react";
import "./Register.scss";
const FormRow = ({
  type,
  className,
  handleChange,
  labelText,
  labelClass,
  value,
  name,
}) => {
  return (
    <>
      <label htmlFor={labelText} className={labelClass}>
        {labelText}
      </label>
      <input
        type={type || "text"}
        className={className}
        onChange={handleChange}
        value={value}
        name={name}
      />
    </>
  );
};

export default FormRow;
