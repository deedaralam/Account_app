import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  
  return (
    <>
      {/* Logo here */}
      <Link className="flex w-15 h-15 border border-white/25 text-center justify-center items-center text-white/50 uppercase rounded-lg">
        Logo
      </Link>
      {/* Main Captions H1 */}
      <h1 className="text-8xl text-center text-white font-light capitalize">
        Seamless Trading Starts Here <br /> Register in Minutes!
        <small className="block text-3xl py-5 text-white/20">
          Trade the World at Your Fingertips
        </small>
      </h1>
      {/* SignIn and SignUp Section */}
      <label className="text-xl font-normal text-white/60 mb-4">
        Already Registered?{" "}
        <span
          className="text-orange italic underline cursor-pointer"
          
        >
          Sign In
        </span>{" "}
        and Start Trading
      </label>
      
     
    </>
  );
};

export default Register;
