import { useState } from "react";

const ToggleSwitch = ({ isChecked, onToggle, labelOn = "Yes", labelOff = "No" }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={onToggle}
      />
      <div className="w-16 h-8 bg-gray-300 rounded-full peer-checked:bg-green-500 relative transition-all">
        <div
          className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
            isChecked ? "translate-x-8" : "translate-x-0"
          }`}
        />
      </div>
      <span className="ml-3 text-sm font-medium text-gray-700">
        {isChecked ? labelOn : labelOff}
      </span>
    </label>
  );
};

export default ToggleSwitch;