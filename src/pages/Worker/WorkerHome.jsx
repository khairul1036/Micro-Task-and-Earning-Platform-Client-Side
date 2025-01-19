import React from "react";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading";

const WorkerHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data, isLoading } = useQuery({
    queryKey: ["data", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/worker-home/${user?.email}`);
      return data;
    },
  });

  if (isLoading) return <Loading />;

  return (
    <div className="p-6">
      <h2 className="text-lg font-medium text-gray-800 pb-5">Your States</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-white">
        <div className="bg-orange-500 shadow-md rounded-lg p-4">
          <h3 className="">Total Submission</h3>
          <h2 className="text-2xl font-bold">{data?.totalSubmissions}</h2>
        </div>
        <div className="bg-teal-600 shadow-md rounded-lg p-4">
          <h3 className="">Total pending submission</h3>
          <h2 className="text-2xl font-bold">
            {data?.totalPendingSubmissions}
          </h2>
        </div>
        <div className="bg-purple-500 shadow-md rounded-lg p-4">
          <h3 className="">Total Earning</h3>
          <h2 className="text-2xl font-bold">{data?.totalEarnings}</h2>
        </div>
      </div>
      {/* show data in table format */}
      <section className="container px-4 mx-auto pt-12">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 ">
            My Approved Submission
          </h2>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Title</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <span>Buyer Name</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <span>Payable Amount</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  {data?.approvedSubmissions?.length === 0 ? (
                    <p
                      className="text-xl py-5 text-center text-gray-600
                    "
                    >
                      No Data
                    </p>
                  ) : (
                    <tbody className="bg-white divide-y divide-gray-200">
                      {data?.approvedSubmissions?.map(
                        (approvedSubmission, index) => (
                          <tr key={index}>
                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              {approvedSubmission?.task_title}
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              {approvedSubmission?.buyer_name}
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                              {approvedSubmission?.payable_amount}
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <div className="flex items-center gap-x-2">
                                <p
                                  className={`px-3 py-1 text-green-500 bg-green-100/60 text-xs rounded-full`}
                                >
                                  {approvedSubmission?.status}
                                </p>
                              </div>
                            </td>
                          </tr>
                        )
                      )}
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

export default WorkerHome;
