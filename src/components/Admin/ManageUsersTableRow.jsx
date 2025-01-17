import React from "react";

const ManageUsersTableRow = ({ userData, openModal }) => {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <img
          referrerPolicy="no-referrer"
          src={userData.image}
          alt="image"
          className="h-10 w-10 rounded-full"
        />
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {userData.name}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {userData.email}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {userData.role}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {userData.coins}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => openModal(userData)}
          className="text-teal-500 hover:text-teal-700 font-semibold"
        >
          Update Role
        </button>
      </td>
    </tr>
  );
};

export default ManageUsersTableRow;
