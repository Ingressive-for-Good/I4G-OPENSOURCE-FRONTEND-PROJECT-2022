import React from "react";

const Button = (props) => {
  return (
    <button className="bg-primary-500 hover:bg-primary-400 hover:text-neutral-50 text-white py-4  active:bg-primary-700 active:text-neutral-50 w-full rounded-lg">
      {props.children}
    </button>
  );
};

export default Button;
