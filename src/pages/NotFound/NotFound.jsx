import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-teal-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-teal-600">404</h1>
        <h2 className="text-3xl font-semibold text-teal-700 mt-4">
          Page Not Found
        </h2>
        <p className="text-teal-500 mt-2 pb-10">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75"
        >
          <button>Go Back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
