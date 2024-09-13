import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage"; // Import the HomePage component
import ErrorPage from "./ErrorPage"; // Import the ErrorPage component
import FixedPage from "./FixedPage"; // Import the FixedPage component

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> {/* HomePage for root path */}
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/fixed" element={<FixedPage />} />
    </Routes>
  );
};

export default AppRoutes;
