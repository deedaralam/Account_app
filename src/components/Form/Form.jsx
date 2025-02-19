import React from "react";

const Form = ({type,placeholder}) => {
  return (
    <>
      {/* Input Form  */}
      <div className="h-12 border border-white/10 rounded-lg">
        <input
          type={type}
          placeholder={placeholder}
          className="outline-none border-none p-4 h-12 w-full text-sm text-white/50 placeholder-white/70 placeholder-opacity-75 focus:shadow-inner transition-all"
        />
      </div>
    </>
  );
};

export default Form;
