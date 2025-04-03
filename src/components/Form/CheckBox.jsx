import React, { useState } from "react";

const CheckBox = ({ label, name, handleCheckboxChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    const newCheckedState = !checked;
    setChecked(newCheckedState);
    if (handleCheckboxChange) {
      handleCheckboxChange(name, newCheckedState); // Notify parent with name
    }
  };
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        className="peer hidden"
        onChange={handleChange}
        checked={checked}
      />
      <div
        className={`w-5 h-5 border border-gray-300 rounded-md transition duration-200 ${
          checked ? "bg-orange border-orange" : ""
        }`}
      ></div>
      {label && <span className="text-xs text-white/85">{label}</span>}
    </label>
  );
};

export default CheckBox;
