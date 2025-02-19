import React from "react";
import { Link } from "react-router-dom";
import { HiBellAlert } from "react-icons/hi2";
import { FaPowerOff } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { MdTableRows } from "react-icons/md";
import { FaTable } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex p-2 w-full justify-between bg-primary relative">
        <div className=" absolute bottom-0 w-full left-0 h-[1px] bg-gradient-to-l from-transparent via-orange/50 to-transparent"></div>
      <div className="flex items-center gap-10">
        <Link className="p-2 text-center border border-white/10 text-orange uppercase">
          logo
        </Link>
        <h1 className="text-sm text-white capitalize">Client Application</h1>
      </div>
      <div className="flex gap-4">
        {/* Filters Section */}
        <div className="flex">
        <div className="flex  border-black border-4 rounded-xl">
        <button className="flex justify-center items-center gap-2 rounded-lg rounded-r-none bg-gradient-to-r from-secondary to-primary border border-white/30 p-2">
            <span className="flex just-center item-center text-lg text-white/30">
              <FaTable />
            </span>
            
          </button>
            <button className="flex justify-center items-center gap-2 rounded-lg rounded-l-none bg-gradient-to-r from-secondary to-primary border border-white/30 p-2">
            <span className="flex just-center item-center text-lg text-white/30">
              <MdTableRows />
            </span>
            
          </button>
            </div>
            <div className=" border-black border-4 rounded-xl">
            <button className="flex justify-center items-center gap-2 rounded-lg bg-gradient-to-r from-secondary to-primary border border-white/30 p-2">
            <span className="flex just-center item-center text-lg text-white/30 ">
              <FaFilter />
            </span>
            <span className="text-sm text-white">Filter</span>
          </button>
            </div>
          
        </div>
        {/* Create New Button */}
        <div className="flex justify-center items-center">
          <button className="flex justify-center items-center p-2 bg-orange text-white text-sm rounded-lg border border-white/10 text-center">
            <span className="text-center text-lg mr-1">
              <IoMdAdd />
            </span>{" "}
            <span>Create New</span>
          </button>
        </div>
        {/* User Auth Section */}
        <div className="flex gap-2 items-center border border-white/10 bg-gradient-to-r from-secondary to-primary    rounded-full">
          <span className="w-10 h-10 border border-white/80 rounded-full items-center justify-center flex">
            <Link to="" className="text-orange text-lg text-center">
              DA
            </Link>
          </span>
          <span className="text-sm text-white/70 ">DeedarAlam</span>
          <Link
            to=""
            className="w-8 h-8 rounded-lg border-orange/50 text-lg text-center border text-orange flex justify-center items-center"
          >
            <HiBellAlert />
          </Link>
          <Link
            to=""
            className="w-8 h-8 border border-white/10 rounded-full bg-secondary flex justify-center items-center text-white text-lg"
          >
            <FaPowerOff />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
