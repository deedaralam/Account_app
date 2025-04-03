import React from "react"; // ✅ Add this line
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GlobalContext from "./Context/GlobalContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContext>
      <App />
    </GlobalContext>
  </React.StrictMode>
);
