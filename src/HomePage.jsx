import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/MusCo_Logo3.png";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-white bg-gray-900 lg:px-24">
      {/* Header Section with logo and text */}
      <img
        className="w-2/3 mb-16 transition-transform duration-500 transform rounded-2xl sm:w-1/2 md:w-1/3 lg:w-1/4"
        src={Logo}
        alt="Logo MusCo Full-Stack MERN Developer"
        style={{ animation: "dynamicBounceAndRotate 10s infinite ease-in-out" }}
      />

      <header className="flex flex-col items-center mb-24 text-center lg:w-2/3">
        <h1
          className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl lg:mb-10"
          style={{
            animation: "colorChangeAndScale 10s infinite ease-in-out",
          }}
        >
          Optimizing Stylesheet Loading in React
        </h1>
        <p className="mb-12 text-lg font-bold text-orange-400 sm:text-xl md:mb-16 lg:text-2xl">
          Fixing "This Page Failed to Load a Stylesheet" Error
        </p>
      </header>

      {/* Combined Title and Buttons Section */}
      <div className="flex flex-col items-center justify-center gap-6 mb-16 text-lg lg:flex-row lg:justify-between lg:w-3/4 md:mb-20 lg:gap-12">
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            Discover More
          </h2>
          <p className="text-base text-center sm:text-lg lg:text-left lg:text-xl">
            Learn about how you can eliminate common stylesheet errors in React.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 mt-8 sm:flex-row sm:mt-0">
          <Link
            to="/error"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 font-bold text-white transition-colors duration-300 bg-red-700 rounded-lg shadow-lg hover:bg-red-500 lg:px-8 lg:py-4"
          >
            Simulate Error
          </Link>
          <Link
            to="/fixed"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 font-bold text-white transition-colors duration-300 bg-green-700 rounded-lg shadow-lg hover:bg-green-500 lg:px-8 lg:py-4"
          >
            View Fixed Version
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
