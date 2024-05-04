import React from "react";

const Button = ({ name }: { name: string }) => {
  return (
    <div>
      <button className="px-6 rounded-md py-[6px] bg-main-color">{name}</button>
    </div>
  );
};

export default Button;
