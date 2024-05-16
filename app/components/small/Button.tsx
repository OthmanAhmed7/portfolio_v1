import React from "react";

const Button = ({ name, link }: { name: string; link: string }) => {
  return (
    <div>
      <button className="px-6 rounded-md py-[6px] bg-main-color text-white">
        <a href={link}>{name}</a>
      </button>
    </div>
  );
};

export default Button;
