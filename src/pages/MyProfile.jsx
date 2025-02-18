import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const MyProfile = () => {
  const { user, loading, logOut } = useAuth();

//   const user = {
//     name: "John Doe",
//     email: "johndoe@example.com",
//     phone: "+1 234 567 890",
//     address: "1234 Main St, New York, USA",
//     image: "https://via.placeholder.com/150", // Replace with real profile image
//   };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      {/* Profile Image Section */}
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-teal-500 shadow-md"
          />
          {/* <button className="absolute bottom-2 right-2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300">
            <FaEdit className="text-gray-700" />
          </button> */}
        </div>

        <h2 className="text-2xl font-semibold mt-4">{user?.displayName}</h2>
        <p className="text-gray-500">Member since: Jan 2025</p>
      </div>

      {/* Profile Information */}
      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-md">
          <FaEnvelope className="text-teal-500" />
          <p className="text-gray-700">{user?.email}</p>
        </div>
        <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-md">
          <FaPhone className="text-teal-500" />
          <p className="text-gray-700">N/A</p>
        </div>
        <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-md">
          <FaMapMarkerAlt className="text-teal-500" />
          <p className="text-gray-700">N/A</p>
        </div>
      </div>

      {/* Edit Profile Button */}
      {/* <div className="mt-6 text-center">
        <button className="px-6 py-2 bg-teal-500 text-white rounded-full font-semibold shadow-md hover:bg-teal-600 transition-all">
          Edit Profile
        </button>
      </div> */}
    </div>
  );
};

export default MyProfile;
