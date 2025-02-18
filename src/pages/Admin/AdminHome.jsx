import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading";

import { FaTasks, FaUsers, FaDollarSign, FaCoins } from "react-icons/fa";
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

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/admin-home`);
      return data;
    },
  });

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

  if (isLoading) return <Loading />;

  const handlePayment = async (id) => {
    try {
      await axiosSecure.patch(`/approve-withdrawal/${id}`);
      refetch();
      toast.success("Withdraw payment success!!");
    } catch (err) {
      toast.error("Withdraw payment unsuccess!!");
    }
  };
  return (
    <div className="p-6">
      <div className="max-w-screen-2xl mx-auto py-8 px-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Dashboard Overview
        </h2>

        {/* Stats Overview Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
            <FaUsers className="text-green-500 text-3xl" />
            <div>
              <p className="text-gray-500">Total Workers</p>
              <h3 className="text-2xl font-semibold">{data?.totalWorkers}</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
            <FaUsers className="text-green-500 text-3xl" />
            <div>
              <p className="text-gray-500">Total Buyers</p>
              <h3 className="text-2xl font-semibold">{data?.totalBuyers}</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
            <FaCoins className="text-teal-500 text-3xl" />
            <div>
              <p className="text-gray-500">Total Available Coins</p>
              <h3 className="text-2xl font-semibold">
                {data?.totalUsersCoins}
              </h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
            <FaDollarSign className="text-yellow-500 text-3xl" />
            <div>
              <p className="text-gray-500">Total Payments</p>
              <h3 className="text-2xl font-semibold">${data?.totalPayments}</h3>
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
          <h3>Total Worker</h3>
          <h2 className="text-2xl font-bold">{data?.totalWorkers}</h2>
        </div>
        <div className="bg-teal-600 shadow-md rounded-lg p-4">
          <h3>Total Buyer</h3>
          <h2 className="text-2xl font-bold">{data?.totalBuyers}</h2>
        </div>
        <div className="bg-purple-500 shadow-md rounded-lg p-4">
          <h3>Total Available Coin</h3>
          <h2 className="text-2xl font-bold">{data?.totalUsersCoins}</h2>
        </div>
        <div className="bg-rose-500 shadow-md rounded-lg p-4">
          <h3>Total Payments</h3>
          <h2 className="text-2xl font-bold">$ {data?.totalPayments}</h2>
        </div>
      </div> */}

      {/* Show data in table format */}
      <section className="container px-4 mx-auto pt-12">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800">
            Withdraw request
          </h2>
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
                          <span>Worker Name</span>
                        </div>
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                        <span>Account Number</span>
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                        Payment Method
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                        <span>Withdraw Coins</span>
                      </th>

                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                        <span>Payable Amount</span>
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                        <span>Status</span>
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                        Action
                      </th>
                    </tr>
                  </thead>
                  {data?.pendingWithdrawals?.length === 0 ? (
                    <p className="text-center py-4">No withdrawal request</p>
                  ) : (
                    <tbody className="bg-white divide-y divide-gray-200 ">
                      {data?.pendingWithdrawals?.map((pendingWithdrawal) => (
                        <tr key={pendingWithdrawal?._id}>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {pendingWithdrawal?.worker_name}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {pendingWithdrawal?.account_number}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {pendingWithdrawal?.payment_system}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {pendingWithdrawal?.withdrawal_coin}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            $ {pendingWithdrawal?.withdrawal_amount}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              <p
                                className={`px-3 py-1 ${
                                  pendingWithdrawal?.status === "Pending" &&
                                  "text-yellow-500 bg-yellow-100/60"
                                } ${
                                  pendingWithdrawal?.status === "Approved" &&
                                  "text-green-500 bg-green-100/60"
                                } text-xs rounded-full`}
                              >
                                {pendingWithdrawal?.status}
                              </p>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <button
                              disabled={
                                pendingWithdrawal?.status === "Approved"
                              }
                              onClick={() =>
                                handlePayment(pendingWithdrawal?._id)
                              }
                              className="btn px-4 py-1 bg-teal-600 hover:bg-teal-700 text-white"
                            >
                              {pendingWithdrawal?.status === "Approved"
                                ? "paid"
                                : "pay"}
                            </button>
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
    </div>
  );
};

export default AdminHome;
