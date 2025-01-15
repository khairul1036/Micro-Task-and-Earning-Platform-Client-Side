import React from "react";

const BuyerHome = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-orange-500 shadow-md rounded-lg p-4">
          <h3 className="text-gray-500">Total Sales</h3>
          <h2 className="text-2xl font-bold">$1k</h2>
        </div>
        <div className="bg-teal-600 shadow-md rounded-lg p-4">
          <h3 className="text-gray-500">Total Orders</h3>
          <h2 className="text-2xl font-bold">300</h2>
        </div>
        <div className="bg-rose-600 shadow-md rounded-lg p-4">
          <h3 className="text-gray-500">Products Sold</h3>
          <h2 className="text-2xl font-bold">5</h2>
        </div>
        <div className="bg-purple-500 shadow-md rounded-lg p-4">
          <h3 className="text-gray-500">New Customers</h3>
          <h2 className="text-2xl font-bold">8</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded-lg p-6">Visitor Insights Chart</div>
        <div className="bg-white shadow-md rounded-lg p-6">Customer Satisfaction Chart</div>
      </div>
    </div>
  );
};

export default BuyerHome;
