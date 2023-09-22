import React, { useState } from "react";

const Square = ({ value, onSqrClick }) => {
  console.log(value);
  return (
    <button
      className={` p-0  bg-white m-2 text-center text-black font-bold text-4xl h-32 w-32 `}
      onClick={onSqrClick}
    >
      {value ? value : <span className="text-white">F</span>}
    </button>
  );
};

export default Square;
