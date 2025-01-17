import useAuth from "../hooks/useAuth";
import { Link, NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import FetchData from "../hooks/FetchData";

const Navbar = () => {
  const { user, logOut } = useAuth();
  let coins = 0;

  if (user !== null) {
    const { users, userRefetch } = FetchData();
    coins = users?.coins;
    userRefetch();
  }

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
              </li>
              <li className="text-deepTeal font-bold bg-gray-100 py-1 px-2 rounded-lg">
                {coins} Coins
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="flex items-center gap-5">
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
