import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import Footer from "../components/Footer";

const DashboardLayout = () => {
  return (
    <>
      <div className="">
        {/* Dashboard Navbar */}
        <Topbar />
      </div>
      <div className="relative min-h-screen flex flex-col md:flex-row bg-white">
        {/* Left Side: Sidebar Component */}
        <div className="md:w-64 w-full bg-gray-800 text-white">
          <Sidebar />
        </div>

        {/* Right Side: Dashboard Dynamic Content */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-auto p-5">
            {/* Outlet for dynamic contents */}
            <Outlet />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default DashboardLayout;
