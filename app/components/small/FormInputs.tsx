import React from "react";

const FormInputs = (props: any) => {
  const { label, onChange, id, ...inputProps } = props;
  return (
    <div>
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} />
    </div>
  );
};

export default FormInputs;
