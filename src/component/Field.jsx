import React from "react";

const Field = ({
  name,
  id,
  type,
  placeholder,
  setstate,
  error,
  errorState,
}) => {
  return (
    <div className="input_field">
      <label htmlFor={id}>{name}</label>
      <input
        name={id}
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={(e) => setstate(e.target.value)}
      />
      {errorState && <p className="errorMessage">{error}</p>}
    </div>
  );
};

export default Field;
