import React from "react";
import { Outlet } from 'react-router-dom'
import Header from "../components/Header/Header";

const ClientLayout = () => {
    return (

        <div className="font-primary flex flex-col w-full h-screen bg-primary bg-[url('./assets/grid_bg.svg')] bg-cover ">
            {/* header here */}
            <Header/>
            < Outlet />
        </div>

    )
}

export default ClientLayout
