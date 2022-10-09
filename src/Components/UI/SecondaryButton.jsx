import React from "react";

const SecondaryButton = (props) => {
  return (
    <button className="border-2 border-primary-300 hover:border-primary-400 active:border-primary-700 rounded-lg py-4  text-neutral-900 font-semibold text-[16px] w-full">
      {props.children}
    </button>
  );
};

export default SecondaryButton;
