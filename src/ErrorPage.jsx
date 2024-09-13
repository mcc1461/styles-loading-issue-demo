import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-white bg-gray-900">
      <h1 className="mx-8 mb-6 text-5xl font-bold text-center text-red-500">
        Stylesheet Load Error in React
      </h1>
      <p className="mx-8 mb-6 text-2xl leading-relaxed text-center text-gray-300">
        In React projects, stylesheets might fail to load when using{" "}
        <code>@import</code> in your CSS files.
      </p>
      <blockquote className="p-4 mx-8 mb-6 bg-red-700 border-l-8 border-yellow-500 rounded-lg shadow-lg">
        <p className="text-2xl font-semibold text-white">
          Error: This page failed to load a stylesheet from a URL.
        </p>
      </blockquote>

      <h2 className="mx-8 mt-10 mb-6 text-3xl font-semibold text-center text-gray-200">
        Why It Happens
      </h2>
      <blockquote className="p-4 mx-8 mb-6 bg-gray-800 border-l-8 border-yellow-500 rounded-lg">
        <p className="text-xl text-gray-300">
          Common causes include delayed loading, CORS restrictions, and caching
          issues when using <code>@import</code>.
        </p>
      </blockquote>

      <p className="mx-8 mb-6 text-2xl leading-relaxed text-center text-gray-300">
        The following is a typical <code>@import</code> usage in{" "}
        <code>index.css</code> that can lead to such errors:
      </p>
      <pre className="p-6 mx-8 overflow-x-auto text-lg text-yellow-200 whitespace-pre-wrap bg-gray-900 border-4 border-yellow-500 rounded-lg shadow-lg">
        {`@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap");`}
      </pre>

      <h2 className="mx-8 mt-10 mb-6 text-3xl font-semibold text-center text-gray-200">
        Demonstration Video
      </h2>
      <p className="mx-8 mb-6 text-xl leading-relaxed text-center text-gray-300">
        Watch this video to see the error in action and understand why it
        occurs:
      </p>
      <video
        className="w-full max-w-2xl mx-8 mt-4 rounded-lg shadow-lg"
        controls
        src="/path/to/sample-video.mp4" // Replace with your video path
        alt="Demonstration of the error"
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

export default ErrorPage;
