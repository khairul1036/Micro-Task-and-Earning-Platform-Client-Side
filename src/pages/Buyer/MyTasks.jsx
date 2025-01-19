import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import MyTasksTableRow from "../../components/Buyer/MyTasksTableRow";
import FetchData from "../../hooks/FetchData";
import Loading from "../../components/Loading";

const MyTasks = () => {
  const { user } = useAuth();
  const { userRefetch } = FetchData();
  const axiosSecure = useAxiosSecure();
  const {
    data: tasks = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/tasks/user/${user?.email}`);
      return data;
    },
  });

  const handleDelete = async (id, required_workers, payable_amount) => {
    const calculate_amount =
      parseInt(required_workers) * parseInt(payable_amount);
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { data } = await axiosSecure.post(`/delete-task/${id}`);
          await axiosSecure.patch(`/user/${user?.email}?delete=true`, {
            calculate_amount,
          });
          if (data?.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your service has been deleted.",
              icon: "success",
            });
            refetch();
            userRefetch();
          }
        }
      });
    } catch (error) {
      toast.error(error?.response?.data);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="container px-4 mx-auto pt-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">My Tasks</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {tasks.length} Task
        </span>
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
                      <span>Completion Date</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Required Workers</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Payable Amount
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Task Details
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Edit
                    </th>
                  </tr>
                </thead>
                {tasks?.length === 0 ? (
                  <p className="text-center py-4">No my task</p>
                ) : (
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {tasks.map((task) => (
                      <MyTasksTableRow
                        key={task._id}
                        task={task}
                        handleDelete={handleDelete}
                      />
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyTasks;
