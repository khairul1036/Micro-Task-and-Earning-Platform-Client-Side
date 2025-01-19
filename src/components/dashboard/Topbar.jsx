import { FaBars, FaCoins, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import FetchData from "../../hooks/FetchData";
import Notification from "./Notification";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Topbar = () => {

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

  // Function to toggle sidebar visibility on mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full py-1 bg-deepTeal text-white">
      <div className="md:mx-16 flex justify-end items-center p-4">
              {/* Mobile Hamburger Menu Button */}
      <div className="">
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>
               {/* Right Side: Coins, Image, and Name */}
        <div className="flex items-center space-x-4">
          {/* Coin Icon and Text */}
          <div className="flex items-center space-x-1">
            <FaCoins className="h-5 w-5" />
            <span>{users?.coins} Coins</span>
          </div>

          {/* User Image and Name */}
          <div className="flex items-center space-x-2">
            <img
              src={user?.photoURL}
              referrerPolicy="no-referrer"
              alt="User"
              className="h-8 w-8 rounded-full"
            />
            <div className="flex flex-col">
              <span>{user?.displayName}</span>
              <span className="text-xs">{users?.role}</span>
            </div>
          </div>
          <div>
            <Notification notifications={notifications} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
