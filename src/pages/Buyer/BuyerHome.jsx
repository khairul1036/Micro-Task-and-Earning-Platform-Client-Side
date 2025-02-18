import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import Loading from "../../components/Loading";

import { FaTasks, FaUsers, FaDollarSign } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const BuyerHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["data", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/buyer-home/${user?.email}`);
      return data;
    },
  });

  const handleApproved = async (id) => {
    try {
      await axiosSecure.patch(`/update-status/buyer/${id}`);
      refetch();
      toast.success("Submission approved!!");
    } catch (err) {
      toast.error(err?.message);
    }
  };
  const handleReject = async (id) => {
    try {
      await axiosSecure.patch(`/update-status/buyer/${id}?reject=true`);
      refetch();
      toast.success("Submission reject!!");
    } catch (err) {
      toast.error(err?.message);
    }
  };

  // Open modal with specific submission details
  const openModal = (submission) => {
    setSelectedSubmission(submission);
    setIsOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsOpen(false);
    setSelectedSubmission(null); // Clear selected submission when modal is closed
  };

  // Line Chart Data (Example: Monthly Earnings)
  const lineChartData = [
    { month: "Jan", earnings: 500 },
    { month: "Feb", earnings: 700 },
    { month: "Mar", earnings: 900 },
    { month: "Apr", earnings: 1100 },
    { month: "May", earnings: 1300 },
    { month: "Jun", earnings: 1500 },
  ];

  // Pie Chart Data (Task Distribution)
  const pieChartData = [
    { name: "Completed", value: 70 },
    { name: "Pending", value: 30 },
  ];
  const COLORS = ["#2ECC71", "#E74C3C"];

  if (isLoading) return <Loading />;

  return (
    <div className="p-6">
      <div className="max-w-screen-2xl mx-auto py-8 px-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Dashboard Overview
        </h2>

        {/* Stats Overview Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
            <FaTasks className="text-teal-500 text-3xl" />
            <div>
              <p className="text-gray-500">Total Tasks</p>
              <h3 className="text-2xl font-semibold">{data?.totalTasks}</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
            <FaUsers className="text-green-500 text-3xl" />
            <div>
              <p className="text-gray-500">Total Pending Tasks</p>
              <h3 className="text-2xl font-semibold">
                {data?.totalPendingTasks}
              </h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
            <FaDollarSign className="text-yellow-500 text-3xl" />
            <div>
              <p className="text-gray-500">Total Payment</p>
              <h3 className="text-2xl font-semibold">${data?.totalPayment}</h3>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Line Chart (Earnings Trend) */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Earnings Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineChartData}>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="earnings"
                  stroke="#3498DB"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart (Task Completion) */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Task Completion</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* <h2 className="text-lg font-medium text-gray-800 pb-5">Your States</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-white">
        <div className="bg-orange-500 shadow-md rounded-lg p-4">
          <h3>Total Tasks</h3>
          <h2 className="text-2xl font-bold">{data?.totalTasks}</h2>
        </div>
        <div className="bg-teal-600 shadow-md rounded-lg p-4">
          <h3>Total Pending Tasks</h3>
          <h2 className="text-2xl font-bold">{data?.totalPendingTasks}</h2>
        </div>
        <div className="bg-purple-500 shadow-md rounded-lg p-4">
          <h3>Total Payment</h3>
          <h2 className="text-2xl font-bold">{data?.totalPayment}</h2>
        </div>
      </div> */}

      {/* Show data in table format */}
      <section className="container px-4 mx-auto pt-12">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800">Task To Review</h2>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                        <div className="flex items-center gap-x-3">
                          <span>Title</span>
                        </div>
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                        <span>Worker Name</span>
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                        <span>Payable Amount</span>
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                        Status
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                        Submission
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                        Action
                      </th>
                    </tr>
                  </thead>
                  {data?.pendingSubmissions?.length === 0 ? (
                    <p className="text-center py-4">No Submission Pending</p>
                  ) : (
                    <tbody className="bg-white divide-y divide-gray-200 ">
                      {data?.pendingSubmissions?.map((pendingSubmission) => (
                        <tr key={pendingSubmission?._id}>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {pendingSubmission?.task_title}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {pendingSubmission?.worker_name}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            $ {pendingSubmission?.payable_amount}
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              <p
                                className={`px-3 py-1 text-yellow-500 bg-yellow-100/60 text-xs rounded-full`}
                              >
                                {pendingSubmission?.status}
                              </p>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            <button
                              onClick={() => openModal(pendingSubmission)}
                              className="text-gray-500 transition-colors duration-200 flex items-center hover:text-teal-600 focus:outline-none"
                            >
                              <IoEyeOutline className="text-2xl" />
                            </button>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            <div className="flex items-center gap-5">
                              <button
                                onClick={() =>
                                  handleApproved(pendingSubmission?._id)
                                }
                                className="text-gray-500 transition-colors duration-200 hover:text-green-500 focus:outline-none"
                              >
                                <FaCheck className="text-2xl" />
                              </button>
                              <button
                                onClick={() =>
                                  handleReject(pendingSubmission?._id)
                                }
                                className="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none"
                              >
                                <MdDoNotDisturbAlt className="text-2xl" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isOpen && selectedSubmission && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Submission Details</h2>
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-gray-800"
              >
                <span className="text-xl">&times;</span>
              </button>
            </div>
            <div className="mt-4">
              <p>{selectedSubmission?.submission_details}</p>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyerHome;
