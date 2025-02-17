import React from "react";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import { TiUserAdd } from "react-icons/ti";
import { IoPlaySkipForwardSharp } from "react-icons/io5";

const Login = () => {
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
                <li>
                    <Link className="w-36 h-36 bg-white flex justify-center items-center border border-white/70 rounded-xl hover:bg-primary transition-all text-primary hover:text-orange flex-col">
                        <span className="flex justify-center items-center  w-16 h-16 bg-orange rounded-full text-white text-2xl">
                            <FaUserTie />
                        </span>
                        <span className="text-lg">Broker</span>
                    </Link>
                </li>
                <li>
                    <Link className="w-36 h-36 bg-white flex justify-center items-center border border-white/70 rounded-xl hover:bg-primary transition-all text-primary hover:text-orange flex-col">
                        <span className="flex justify-center items-center  w-16 h-16 bg-orange rounded-full text-white text-2xl">
                            <FaUserShield />
                        </span>
                        <span className="text-lg">Admin</span>
                    </Link>
                </li>
                <li>
                    <Link className="w-36 h-36 bg-white flex justify-center items-center border border-white/70 rounded-xl hover:bg-primary transition-all text-primary hover:text-orange flex-col">
                        <span className="flex justify-center items-center  w-16 h-16 bg-orange rounded-full text-white text-2xl">
                            <HiUsers />
                        </span>
                        <span className="text-lg">Client</span>
                    </Link>
                </li>
                <li>
                    <Link className="w-36 h-36  flex justify-center items-center text-white ">
                        <span className="text-2xl text-orange font-medium">Sign Up</span>
                    </Link>
                </li>
                <li>
                    <Link className="w-36 h-36 bg-orange flex justify-center items-center border border-white/70 rounded-xl hover:bg-primary transition-all text-white/50 hover:text-orange flex-col">
                        <span className="flex justify-center items-center  w-16 h-16  text-white/50 text-5xl">
                            <TiUserAdd />
                        </span>
                        <span className="text-lg">Add Account</span>
                    </Link>
                </li>
                <li>
                    <Link className=" flex  rounded-xl hover:bg-primary transition-all text-white/50 hover:text-orange flex-col">
                        <span className="flex justify-center items-center text-5xl p-4 bg-amber-500 w-20 h-20 rounded-lg ">
                            <IoPlaySkipForwardSharp />
                        </span>
                        <span className="text-lg mt-2.5">Watch this video to learn<br />
                            how to use it effectively</span>
                    </Link>
                </li>
            </ul>
            {/* SignIn and SignUp Form Section  */}
            <div className="bg-gradient-to-l from-transparent via-lightDark to-transparent border border-white/10 w-[calc(100%-20px)] mx-10 p-10 rounded-xl">
                <div className="flex flex-row justify-center gap-4">
                    <div className="w-80 h-12 border border-white/10 rounded-lg">
                        <input
                            type="text"
                            placeholder="Username"
                            className="outline-none border-none p-4 h-12 w-full text-sm text-white/50 placeholder-white/70 placeholder-opacity-75 focus:shadow-inner transition-all"
                        />
                    </div>
                    <div className="w-80 h-12 border border-white/10 rounded-lg">
                        <input
                            type="text"
                            placeholder="Password"
                            className="outline-none border-none p-4 h-12 w-full text-sm text-white/50 placeholder-white/70 placeholder-opacity-75 focus:shadow-inner transition-all"
                        />
                    </div>

                </div>
            </div>


        </>
    );
};

export default Login;
