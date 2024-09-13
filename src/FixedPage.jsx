import React from "react";
import { Link } from "react-router-dom";

const FixedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-white bg-gray-900">
      <h1 className="mb-6 text-5xl font-bold text-center text-green-500">
        Solution to Stylesheet Load Error
      </h1>

      <p className="mx-8 mb-6 text-2xl leading-relaxed text-center text-gray-300">
        The solution is to move the <code>@import</code> from{" "}
        <code>index.css</code> to a direct <code>&lt;link&gt;</code> tag in{" "}
        <code>index.html</code>.
      </p>

      <blockquote className="p-4 mx-8 mb-6 bg-green-700 border-l-8 border-blue-500 rounded-lg shadow-lg">
        <p className="text-2xl font-semibold text-white">
          Place the <code>&lt;link&gt;</code> directly in{" "}
          <code>public/index.html</code> to ensure stylesheets load correctly
          before rendering.
        </p>
      </blockquote>

      <h2 className="mt-10 mb-6 text-3xl font-semibold text-center text-gray-200">
        Example Implementation:
      </h2>

      <pre className="p-6 mx-8 overflow-x-auto text-lg text-green-200 whitespace-pre-wrap bg-gray-900 border-4 border-green-700 rounded-lg shadow-lg">
        {`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap" />`}
      </pre>

      <h2 className="mt-10 mb-6 text-3xl font-semibold text-center text-gray-200">
        Watch the Solution in Action
      </h2>

      <p className="mx-8 mb-6 text-xl leading-relaxed text-center text-gray-300">
        Below is a demonstration video showing how to fix the stylesheet loading
        error:
      </p>

      <video
        className="w-full max-w-2xl mx-8 mt-4 rounded-lg shadow-lg"
        controls
        src="/path/to/solution-video.mp4" // Replace with the path to your solution video
        alt="Demonstration of the solution"
      >
        Your browser does not support the video tag.
      </video>

      <Link
        to="/"
        className="px-6 py-3 mt-8 font-bold text-white bg-blue-800 rounded-lg hover:bg-blue-600"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default FixedPage;
