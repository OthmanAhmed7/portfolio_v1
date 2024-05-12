"use client";

import React, { useState } from "react";
import FormInputs from "./FormInputs";
import Button from "./Button";
import { inputs } from "@/app/constants/data";

interface FormValues {
  [key: string]: string;
}

const Form = () => {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
  });

  const [textArea, setTextArea] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(e.target.value);
  };
  return (
    <section className="max-w-[1024px]">
      <form onSubmit={handleSubmit} className="flex flex-col w-[50%] gap-6">
        {inputs.map((input) => (
          <FormInputs
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleInputChange}
          />
        ))}
        <div>
          <label className="font-semibold mt-4">Message</label>
          <textarea
            name="message"
            value={textArea}
            onChange={handleTextAreaChange}
            className="border border-black w-[27rem] h-[12rem]"
          ></textarea>
        </div>
        <button className="w-[8rem] rounded-md py-[6px] bg-main-color text-white">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
