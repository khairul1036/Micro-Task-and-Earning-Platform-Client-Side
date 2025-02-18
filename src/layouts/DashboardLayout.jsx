import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import HelmetTitle from "../pages/langdingPages/Share/HelmetTitle";
import {
  FaBars,
  FaCoins,
  FaFacebook,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import Footer from "../components/Footer";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import FetchData from "../hooks/FetchData";
import { useQuery } from "@tanstack/react-query";
import Notification from "../components/dashboard/Notification";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const { user } = useAuth();
  const { users, userRefetch } = FetchData();
  userRefetch();

  const axiosSecure = useAxiosSecure();

  const { data: notifications = [], refetch } = useQuery({
    queryKey: ["notification", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/notification/${user?.email}`);
      return data;
    },
  });
  refetch(); // refetch the notifications

  return (
    <>
      <HelmetTitle favTitle={"Dashboard || TaskEarn"} />

      {/* Dashboard Navbar */}
      <div className="navbar bg-deepTeal md:px-5 lg:px-20 sticky top-0 z-50">
        <div className="navbar-start">
          <div className="md:hidden">
            <button onClick={handleSidebar} className="text-2xl text-white">
              {isSidebarOpen ? <IoMdClose /> : <FaBars />}
            </button>
          </div>
          <Link
            to={"/"}
            className="hidden md:block text-2xl text-white font-bold"
          >
            TaskEarn
          </Link>
        </div>
        <div className="navbar-end space-x-2 md:space-x-5">
          <div className="flex items-center md:text-xl gap-1 bg-gray-100 text-deepTeal px-2 py-1 rounded-full">
            <FaCoins />
            <p className="font-bold">{users?.coins}</p>
          </div>
          <div className="text-white text-end">
            <h2>{user?.displayName?.split(" ")[0]}</h2>
            <span className="text-xs">{users?.role}</span>
          </div>
          <img
            src={user?.photoURL}
            referrerPolicy="no-referrer"
            alt="User"
            className="h-10 w-10 rounded-full border-2"
          />
          <div>
            <Notification notifications={notifications} />
          </div>
        </div>
      </div>

      {/* ------------- */}
      <div className="relative h-screen bg-gray-100">
        <div>
          <div className="flex items-start">
            <div className=" md:min-w-[250px] w-max max-lg:min-w-0">
              <nav id="sidebar" className="fixed z-50">
                <Sidebar
                  handleSidebar={handleSidebar}
                  isSidebarOpen={isSidebarOpen}
                />
              </nav>
            </div>

            <div className="main-content w-full h-full overflow-auto">
              <div className="overflow-x-auto min-h-[calc(100vh-306px)] md:px-10">
                <Outlet />
              </div>

              {/* <Footer /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
