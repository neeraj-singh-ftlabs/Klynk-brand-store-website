import React from "react";

const SecondaryButton = ({ text }: any) => {
  return (
    <button className="bg-[#2F2F2F] text-white font-bold py-3 px-8 rounded-md">
      {text}
    </button>
  );
};

export default SecondaryButton;
