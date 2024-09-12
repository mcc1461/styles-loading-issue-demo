import "./index.css"; // Tailwind CSS
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import FixedPage from "./FixedPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/fixed" element={<FixedPage />} />
        <Route
          path="*"
          element={
            <h1 className="text-center text-white">404: Page Not Found</h1>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
