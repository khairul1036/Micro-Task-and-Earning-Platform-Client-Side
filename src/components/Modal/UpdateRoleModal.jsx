import React, { useState } from "react";

const UpdateRoleModal = ({ user, isOpen, closeModal, updateRole }) => {
  const [selectedRole, setSelectedRole] = useState(user?.role || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRole(user?.email, selectedRole); // Call the parent function to update the role
    closeModal(); // Close the modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-96">
        <h3 className="text-lg font-semibold mb-4">Update User Role</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Select Role
            </label>
            <select
              id="role"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500"
            >
              <option value="Admin">Admin</option>
              <option value="Buyer">Buyer</option>
              <option value="Worker">Worker</option>
            </select>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Update Role
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateRoleModal;
