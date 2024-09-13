import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/MusCo_Logo3.png";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gray-900">
      {/* Header Section with logo and text */}
      <img
        className="w-1/3 mb-20 transition-transform duration-500 transform rounded-2xl"
        src={Logo}
        alt="Logo MusCo Full-Stack MERN Developer"
        style={{ animation: "dynamicBounceAndRotate 10s infinite ease-in-out" }}
      />

      <header className="mb-32 text-center">
        <h1
          className="mb-10 text-5xl font-bold"
          style={{
            animation: "colorChangeAndScale 10s infinite ease-in-out",
          }}
        >
          Optimizing Stylesheet Loading in React
        </h1>
        <p className="mb-16 text-xl font-bold text-orange-400">
          Fixing "This Page Failed to Load a Stylesheet" Error
        </p>
      </header>
      {/* Updated Link Section */}
      <div className="flex justify-center gap-12 mb-20 text-xl">
        <Link
          to="/error"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 font-bold text-white transition-colors duration-300 bg-red-700 rounded-lg hover:bg-red-500"
        >
          Simulate Error
        </Link>
        <Link
          to="/fixed"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 font-bold text-white transition-colors duration-300 bg-green-700 rounded-lg hover:bg-green-500"
        >
          View Fixed Version
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
