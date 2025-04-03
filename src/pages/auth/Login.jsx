import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ValidationSchema } from "../../Validations/validationSchema";
import { Button, Input, PasswordInput } from "../../components/Form/Form";
import { useAuth } from "../../Context/AuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "democlient",
      password: "Pac@123456",
    },
    validationSchema: ValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setError(""); // Clear previous errors

      try {
        await login(values.username, values.password); // ✅ Fixed typo
        navigate("/applicants"); // ✅ Redirect to dashboard after login
      } catch (error) {
        setError(error.response?.data?.message || "Login failed");
      }
      setSubmitting(false);
    },
  });

  return (
    <>
      {/* Logo */}
      <Link className="flex w-15 h-15 border border-white/25 text-center justify-center items-center text-white/50 uppercase rounded-lg">
        Logo
      </Link>

      {/* Main Captions */}
      <h1 className="text-8xl text-center text-white font-light capitalize">
        Welcome to <br /> Online account application
        <small className="block text-3xl py-5 text-white/20">
          Unlock Global Markets with a Single Click
        </small>
      </h1>

      {/* SignIn Section */}
      <div className="bg-gradient-to-l from-transparent via-lightDark to-transparent border border-white/10 w-[calc(100%-20px)] mx-10 p-10 rounded-xl">
        <div className="w-[30vw] mx-auto p-4">
          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-2 gap-2">
              <Input
                label="Username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                placeholder="Enter username"
                formik={formik}
              />
              <PasswordInput
                label="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Enter password"
                formik={formik}
              />
            </div>

            {/* Show API Errors */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <Button
              type="submit"
              label="Sign In"
              disabled={!formik.isValid || formik.isSubmitting}
              loading={formik.isSubmitting}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;