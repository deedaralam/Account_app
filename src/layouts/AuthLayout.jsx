import React from "react";
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (

        <div className="font-primary flex flex-col w-full h-screen bg-primary relative justify-center items-center">
            < Outlet />
            {/* <div className="absolute w-screen h-screen border  bg-radial from-lightDark/50 to-transparent"></div> */}
        </div>

    )
}

export default AuthLayout
