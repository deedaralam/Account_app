import React from "react"; // ✅ Add this line
import ReactDOM from "react-dom/client";
import './index.css'
import App from "./App";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
