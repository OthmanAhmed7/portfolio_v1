"use client";

import React, { useState } from "react";
import FormInputs from "./FormInputs";
import Button from "./Button";
import { inputs } from "@/app/constants/data";

const Form = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInputs
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          />
        ))}
        <label>Message</label>
        <textarea name="message"></textarea>
        <Button name="Submit" />
      </form>
    </div>
  );
};

export default Form;
