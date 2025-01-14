import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link, NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [theme, setTheme] = useState(localStorage.theme || "light");

  // Handle theme change
  const handleToggleMode = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Apply the selected theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-3 border-b dark:border-gray-600">
      <div>
        <Link className="text-2xl text-gray-900 dark:text-white font-bold">
          Task<span className="text-teal-600">Earn</span>
        </Link>
      </div>
      <div>
        <ul className="flex items-center menu menu-horizontal px-1 text-[16px]">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `hover:text-teal-600 ${
                  isActive
                    ? "text-teal-600 font-semibold"
                    : "text-gray-600 dark:text-gray-50"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"https://github.com/khairul1036"}
              className={({ isActive }) =>
                `hover:text-teal-600 ${
                  isActive
                    ? "text-teal-600 font-semibold"
                    : "text-gray-600 dark:text-gray-50"
                }`
              }
            >
              Join as Developer
            </NavLink>
          </li>
          {user?.email && (
            <>
              <li>
                <details>
                  <summary className="text-gray-600 dark:text-gray-50">
                    Dashboard
                  </summary>
                  <ul className="bg-gray-100 dark:bg-gray-800 rounded-t-none p-2 w-40 relative right-1 z-10 top-5">
                    <li>
                      <NavLink
                        to={"/add-task"}
                        className={({ isActive }) =>
                          `hover:text-teal-600 ${
                            isActive
                              ? "text-teal-600 font-semibold"
                              : "text-gray-600 dark:text-gray-50"
                          }`
                        }
                      >
                        Add Task
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/manage-task"}
                        className={({ isActive }) =>
                          `hover:text-teal-600 ${
                            isActive
                              ? "text-teal-600 font-semibold"
                              : "text-gray-600 dark:text-gray-50"
                          }`
                        }
                      >
                        Manage task
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/my-task"}
                        className={({ isActive }) =>
                          `hover:text-teal-600 ${
                            isActive
                              ? "text-teal-600 font-semibold"
                              : "text-gray-600 dark:text-gray-50"
                          }`
                        }
                      >
                        My Task
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/service-to-do"}
                        className={({ isActive }) =>
                          `hover:text-teal-600 ${
                            isActive
                              ? "text-teal-600 font-semibold"
                              : "text-gray-600 dark:text-gray-50"
                          }`
                        }
                      >
                        coming soon
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>
              <li className="text-deepTeal font-bold bg-gray-100 py-1 px-2 rounded-lg">Coin</li>
            </>
          )}
        </ul>
      </div>
      <div className="flex items-center gap-5">
        {/* Light/Dark Mode Button */}
        <div>
          <label className="grid cursor-pointer place-items-center">
            <input
              onChange={handleToggleMode}
              type="checkbox"
              checked={theme === "dark"}
              className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
            />
            <svg
              className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
        {user?.email ? (
          <div className="flex gap-5">
            <button
              onClick={logOut}
              className="relative group text-3xl text-gray-600 dark:text-gray-100"
            >
              <IoIosLogOut />

              {/* Logout text - hidden by default, shown on hover */}
              <span className="absolute text-xs left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Logout
              </span>
            </button>
            <img
              referrerPolicy="no-referrer"
              className="w-12 h-12 border-2 border-gray-300 rounded-full"
              alt="img"
              src={user?.photoURL}
            />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link to={"/login"}>
              <button className="btn bg-deepTeal text-white border-none hover:bg-teal-700">
                Login
              </button>
            </Link>
            <Link to={"/registration"}>
              <button className="btn bg-deepTeal text-white border-none hover:bg-teal-700">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
