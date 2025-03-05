import React, { useState, useContext } from "react";
import { FaThumbsUp, FaThumbsDown, FaUser, FaSearch, FaFilter, FaLock } from "react-icons/fa";
import { HelpDeskContext } from "../context/HelpDeskContext";
import { Link, useNavigate } from "react-router-dom";

const Problems = () => {
  const { problem } = useContext(HelpDeskContext);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleLogin = () => {
    try {
      navigate("/login"); // Redirect to the login page
    } catch (err) {
      setError(true); // Set error state if navigation fails
    }
  };

  return (
    <div>
      <div className="bg-gray-200 px-2 py-10">
        <div id="features" className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Problems
          </h2>
          {problem.length > 0 ? (
            <ul className="mt-16 flex flex-wrap justify-between gap-6 text-center text-slate-700">
              {problem.map((problems) => (
                <li
                  key={problems.id}
                  className="rounded-xl bg-white px-6 py-8 shadow-sm w-[30%] mb-6 border border-gray-300"
                >
                  <img
                    src="https://www.svgrepo.com/show/530438/ddos-protection.svg"
                    alt=""
                    className="mx-auto h-10 w-10"
                  />
                  <Link to={`/singleproblem/${problems.id}`}>
                    <h3 className="my-3 font-display font-medium text-lg border-b pb-2 border-gray-400">
                      Problem:
                    </h3>
                  </Link>
                  <p className="mb-4 text-gray-700 font-medium font-display">
                    {problems.description}
                  </p>

                  {/* Display problem tags */}
                  {problems.tag && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                        {problems.tag.name}
                      </span>
                    </div>
                  )}

                  {/* Display solutions */}
                  <h4 className="mt-4 font-semibold text-md border-t pt-2 border-gray-400">
                    Solutions:
                  </h4>
                  {problems.solutions.length > 0 ? (
                    <ul className="mt-1.5 text-sm leading-6 text-secondary-500">
                      {problems.solutions.map((sol) => (
                        <li
                          key={sol.id}
                          className="border-t border-gray-300 pt-2 mt-2"
                        >
                          {sol.description}
                          {sol.tag && (
                            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full ml-2">
                              {sol.tag.name}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                      No solutions yet
                    </p>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
              <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <FaLock className="text-gray-700 dark:text-gray-300 text-4xl" aria-hidden="true" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Login Required
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Please log in to access any of the problems.
                  </p>
                </div>

                <div className="mt-8">
                  <button
                    onClick={handleLogin}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-200 ease-in-out active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Go to login page"
                  >
                    Go to Login
                  </button>
                </div>

                {error && (
                  <div className="text-red-500 text-sm text-center">
                    Navigation failed. Please try again.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Problems;