import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ClientLayout from "../layouts/ClientLayout";
import Applicants from "../pages/Client/Applicants";
import NotFound from "../pages/NotFound/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import useProgressBar from "../hooks/useProgressBar";
import ApplicantDetails from "../pages/Client/ApplicantDetails";

const AppRoutes = () => {
  const loading = useProgressBar();

  return (
    <Router>
      {/* Spinner during Loading */}
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}

      {/* Main Content - Hidden until loading is complete */}
      <div className={`app-container ${loading ? "hidden" : "fade-in"}`}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<AuthLayout />}>
            <Route element={<PublicRoute />}>
              <Route index element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Route>

          {/* Protected Routes */}
          <Route path="/applicants" element={<ClientLayout />}>
            <Route element={<ProtectedRoute />}>
              <Route path="" element={<Applicants />} />
              <Route path=":id" element={<ApplicantDetails />} />
            </Route>
          </Route>

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
