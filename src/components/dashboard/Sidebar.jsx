import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaCoins,
  FaHistory,
  FaHome,
  FaMoneyBillWave,
  FaPlusCircle,
  FaSignOutAlt,
  FaTasks,
  FaTimes,
  FaUserCog,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";

const Sidebar = ({ handleSidebar, isSidebarOpen }) => {
  const { logOut } = useAuth();
  const location = useLocation(); // Get current location
  const navigate = useNavigate();
  const [role, isLoading] = useRole();

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logOut();
    navigate("/login");
  };

  return (
    <div>
      <div className="flex md:h-screen">
        {/* Sidebar */}
        <div
          className={`md:flex md:w-64 w-full bg-gray-800 text-white h-full fixed md:relative top-0 left-0 z-10 ${
            isSidebarOpen ? "block" : "hidden"
          } md:block`}
        >
          {/* Sidebar Content */}
          <div className="flex flex-col h-full">
            {/* sidebar toggle  */}
            <div className="flex justify-end pt-5">
              <button
                onClick={handleSidebar}
                className="text-3xl text-white md:hidden px-5"
              >
                <IoMdClose />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="space-y-2 px-5 py-3 pt-8">
              <Link
                to="/dashboard"
                className={`py-2 px-4 rounded flex items-center ${
                  isActive("/dashboard") ? "bg-gray-700" : "hover:bg-gray-600"
                }`}
              >
                <FaHome className="mr-3" />
                Home
              </Link>
              {/* worker */}
              {role === "Worker" && (
                <>
                  {/* task router  */}
                  <Link
                    to="/tasklist"
                    className={`py-2 px-4 rounded flex items-center ${
                      isActive("/tasklist")
                        ? "bg-gray-700"
                        : "hover:bg-gray-600"
                    }`}
                  >
                    <FaTasks className="mr-3" />
                    Tasklist
                  </Link>
                  <Link
                    to="/dashboard/my-submissions"
                    className={`py-2 px-4 rounded flex items-center ${
                      isActive("/dashboard/my-submissions")
                        ? "bg-gray-700"
                        : "hover:bg-gray-600"
                    }`}
                  >
                    <FaTasks className="mr-3" />
                    My Submissions
                  </Link>
                  <Link
                    to="/dashboard/withdrawals"
                    className={`py-2 px-4 rounded flex items-center ${
                      isActive("/dashboard/withdrawals")
                        ? "bg-gray-700"
                        : "hover:bg-gray-600"
                    }`}
                  >
                    <FaMoneyBillWave className="mr-3" />
                    Withdrawals
                  </Link>
                </>
              )}

              {/* buyer */}
              {role === "Buyer" && (
                <>
                  <Link
                    to="/dashboard/add-new-task"
                    className={`py-2 px-4 rounded flex items-center ${
                      isActive("/dashboard/add-new-task")
                        ? "bg-gray-700"
                        : "hover:bg-gray-600"
                    }`}
                  >
                    <FaPlusCircle className="mr-3" />
                    Add New Tasks
                  </Link>
                  <Link
                    to="/dashboard/my-task"
                    className={`py-2 px-4 rounded flex items-center ${
                      isActive("/dashboard/my-task")
                        ? "bg-gray-700"
                        : "hover:bg-gray-600"
                    }`}
                  >
                    <FaTasks className="mr-3" />
                    My Tasks
                  </Link>
                  <Link
                    to="/dashboard/purchase-coin"
                    className={`py-2 px-4 rounded flex items-center ${
                      isActive("/dashboard/purchase-coin")
                        ? "bg-gray-700"
                        : "hover:bg-gray-600"
                    }`}
                  >
                    <FaCoins className="mr-3" />
                    Purchase Coin
                  </Link>
                  <Link
                    to="/dashboard/payment-history"
                    className={`py-2 px-4 rounded flex items-center ${
                      isActive("/dashboard/payment-history")
                        ? "bg-gray-700"
                        : "hover:bg-gray-600"
                    }`}
                  >
                    <FaHistory className="mr-3" />
                    Payment History
                  </Link>
                </>
              )}

              {/* admin */}
              {role === "Admin" && (
                <>
                  <Link
                    to="/dashboard/manage-users"
                    className={`py-2 px-4 rounded flex items-center ${
                      isActive("/dashboard/manage-users")
                        ? "bg-gray-700"
                        : "hover:bg-gray-600"
                    }`}
                  >
                    <FaUserCog className="mr-3" />
                    Manage Users
                  </Link>
                  <Link
                    to="/dashboard/manage-task"
                    className={`py-2 px-4 rounded flex items-center ${
                      isActive("/dashboard/manage-task")
                        ? "bg-gray-700"
                        : "hover:bg-gray-600"
                    }`}
                  >
                    <FaTasks className="mr-3" />
                    Manage Task
                  </Link>
                </>
              )}

              {/* profile page route  */}
            <Link
              to="/dashboard/my-profile"
              className={`py-2 px-4 rounded flex items-center ${
                isActive("/tasklist") ? "bg-gray-700" : "hover:bg-gray-600"
              }`}
            >
              <CgProfile className="mr-3" />
              Profile
            </Link>
            </div>


            {/* Optional Logout Section */}
            <div className="px-5 py-3 space-y-5">
              <Link
                to={"/"}
                className="w-full py-2 bg-teal-600 rounded text-white hover:bg-teal-700 flex items-center justify-center"
              >
                <IoIosArrowBack className="text-2xl" />
                Back Home
              </Link>

              <button
                onClick={handleLogout}
                className="w-full py-2 bg-red-600 rounded text-white hover:bg-red-700 flex items-center justify-center"
              >
                <FaSignOutAlt className="mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
