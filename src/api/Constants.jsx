//Constants.jsx
export const API_URL = "http://10.10.0.71/api";
export const ENDPOINTS = {
  LOGIN: `${API_URL}/Auth/signin`,
};

//Role Enum
export const eRole = Object.freeze({
  Admin: 1,
  Broker: 2,
  Supervisor4: 3,
  Supervisor24: 4,
  RR: 5,
  Applicant: 6,
  Operations: 7,
  BackOfficeUser: 8,
})
