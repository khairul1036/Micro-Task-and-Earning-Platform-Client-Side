import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import MySubmissionTableRow from "../../components/Worker/MySubmissionTableRow";
import { useState } from "react";
import Loading from "../../components/Loading";

const MySubmission = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  const { data = {}, isLoading } = useQuery({
    queryKey: ["task", user?.email, currentPage],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/my-submission/user/${user?.email}?page=${currentPage}&limit=${limit}`
      );
      return data;
    },
  });

  const totalPages = Math.ceil(data?.total / limit) || 1;

  if (isLoading) return <Loading />;

  return (
    <section className="container px-4 mx-auto pt-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800">My Submissions</h2>
        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
          {data?.mySubmissions?.length || 0} Submissions
        </span>
      </div>
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                      Title
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                      SubmitAt
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                      Payable Amount
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                      Buyer Name
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                      Submission Details
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                      Status
                    </th>
                  </tr>
                </thead>

                {data?.mySubmissions?.length === 0 ? (
                  <p className="text-center py-5">No Submission</p>
                ) : (
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data?.mySubmissions?.map((mySubmission, index) => (
                      <MySubmissionTableRow
                        key={index}
                        mySubmission={mySubmission}
                      />
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <div className="btn-group flex items-center gap-2">
          <button
            className="btn"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            «
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`btn ${currentPage === index + 1 ? "btn-active" : ""}`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="btn"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </div>
      </div>
    </section>
  );
};

export default MySubmission;
