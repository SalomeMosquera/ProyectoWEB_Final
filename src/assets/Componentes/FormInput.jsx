import { forwardRef } from "react";
import React from "react";

const FormInput = forwardRef(
  ({ type, placeholder, onChange, onBlur, name, error, children }, ref) => {
    const errorClassInput = error ? "input-error" : "input-correcto";

    return (
      <div className="mb-6">
        <input
          className={errorClassInput}
          type={type}
          placeholder={placeholder}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
        />
        {children}
      </div>
    );
  }
);

export default FormInput;
