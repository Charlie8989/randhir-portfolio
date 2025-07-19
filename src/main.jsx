import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // <-- yeh default import hai
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
