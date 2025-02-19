import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ClientLayout from "../layouts/ClientLayout";
import ClientLists from "../pages/Client/ClientLists";
import ClientForm from "../pages/Client/ClientForm";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Clients Routes */}
        <Route path="/clients" element={<ClientLayout />}>
          <Route path="lists" element={<ClientLists />} />
          <Route path="form" element={<ClientForm />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
