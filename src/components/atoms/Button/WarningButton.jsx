import React from "react";

const WarningButton = (props) => {
  return (
    <button className="border-2 border-red-600 hover:border-red-400 active:border-primary-700 rounded-lg py-4 text-red-700 font-semibold text-[16px] w-full">
      {props.children}
    </button>
  );
};

export default WarningButton;
