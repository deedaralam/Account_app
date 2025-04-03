import React from 'react'
import { AuthProvider } from "./AuthContext";
import { ApplicantProvider } from './ApplicantContext';

const GlobalContext = ({ children }) => {
  return (
  <AuthProvider>
    <ApplicantProvider>
    {children}
    </ApplicantProvider>
   
    </AuthProvider>
  );
};

export default GlobalContext;