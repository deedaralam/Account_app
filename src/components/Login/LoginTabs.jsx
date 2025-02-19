import React, { useState } from "react";
import { Link } from "react-router-dom";
const LoginTabs = ({ icon, label, activeTab, setActiveTab }) => {
  const isActive = activeTab === label;
  return (
    <li>
      <Link
        className={`w-30 h-30  flex justify-center items-center border  rounded-xl hover:bg-primary transition-all  hover:text-orange flex-col  ${
          isActive ? "bg-primary text-orange border-orange" : "bg-gray-300 text-black border-white/70"
        }
      `}
        onClick={() => setActiveTab(label)}
      >
        <span className="flex justify-center items-center  w-12 h-12 bg-orange rounded-full text-white text-2xl">
          {icon}
        </span>
        <span className="text-sm">{label}</span>
      </Link>
    </li>
  );
};

export default LoginTabs;
