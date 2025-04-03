import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Initialize from localStorage if available
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("accessToken") || null;
  });

  // Load user and token from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("accessToken");

    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      setToken(savedToken);
    }
  }, []);

  // Login function
  const login = async (username, password) => {
    try {
      const response = await axios.post("http://10.10.0.71/api/Auth/signin", {
        username,
        password,
        roleId: "6", // Default roleId
      });

      console.log("Login Response:", response.data.result); // Debug API response

      // Check if the expected fields exist
      if (response.data.result && response.data.result.accessToken) {
        // Use response.data.result for consistency (not response.data.userId)
        setUser(response.data.result);
        setToken(response.data.result.accessToken);

        // Store in localStorage
        localStorage.setItem("user", JSON.stringify(response.data.result));
        localStorage.setItem("accessToken", response.data.result.accessToken);

        // You might want to store more user info if available
        if (response.data.result.user) {
          localStorage.setItem(
            "userData",
            JSON.stringify(response.data.result.user)
          );
        }
      } else {
        console.error("Invalid response format", response.data);
        throw new Error("Invalid response format from server");
      }
    } catch (error) {
      console.error(
        "Login Failed:",
        error.response?.data?.message || error.message
      );
      throw error; // Re-throw the error so the calling code can handle it
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
