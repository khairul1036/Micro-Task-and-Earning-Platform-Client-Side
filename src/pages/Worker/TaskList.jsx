import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { format } from "date-fns";
import Loading from "../../components/Loading";
import { FaCoins, FaUser } from "react-icons/fa";

const TaskList = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allTask = [], isLoading } = useQuery({
    queryKey: ["allTask"],
    queryFn: async () => {
      const { data } = await axiosSecure("/all-tasks");
      return data;
    },
  });

  const [sortOrder, setSortOrder] = useState("asc"); // Default sorting: ascending

  // Sorting function
  const sortedTasks = [...allTask].sort((a, b) => {
    return sortOrder === "asc"
      ? a.payable_amount - b.payable_amount
      : b.payable_amount - a.payable_amount;
  });

  if (isLoading) return <Loading />;

  return (
    <div className="max-w-screen-2xl mx-auto py-8 px-5">
      {allTask?.length === 0 ? (
        <p className="flex justify-center">No Task Available</p>
      ) : (
        <>
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 pb-5 md:pb-0">
              Available Tasks
            </h2>
            {/* Sorting Dropdown */}
            <select
              className="px-4 py-2 border rounded-md"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">Sort by Price: Low to High</option>
              <option value="desc">Sort by Price: High to Low</option>
            </select>
          </div>

          {/* Task Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedTasks.map((task) => (
              <div
                key={task._id}
                className="bg-white rounded-lg p-6 transition-all ease-in-out duration-300 hover:border hover:border-deepTeal hover:scale-105"
              >
                <p className="flex justify-between items-center">
                  <span className="bg-teal-100/60 text-teal-600 px-2 rounded-xl">
                    Deadline: {task?.completion_date && format(new Date(task?.completion_date), "P")}
                  </span>
                  <span className="flex items-center gap-1 bg-yellow-100/60 text-yellow-600 px-2 rounded-xl">
                    <FaUser /> {task.required_workers}
                  </span>
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {task.task_title}
                </h3>
                <p className="text-gray-600">Buyer: {task?.buyer?.name}</p>

                <p className="text-gray-600 flex items-center gap-2 py-1">
                  Earn: <FaCoins /> {task.payable_amount}
                </p>

                <Link to={`/task-details/${task._id}`}>
                  <button className="w-full px-4 py-2 mt-4 text-sm rounded-full font-bold text-deepTeal border-2 border-deepTeal bg-transparent transition-all ease-in-out duration-300 hover:bg-deepTeal hover:text-white">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TaskList;
