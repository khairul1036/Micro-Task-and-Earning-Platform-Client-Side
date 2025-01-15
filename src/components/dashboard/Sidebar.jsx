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
import useAuth from "../../hooks/useAuth";

const Sidebar = () => {
  const { logOut } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation(); // Get current location
  const navigate = useNavigate();

  // Function to toggle sidebar visibility on mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logOut();
    navigate("/login");
  };

  return (
    <div className="flex md:h-screen">
      {/* Mobile Hamburger Menu Button */}
      <div className="md:hidden flex items-center p-4 bg-gray-800 text-white">
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`md:flex md:w-64 w-full bg-gray-800 text-white h-full fixed md:relative top-0 left-0 z-10 ${
          isSidebarOpen ? "block" : "hidden"
        } md:block`}
      >
        {/* Sidebar Content */}
        <div className="flex flex-col h-full">
          {/* Navigation Links */}
          <div className="space-y-2 px-5 py-3">
            {/* worker */}
            <Link
              to="/dashboard"
              className={`block py-2 px-4 rounded flex items-center ${
                isActive("/dashboard") ? "bg-gray-700" : "hover:bg-gray-600"
              }`}
            >
              <FaHome className="mr-3" />
              Home
            </Link>
            <Link
              to="/dashboard/tasklist"
              className={`block py-2 px-4 rounded flex items-center ${
                isActive("/dashboard/tasklist") ? "bg-gray-700" : "hover:bg-gray-600"
              }`}
            >
              <FaTasks className="mr-3" />
              Tasklist
            </Link>
            <Link
              to="/my-submissions"
              className={`block py-2 px-4 rounded flex items-center ${
                isActive("/my-submissions")
                  ? "bg-gray-700"
                  : "hover:bg-gray-600"
              }`}
            >
              <FaTasks className="mr-3" />
              My Submissions
            </Link>
            <Link
              to="/withdrawals"
              className={`block py-2 px-4 rounded flex items-center ${
                isActive("/withdrawals") ? "bg-gray-700" : "hover:bg-gray-600"
              }`}
            >
              <FaMoneyBillWave className="mr-3" />
              Withdrawals
            </Link>

            <p className="divider">buyer</p>
            {/* buyer */}
            <Link
              to="/dashboard/add-new-task"
              className={`block py-2 px-4 rounded flex items-center ${
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
              className={`block py-2 px-4 rounded flex items-center ${
                isActive("/dashboard/my-task") ? "bg-gray-700" : "hover:bg-gray-600"
              }`}
            >
              <FaPlusCircle className="mr-3" />
              My Tasks
            </Link>
            <Link
              to="/dashboard/purchase-coin"
              className={`block py-2 px-4 rounded flex items-center ${
                isActive("/dashboard/purchase-coin") ? "bg-gray-700" : "hover:bg-gray-600"
              }`}
            >
              <FaCoins className="mr-3" />
              Purchase Coin
            </Link>
            <Link
              to="/dashboard/payment-history"
              className={`block py-2 px-4 rounded flex items-center ${
                isActive("/dashboard/payment-history")
                  ? "bg-gray-700"
                  : "hover:bg-gray-600"
              }`}
            >
              <FaHistory className="mr-3" />
              Payment History
            </Link>

            <p className="divider">admin</p>
            {/* admin */}
            <Link
              to="/manage-users"
              className={`block py-2 px-4 rounded flex items-center ${
                isActive("/manage-users") ? "bg-gray-700" : "hover:bg-gray-600"
              }`}
            >
              <FaUserCog className="mr-3" />
              Manage Users
            </Link>
            <Link
              to="/manage-task"
              className={`block py-2 px-4 rounded flex items-center ${
                isActive("/manage-task") ? "bg-gray-700" : "hover:bg-gray-600"
              }`}
            >
              <FaUserCog className="mr-3" />
              Manage Task
            </Link>
          </div>

          {/* Optional Logout Section */}
          <div className="px-5 py-3">
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
  );
};

export default Sidebar;
