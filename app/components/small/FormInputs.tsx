import React, { useState } from "react";

const FormInputs = (props: any) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="flex flex-col">
      <label className="font-semibold">{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        required
        className="border border-black w-[19.7rem] md:w-[27rem] h-[2rem] outline-none"
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className="text-sm text-rose-500 hidden">{errorMessage}</span>
    </div>
  );
};

export default FormInputs;
