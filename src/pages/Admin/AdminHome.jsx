import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const { data, refetch } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/admin-home`);
      return data;
    },
  });

  const handlePayment = async (id) => {
    try {
      await axiosSecure.patch(`/approve-withdrawal/${id}`);
      refetch();
      toast.success("Withdraw payment success!!");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="p-6">
      <h2 className="text-lg font-medium text-gray-800 pb-5">Your States</h2>
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
      </div>

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
                          {pendingWithdrawal?.withdrawal_amount}
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
                            disabled={pendingWithdrawal?.status === "Approved"}
                            onClick={() =>
                              handlePayment(pendingWithdrawal?._id)
                            }
                            className="btn px-4 py-1 bg-teal-600 hover:bg-teal-700 text-white"
                          >
                            pay
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
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
