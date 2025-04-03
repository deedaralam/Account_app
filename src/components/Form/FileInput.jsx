import React,{useState} from "react";

const FileInput = ({ label }) => {

  
  return (
    <div className="flex flex-col">
  <label className="text-xs text-white/85 mb-2.5 overflow-hidden w-28 text-ellipsis block text-nowrap">
    {label}
  </label>
  <div className="relative">
    <input
      type="file"
      accept=".pdf,.doc,.docx,.png,.jpeg"
      multiple
      className="hidden"
      id="file-upload"
    />
    <label
      htmlFor="file-upload"
      className="cursor-pointer px-4 py-1 text-xs bg-orange text-white rounded-sm hover:bg-orange transition"
    >
      Browse
    </label>
  </div>
</div>
  );
};

export default FileInput;
