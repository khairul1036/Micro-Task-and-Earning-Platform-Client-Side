import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ManageUsersTableRow from "../../components/Admin/ManageUsersTableRow";
import Loading from "../../components/Loading";
import UpdateRoleModal from "../../components/Modal/UpdateRoleModal";
import toast from "react-hot-toast";

const ManageUsers = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [selectedUser, setSelectedUser] = useState(null); // Store the user to update
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility

  const {
    data: users = [], // Default to an empty array if data is undefined
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/all-users/${user?.email}`);
      return data;
    },
  });

  // Handle loading state
  if (isLoading) {
    return <Loading />;
  }

  // Handle error state
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // Ensure users is an array before using .map
  if (!Array.isArray(users)) {
    return <div>No users data available</div>;
  }

  // Update role function
  const updateRole = async (email, role) => {
    try {
      await axiosSecure.patch(`/update-role/${email}`, { role });
      toast.success("Update role success!!");
      refetch(); // Refetch users after role update
    } catch (error) {
      console.error("Failed to update role", error);
    }
  };

  // Open modal to update user role
  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div>
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Image
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Name
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Email
                  </th>

                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Role
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Coins
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((userData) => (
                  <ManageUsersTableRow
                    key={userData?._id}
                    userData={userData}
                    openModal={openModal} // Pass function to open modal
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal for updating role */}
      <UpdateRoleModal
        user={selectedUser}
        isOpen={isModalOpen}
        closeModal={closeModal}
        updateRole={updateRole}
      />
    </div>
  );
};

export default ManageUsers;
