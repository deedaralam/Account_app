import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ApplicantContext = createContext();

export const ApplicantProvider = ({ children }) => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageNumber,setPageNumber] = useState(1);
  const [totalPages,setTotalPages] = useState(1)
  useEffect(() => {
    const fetchApplicants = async (page) => {
      const token = localStorage.getItem("accessToken");
      console.log(localStorage.getItem("accessToken"));
      if (!token) {
        setError("Unauthorized: Token missing.");
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(
          `http://10.10.0.71/api/Application/getclientapplications?PageNumber=1&PageSize=10`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setApplicants(res.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch applicants");
      } finally {
        setLoading(false);
      }
    };

    fetchApplicants();
  }, []);

  return (
    <ApplicantContext.Provider value={{ applicants, loading, error }}>
      {children}
    </ApplicantContext.Provider>
  );
};

export const useApplicant = () => useContext(ApplicantContext);
