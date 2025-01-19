import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { imageUpload } from "../../api/utils";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateMyTask = () => {
  const { id } = useParams(); // Get task ID from the URL
  const [startDate, setStartDate] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [taskData, setTaskData] = useState({});
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // Fetch existing task data
    const fetchTask = async () => {
      try {
        const response = await axiosSecure.get(`/tasks/${id}`);
        const task = response.data;
        setTaskData(task);
        setStartDate(new Date(task.completion_date));
        // Pre-fill form fields with existing task data
        for (let key in task) {
          setValue(key, task[key]);
        }
      } catch (err) {
        console.error("Error fetching task:", err);
      }
    };
    fetchTask();
  }, [id, axiosSecure, setValue]);

  const onSubmit = async (data) => {
    const {
      task_title,
      submission_info,
      payable_amount,
      required_workers,
      task_detail,
      task_image_url,
    } = data;

    const calculate_amount =
      parseInt(required_workers) * parseInt(payable_amount);

    // Ensure to deduct coins correctly
    if (calculate_amount > parseInt(taskData?.buyer?.coins)) {
      toast.error("Not enough coins. Please purchase more coins.");
      navigate("/"); // Navigate to purchase page
      return;
    }

    let photoURL = taskData.photoURL;
    if (task_image_url && task_image_url[0]) {
      photoURL = await imageUpload(task_image_url[0]);
    }

    const formData = {
      task_title,
      task_detail,
      submission_info,
      completion_date: startDate,
      payable_amount,
      required_workers,
      total_payable_amount: calculate_amount,
      photoURL,
      buyer: {
        email: user?.email,
        name: user?.displayName,
        photoURL,
      },
    };

    setIsSubmitting(true);
    try {
      await axiosSecure.put(`/tasks/${id}`, formData);
      toast.success("Task updated successfully");
      navigate("/dashboard/my-task");
      setIsSubmitting(false);
    } catch (err) {
      setIsSubmitting(false);
      toast.error(err?.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Update Task</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Task Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Task Title</label>
          <input
            type="text"
            {...register("task_title", { required: "Task title is required" })}
            className="w-full p-2 border rounded bg-gray-100"
            defaultValue={taskData.task_title}
          />
          {errors.task_title && (
            <p className="text-red-500 text-sm">{errors.task_title.message}</p>
          )}
        </div>

        {/* Task Detail */}
        <div>
          <label className="block text-sm font-medium mb-1">Task Detail</label>
          <textarea
            {...register("task_detail", {
              required: "Task detail is required",
            })}
            className="w-full p-2 border rounded bg-gray-100"
            rows="4"
            defaultValue={taskData.task_detail}
          />
          {errors.task_detail && (
            <p className="text-red-500 text-sm">{errors.task_detail.message}</p>
          )}
        </div>

        {/* Required Workers */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Required Workers
          </label>
          <input
            type="number"
            {...register("required_workers", {
              required: "Number of workers is required",
              min: 1,
            })}
            disabled={true}
            className="w-full hover:cursor-not-allowed p-2 border rounded bg-gray-100"
            defaultValue={taskData.required_workers}
          />
          {errors.required_workers && (
            <p className="text-red-500 text-sm">
              {errors.required_workers.message}
            </p>
          )}
        </div>

        {/* Payable Amount */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Payable Amount
          </label>
          <input
            type="number"
            {...register("payable_amount", {
              required: "Payable amount is required",
              min: 1,
            })}
            disabled={true}
            className="w-full hover:cursor-not-allowed p-2 border rounded bg-gray-100"
            defaultValue={taskData.payable_amount}
          />
          {errors.payable_amount && (
            <p className="text-red-500 text-sm">
              {errors.payable_amount.message}
            </p>
          )}
        </div>

        {/* Completion Date */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Completion Date
          </label>
          <DatePicker
            disabled={true}
            className="border p-2 hover:cursor-not-allowed rounded-md bg-white text-gray-800"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          {errors.completion_date && (
            <p className="text-red-500 text-sm">
              {errors.completion_date.message}
            </p>
          )}
        </div>

        {/* Submission Info */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Submission Info
          </label>
          <textarea
            {...register("submission_info", {
              required: "Submission info is required",
            })}
            className="w-full p-2 border rounded bg-gray-100"
            rows="2"
            defaultValue={taskData.submission_info}
          />
          {errors.submission_info && (
            <p className="text-red-500 text-sm">
              {errors.submission_info.message}
            </p>
          )}
        </div>

        {/* Task Image URL */}
        <div>
          <label className="block text-sm font-medium mb-1">Task Image</label>
          <input
            disabled={true}
            type="file"
            accept=".png,.jpg,.jpeg"
            {...register("task_image_url")}
            className="w-full hover:cursor-not-allowed p-2 border rounded"
          />
        </div>

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
            "Update Task"
          )}
        </button>
      </form>
    </div>
  );
};

export default UpdateMyTask;
