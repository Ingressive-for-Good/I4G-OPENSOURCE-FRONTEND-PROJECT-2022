import React from "react";

const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      className="bg-primary-500 hover:bg-primary-400 hover:text-neutral-50 text-white py-4  active:bg-primary-700 active:text-neutral-50 disabled:bg-neutral-500 disabled:text-neutral-300 disabled:cursor-not-allowed w-full rounded-lg"
    >
      {props.children}
    </button>
  );
};

export default Button;
