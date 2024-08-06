import React from "react";

const PrimaryButton = ({ text }: any) => {
  return (
    <button className="bg-gradient-to-r from-[#EF4823] to-[#F47422] text-white font-bold py-3   px-8 rounded-md">
     {text}
    </button>
  );
};

export default PrimaryButton;
