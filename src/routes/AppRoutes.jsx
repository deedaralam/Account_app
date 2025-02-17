import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<AuthLayout />}>
                    <Route index element={<Login />} />
                    <Route path='register' element={<Register />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes