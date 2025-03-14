import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { format } from "date-fns";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { FaCoins, FaUser } from "react-icons/fa";
import { useState } from "react";

const TaskDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      payable_amount: parseInt(payable_amount),
      submission_details,
      worker: {
        email: user?.email,
        name: user?.displayName,
      },
      buyer: {
        email: buyer?.email,
        name: buyer?.name,
      },
      submitAt: new Date(),
    };

    setIsSubmitting(true);
    try {
      const data = await axiosSecure.post("/add-submission", submissionData);
      toast.success("Task added successfully");
      navigate("/dashboard/my-submissions");
      setIsSubmitting(false);
    } catch (err) {
      setIsSubmitting(false);
      toast.error(err?.message);
    }
  };

  return (
    <div className="my-5 md:my-10">
      <div className="card lg:card-side bg-base-100 shadow-xl rounded-lg max-w-screen-2xl mx-auto">
      <div className="lg:w-1/2 mt-5">
        <figure>
          <img
            src={photoURL}
            alt="Album"
            className="object-cover w-full h-[500px] rounded-md"
          />
        </figure>
      </div>
      <div className="lg:w-1/2 card-body">
        <p className="flex justify-between gap-4 items-center">
          <span className="bg-teal-100/60 text-teal-600 px-2 rounded-xl">
            Deadline:
            {completion_date && format(new Date(completion_date), "P")}
          </span>
          <span className="flex items-center gap-1 bg-yellow-100/60 text-yellow-600 px-2 rounded-xl">
            <FaUser /> {required_workers}
          </span>
        </p>
        <h2 className="card-title">{task_title}</h2>
        <p>{task_detail}</p>
        <p className="text-gray-600">Buyer: {buyer?.name}</p>
        <p className="text-gray-600 flex items-center gap-2 py-1">
          Earn: <FaCoins /> {payable_amount}
        </p>
        <p className="font-semibold">What you will submit?</p>
        <h2>{submission_info}</h2>

        {/* submission form  */}
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
              className="w-full bg-gray-100 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepTeal focus:border-transparent resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-4 py-2 text-sm rounded-full font-bold border-2  border-deepTeal  ${
                isSubmitting
                  ? "cursor-not-allowed"
                  : "text-deepTeal bg-transparent transition-all ease-in-out duration-300  hover:bg-deepTeal hover:text-white"
              }`}
            >
              {isSubmitting ? (
                <div className="flex justify-center items-center">
                  <span className="loading loading-spinner text-success"></span>
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default TaskDetails;
