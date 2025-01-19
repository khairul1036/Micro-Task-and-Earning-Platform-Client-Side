import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { imageUpload } from "../../api/utils";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import FetchData from "../../hooks/FetchData";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { users } = FetchData();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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

    // the coin validation
    if (calculate_amount > parseInt(users?.coins)) {
      toast.error("Not available Coin.  Purchase Coin ");
      navigate("/dashboard/purchase-coin"); // navigate to purchase page
      return;
    }

    setIsSubmitting(true);
    const photoURL = await imageUpload(task_image_url[0]);
    const formData = {
      task_title,
      task_detail,
      submission_info,
      completion_date: startDate,
      payable_amount: parseInt(payable_amount),
      required_workers: parseInt(required_workers),
      total_payable_amount: calculate_amount,
      photoURL,
      buyer: {
        email: user?.email,
        name: user?.displayName,
        photoURL,
      },
    };
    try {
      const data = await axiosSecure.post("/add-task", formData);
      await axiosSecure.patch(`/user/update/${user?.email}`, {
        calculate_amount,
      });
      reset();
      toast.success("Task added successfully");
      navigate("/dashboard/my-task");
      setIsSubmitting(false);
    } catch (err) {
      setIsSubmitting(false);
      toast.error(err?.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded shadow-lg my-5">
      <h2 className="text-2xl font-bold mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Task Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Task Title</label>
          <input
            type="text"
            {...register("task_title", { required: "Task title is required" })}
            className="w-full p-2 border rounded bg-gray-100"
            placeholder="Ex: Watch my YouTube video and make a comment"
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
            placeholder="Detailed description of the task"
          ></textarea>
          {errors.task_detail && (
            <p className="text-red-500 text-sm">{errors.task_detail.message}</p>
          )}
        </div>

        <div className="md:flex justify-between items-center gap-5">
          {/* Required Workers */}
          <div className="w-full">
            <label className="block text-sm font-medium mb-1">
              Required Workers
            </label>
            <input
              type="number"
              {...register("required_workers", {
                required: "Number of workers is required",
                min: 1,
              })}
              className="w-full p-2 border rounded bg-gray-100"
              placeholder="Ex: 100"
            />
            {errors.required_workers && (
              <p className="text-red-500 text-sm">
                {errors.required_workers.message}
              </p>
            )}
          </div>

          {/* Payable Amount */}
          <div className="w-full">
            <label className="block text-sm font-medium mb-1">
              Payable Amount
            </label>
            <input
              type="number"
              {...register("payable_amount", {
                required: "Payable amount is required",
                min: 1,
              })}
              className="w-full p-2 border rounded bg-gray-100"
              placeholder="Ex: 10"
            />
            {errors.payable_amount && (
              <p className="text-red-500 text-sm">
                {errors.payable_amount.message}
              </p>
            )}
          </div>
        </div>

        <div className="md:flex justify-between items-center">
          {/* Completion Date */}
          <div className="w-full">
            <label className="block text-sm font-medium mb-1">
              Completion Date
            </label>
            {/* Date Picker Input Field */}
            <div className="z-0">
              <DatePicker
                className="w-full border p-2 rounded-md bg-white text-gray-800"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            {errors.completion_date && (
              <p className="text-red-500 text-sm">
                {errors.completion_date.message}
              </p>
            )}
          </div>

          {/* Task Image URL */}
          <div className="w-full">
            <label className="block text-sm font-medium mb-1">Task Image</label>
            <input
              type="file"
              accept=".png,.jpg,.jpeg"
              {...register("task_image_url", {
                required: "Task image is required",
              })}
              className="w-full p-2 border rounded"
            />
            {errors.task_image_url && (
              <p className="text-red-500 text-sm">
                {errors.task_image_url.message}
              </p>
            )}
          </div>
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
            rows="3"
            placeholder="What to submit, like screenshot or proof"
          ></textarea>
          {errors.submission_info && (
            <p className="text-red-500 text-sm">
              {errors.submission_info.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
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
      </form>
    </div>
  );
};

export default AddTask;
