import React from "react";

const PrimaryButton = ({ text = "", roundness = "", event = "", margin = "" }) => {
  return (
    <button
      onClick={typeof event === "function" ? event : () => {}}
      className={`bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 ${roundness} inline-block font-bold text-lg ${margin}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
