import React from 'react'
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const token = localStorage.getItem("accessToken");

  return token ? <Navigate to="/applicants" replace /> : <Outlet />;
};

export default PublicRoute;