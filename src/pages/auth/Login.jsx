import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import { TiUserAdd } from "react-icons/ti";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import LoginTabs from "../../components/Login/LoginTabs";
import Form from "../../components/Form/Form";
const Login = () => {
  const [activeTab, setActiveTab] = useState("Admin"); // Default active tab

  return (
    <>
      {/* Logo here */}
      <Link className="flex w-15 h-15 border border-white/25 text-center justify-center items-center text-white/50 uppercase rounded-lg">
        Logo
      </Link>
      {/* Main Captions H1 */}
      <h1 className="text-8xl text-center text-white font-light capitalize">
        Welcome to <br /> Online account application{" "}
        <small className="block text-3xl py-5 text-white/20">
          Unlock Global Markets with a Single Click
        </small>
      </h1>
      {/* SignIn and SignUp Section */}
      <label className="text-xl font-normal text-white/60">
        Open the Door to Smart Trading –{" "}
        <span className="text-orange italic underline">Sign In</span> or{" "}
        <span className="text-orange italic underline">Sign Up</span> Today!
      </label>
      <ul className="flex my-5 space-x-4">
        <LoginTabs
          icon={<FaUserTie />}
          label="Broker"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <LoginTabs
          icon={<FaUserShield />}
          label="Admin"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <LoginTabs
          icon={<HiUsers />}
          label="Client"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <li>
          <Link className="w-30 h-30  flex justify-center items-center text-white ">
            <span className="text-xl text-orange font-medium">Sign Up</span>
          </Link>
        </li>
        <li>
          <Link className="w-30 h-30 bg-orange flex justify-center items-center border border-white/70 rounded-xl hover:bg-primary transition-all text-white/50 hover:text-orange flex-col">
            <span className="flex justify-center items-center  w-12 h-12  text-white/50 text-5xl">
              <TiUserAdd />
            </span>
            <span className="text-sm">Add Account</span>
          </Link>
        </li>
        <li>
          <Link className=" flex  rounded-xl hover:bg-primary transition-all text-white/50 hover:text-orange flex-col">
            <span className="flex justify-center items-center text-5xl p-4 bg-amber-500 w-19 h-19 rounded-lg ">
              <IoPlaySkipForwardSharp />
            </span>
            <span className="text-sm mt-2">
              Watch this video to learn
              <br />
              how to use it effectively
            </span>
          </Link>
        </li>
      </ul>
      {/* SignIn and SignUp Form Section  */}
      <div className="bg-gradient-to-l from-transparent via-lightDark to-transparent border border-white/10 w-[calc(100%-20px)] mx-10 p-10 rounded-xl">
        <div className="flex flex-row justify-center gap-4">
          {/* Username + Remind Me */}
          <div className="w-80">
          <Form type="text" placeholder="Enter your username"/>
            {/* Remind Me Checkbox */}
            <div className="flex items-center mt-2 space-x-2">
              <input
                type="checkbox"
                id="remindMe"
                className="w-6 h-6 text-blue-600 bg-secondary border border-white/10 rounded-lg focus:ring-orange focus:ring-2 appearance-none checked:bg-orange checked:border-orange"
              />
              <label
                htmlFor="remindMe"
                className="text-white text-sm cursor-pointer"
              >
                Remind Me
              </label>
            </div>
          </div>

          {/* Password + Forgot Password Link */}
          <div className="w-80">
            <Form type="password" placeholder="Enter your password"/>
            {/* Forgot Password Link */}
            <div className="mt-2">
              <a href="#" className="text-orange text-sm hover:none">
                Forgot Password or Username?
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Link
            className="w-lg p-2 rounded-xl text-white text-lg border-none text-center 
              bg-orange  relative overflow-hidden
              "
          >
            <div className="absolute inset-0 bg-[url('./assets/grain_bg.png')] bg-cover bg-center opacity-20 pointer-events-none"></div>
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
