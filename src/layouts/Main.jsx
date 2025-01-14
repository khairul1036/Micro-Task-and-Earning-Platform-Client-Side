import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-2xl mx-auto">
        {/* Navbar */}
        <Navbar />
      </div>
      {/* Outlet */}
      <div>
        <div className="max-w-screen-2xl mx-auto min-h-[calc(100vh-306px)] ">
          <Outlet />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;
