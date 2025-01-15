import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { format } from "date-fns";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const TaskDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: task = {} } = useQuery({
    queryKey: ["task", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/tasks/${id}`);
      return data;
    },
  });

  const {
    _id,
    task_title,
    task_detail,
    submission_info,
    completion_date,
    payable_amount,
    required_workers,
    total_payable_amount,
    photoURL,
    buyer,
  } = task;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submission_details = e.target.submission_details.value;
    const submissionData = {
      task_id: _id,
      task_title,
      payable_amount,
      submission_details,
      worker: {
        email: user?.email,
        name: user?.name,
      },
      buyer: {
        email: buyer?.email,
        name: buyer?.name,
      },
      submitAt: new Date(),
    };

    console.log(submissionData);

    try {
      const data = await axiosSecure.post("/add-submission", submissionData);
      toast.success("Task added successfully");
    //   navigate("/dashboard/my-task");
    } catch (err) {
      toast.error(err?.message);
      console.log(err);
    }
  };

  return (
    <div className="container mx-auto p-8">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-semibold text-gray-800">{task_title}</h1>
        <p className="text-lg text-gray-600">{buyer?.name}</p>
      </div>

      {/* Task Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img
            src={photoURL}
            alt="image"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-6"
          />
        </div>
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Task Details
            </h2>
            <p className="text-gray-600 mb-4">{task_detail}</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-gray-500">Submission Info</p>
                <p className="text-lg font-medium">{submission_info}</p>
              </div>
              <div>
                <p className="text-gray-500">Completion Date</p>
                <p className="text-lg font-medium">
                  {completion_date
                    ? format(new Date(completion_date), "P")
                    : "N/A"}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-gray-500">Payable Amount</p>
                <p className="text-lg font-medium">${payable_amount}</p>
              </div>
              <div>
                <p className="text-gray-500">Required Workers</p>
                <p className="text-lg font-medium">{required_workers}</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-500">Total Payable Amount</p>
              <p className="text-lg font-semibold text-green-600">
                ${total_payable_amount}
              </p>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* submission_Details */}
        <div className="mb-6">
          <label
            htmlFor="submission_details"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Submission Details
          </label>
          <textarea
            id="submission_details"
            name="submission_details"
            rows="4"
            placeholder="Enter submission details..."
            className="w-full bg-gray-100 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskDetails;
