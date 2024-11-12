import React from "react";

const FormError = ({ error }) => {
  return (
    <>
      {error && (
        <p className="error-text">
          <span>OOPs! </span>
          {error.message}
        </p>
      )}
    </>
  );
};

export default FormError;
