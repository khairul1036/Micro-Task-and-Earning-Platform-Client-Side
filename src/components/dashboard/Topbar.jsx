import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import FetchData from "../../hooks/FetchData";
import Notification from "./Notification";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

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

  return (
    <div className="w-full py-1 bg-deepTeal text-white">
      <div className="md:mx-16 flex justify-between items-center p-4">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <Link to={"/"} className="text-2xl text-white font-bold">
            TaskEarn
          </Link>
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
