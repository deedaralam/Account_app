import React from "react";
import { motion } from "framer-motion";
import { LuUser, LuRockingChair } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
const Modal = ({ isOpen, handleClose }) => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    handleClose(); // Close the modal
    navigate("/clients/form"); // Navigate to /form page
  };
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/70 bg-opacity-30 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      onClick={handleClose} // Clicking outside the modal closes it
    >
      <motion.div
        className="bg-black relative rounded-lg shadow-xl p-2 max-w-2xl w-full border border-white/10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
      >
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent top-0 absolute"></div>
        <div className="flex justify-between items-center">
          <h1 className="text-sm font-medium text-white capitalize bg-black p-2 relative">
            Create new account{" "}
            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent backdrop-blur-md opacity-10"></div>{" "}
          </h1>
          <div
            className=" cursor-pointer text-xs text-white capitalize bg-black border border-orange/40 py-1 px-2 rounded-sm"
            onClick={handleClose}
          >
            X
          </div>
        </div>

        <div className="flex flex-row gap-3 items-center my-2">
          <div className="p-4 w-full h-[400px]">
            <h2 className="text-xs font-normal text-white capitalize mb-5">
              Which account would you like to open?
            </h2>
            <div className="flex  gap-3  items-center mb-3">
              <div className="w-full h-[168px] flex flex-col items-center justify-center  p-2 rounded-sm bg-primary ">
                <span className="bg-white rounded-full p-2 w-20 h-20 mb-2 flex justify-center items-center text-4xl">
                  <LuUser />
                </span>
                <span className="text-white text-xs text-center">Personal</span>
              </div>
              <div className="w-full h-[168px] flex flex-col items-center justify-center  p-2 rounded-sm bg-primary ">
                <span className="bg-white rounded-full p-2 w-20 h-20 mb-2 flex justify-center items-center text-4xl">
                  <FiUsers />
                </span>
                <span className="text-white text-xs text-center">Entity</span>
              </div>
            </div>
            <div className="w-full h-[168px] flex flex-col items-center justify-center  p-2 rounded-sm bg-primary ">
              <span className="bg-white rounded-full p-2 w-20 h-20 mb-2 flex justify-center items-center text-4xl">
                <LuRockingChair />
              </span>
              <span className="text-white text-xs text-center">Retirement</span>
            </div>
          </div>
          <div className="p-4 bg-primary w-full h-[400px] rounded-sm relative">
            <h2 className="text-xs font-normal text-white capitalize mb-4">
              Which personal account?
            </h2>
            <div className="border border-white/10 rounded-xl p-2 h-[50px] w-full">
              <select class="peer w-full  bg-transparent focus:outline-none text-white text-xs ">
                <option value="" disabled selected>
                  Select an option
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="flex justify-between items-center border border-white/10 rounded-xl p-2 w-full my-4 h-[50px]">
              <label className="text-white text-xs">Select Account Type</label>
              <label class="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="accountType"
                  value="cash"
                  class="peer hidden"
                />
                <div class="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center peer-checked:border-orange-500">
                  <div class="w-2.5 h-2.5 bg-orange-500 rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
                </div>
                <span class="text-white peer-checked:text-orange-500 text-xs">
                  Cash
                </span>
              </label>
              <label class="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="accountType"
                  value="margin"
                  class="peer hidden"
                />
                <div class="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center peer-checked:border-orange-500">
                  <div class="w-2.5 h-2.5 bg-blue-500 rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
                </div>
                <span class="text-white peer-checked:text-orange-500 text-xs">
                  Margin
                </span>
              </label>
            </div>
            <div className="flex justify-center mt-10 absolute bottom-5 w-[280px]">
              <button
                onClick={handleNextClick}
                className="w-full p-2 rounded-xl text-primary justify-center flex items-center font-bold h-[50px] text-xs border-none text-center 
              bg-orange  relative overflow-hidden
              "
              >
                <div className="absolute inset-0 bg-[url('./assets/grain_bg.png')] bg-cover bg-center opacity-20 pointer-events-none"></div>
                Next
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
