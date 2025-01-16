import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { format } from "date-fns";

const TaskList = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allTask = [] } = useQuery({
    queryKey: ["allTask"],
    queryFn: async () => {
      const { data } = await axiosSecure("/all-tasks");
      return data;
    },
  });

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Available Tasks
      </h2>

      {/* Task Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allTask.map((task) => (
          <div key={task._id} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {task.task_title}
            </h3>
            <p className="text-gray-600">Buyer: {task?.buyer?.name}</p>
            <p className="text-gray-600">
              Completion Date: {format(new Date(task?.completion_date), "P")}
            </p>
            <p className="text-gray-600">
              Payable Amount: ${task.payable_amount}
            </p>
            <p className="text-gray-600">
              Required Workers: {task.required_workers}
            </p>
            <div className="mt-4">
              <Link
                to={`/dashboard/task-details/${task._id}`}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
