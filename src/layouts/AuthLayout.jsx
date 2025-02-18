import React from "react";
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (

        <div className="font-primary flex flex-col w-full h-screen bg-primary bg-[url('./assets/grid_bg.svg')] bg-cover  relative justify-center items-center">
            < Outlet />
        </div>

    )
}

export default AuthLayout
