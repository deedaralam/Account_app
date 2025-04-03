import React, { useEffect, useState } from "react";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import { FaTable, FaFilter, FaPowerOff } from "react-icons/fa";
import { MdTableRows } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { HiBellAlert } from "react-icons/hi2";
import { AnimatePresence } from "framer-motion";
import Modal from "../Modal/Modal";
import { useAuth } from "../../Context/AuthContext";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { user, logout } = useAuth();
  const [storedUser, setStoredUser] = useState(null);

  // Load user data when the component mounts
  useEffect(() => {
    if (user) {
      setStoredUser(user);
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        setStoredUser(JSON.parse(savedUser));
      }
    }
  }, [user]);

  const userName = storedUser?.name || storedUser?.username || "Guest";
  const userInitials = userName.charAt(0).toUpperCase();

  // Hide buttons when on the form page
  const hideButtons = location.pathname === "/clients/form";

  // Logout handler
  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // Remove saved user
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 100);
  };
  return (
    <div className="flex p-2 w-full justify-between bg-primary relative">
      <div className="absolute bottom-0 w-full left-0 h-[1px] bg-gradient-to-l from-transparent via-orange/50 to-transparent"></div>
      <div className="flex items-center gap-10">
        <Link className="p-2 text-center border border-white/10 text-orange uppercase">
          logo
        </Link>
        <h1 className="text-sm text-white capitalize">Client Application</h1>
      </div>
      <div className="flex gap-4">
        {/* Filters Section */}
        {!hideButtons && (
          <div className="flex">
            {/* <div className="flex border-black border-4 rounded-xl">
              <button
                className={`flex cursor-pointer justify-center items-center gap-2 rounded-lg rounded-r-none border border-white/30 p-2 
                ${
                  activeView === "card"
                    ? "bg-primary text-white"
                    : "bg-gradient-to-r from-secondary to-primary text-white/30"
                }`}
                onClick={handleCardClick}
              >
                <span className="flex justify-center items-center text-lg text-white/30">
                  <FaTable />
                </span>
              </button> 
              <button
                className={`flex cursor-pointer justify-center items-center gap-2 rounded-lg rounded-l-none border border-white/30 p-2 
                ${
                  activeView === "table"
                    ? "bg-primary text-white"
                    : "bg-gradient-to-r from-secondary to-primary text-white/30"
                }`}
                onClick={handleTableClick}
              >
                <span className="flex justify-center items-center text-lg text-white/30">
                  <MdTableRows />
                </span>
              </button> 
            </div> */}

            {/* Filter Button */}
            <div className="border-black border-4 rounded-xl ml-2">
              <button className="flex justify-center items-center gap-2 rounded-lg bg-gradient-to-r from-secondary to-primary border border-white/30 p-2">
                <span className="flex justify-center items-center text-lg text-white/30 ">
                  <FaFilter />
                </span>
                <span className="text-sm text-white">Filter</span>
              </button>
            </div>
          </div>
        )}
        {/* Create New Button */}
        {!hideButtons && (
          <div className="flex justify-center items-center">
            <Link
              className="flex justify-center items-center p-2 bg-orange text-white text-sm rounded-lg border border-white/10 text-center"
              onClick={() => setIsOpen(true)}
            >
              <span className="text-center text-lg mr-1">
                <IoMdAdd />
              </span>
              <span>Create New</span>
            </Link>
          </div>
        )}
        {/* User Auth Section */}
        <div className="flex gap-2 items-center border border-white/10 bg-gradient-to-r from-secondary to-primary rounded-full">
          <span className="w-10 h-10 border border-white/80 rounded-full items-center justify-center flex">
            <Link to="" className="text-orange text-lg text-center">
              {userInitials}
            </Link>
          </span>
          <span className="text-sm text-white/70">{userName}</span>
          <Link
            to=""
            className="w-8 h-8 rounded-lg border-orange/50 text-lg text-center border text-orange flex justify-center items-center"
          >
            <HiBellAlert />
          </Link>
          <Link
            onClick={handleLogout}
            to=""
            className="w-8 h-8 border border-white/10 rounded-full bg-secondary flex justify-center items-center text-white text-lg"
          >
            <FaPowerOff />
          </Link>
        </div>
      </div>

      {/* AnimatePresence ensures exit animations run */}
      <AnimatePresence>
        {isOpen && (
          <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
