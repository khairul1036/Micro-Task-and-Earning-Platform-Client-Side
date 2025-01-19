import useAuth from "../hooks/useAuth";
import { Link, NavLink } from "react-router-dom";
import FetchData from "../hooks/FetchData";
import { IoIosLogOut } from "react-icons/io";
import { FaCoins } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useAuth();
  let coins = 0;

  if (user !== null) {
    const { users, userRefetch } = FetchData();
    coins = users?.coins;
    userRefetch();
  }

  const links = (
    <>
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
          to={"/join-developer"}
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
      <li>
        {user?.email && (
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) =>
              `hover:text-teal-600 ${
                isActive
                  ? "text-teal-600 font-semibold"
                  : "text-gray-600 dark:text-gray-50"
              }`
            }
          >
            Dashboard
          </NavLink>
        )}
      </li>

      <li>
        {user?.email && (
          <button onClick={logOut} className="text-2xl text-gray-600">
            <IoIosLogOut />
          </button>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <Link className="hidden md:block text-2xl text-gray-900 dark:text-white font-bold">
          Task<span className="text-teal-600">Earn</span>
        </Link>

        <Link className="md:hidden text-2xl text-gray-900 dark:text-white font-bold">
          T<span className="text-teal-600">Earn</span>
        </Link>
      </div>
      {/* desktop  */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user?.email ? (
          <>
            <div className="flex items-center gap-5 px-5">
              <span className="flex items-center gap-1 text-deepTeal font-bold bg-gray-100 py-1 px-2 rounded-lg">
                <FaCoins /> {coins}
              </span>
              <img
                referrerPolicy="no-referrer"
                className="w-10 h-10 border-2 border-gray-300 rounded-full"
                alt="img"
                src={user?.photoURL}
              />
            </div>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-deepTeal bg-deepTeal transition-all ease-in-out duration-300 hover:bg-transparent hover:text-deepTeal">
                Login
              </button>
            </Link>
            <Link to={"/registration"}>
              <button className="px-4 py-2 text-sm rounded-full font-bold text-deepTeal border-2 border-deepTeal bg-transparent transition-all ease-in-out duration-300 hover:bg-deepTeal hover:text-white">
                SignUp
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
