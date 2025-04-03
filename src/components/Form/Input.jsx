import React from "react";

const Input = ({ type, placeholder, label }) => {
  return (
    <div className="flex flex-col">
      <label className="text-xs text-white/85 mb-2.5 overflow-hidden w-28 text-ellipsis block text-nowrap">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="p-2 h-[30px] text-xs border border-white/15 rounded-sm focus:outline-0 placeholder:text-xs"
      
      />
    </div>
  );
};

export default Input;
