import { format } from "date-fns";
import React from "react";

const MySubmissionTableRow = ({ mySubmission }) => {
  const {
    task_title,
    submitAt,
    payable_amount,
    buyerName,
    submission_details,
    status,
  } = mySubmission;
  return (
    <tr>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {task_title}
      </td>

      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {submitAt ? format(new Date(submitAt), "P") : "N/A"}
      </td>

      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        ${payable_amount}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {buyerName}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {submission_details.substring(0,20)}...
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <p
            className={`px-3 py-1 ${status === 'Pending' ?  'text-yellow-500 bg-yellow-100/60' :  'text-green-500 bg-green-100/60'} text-xs  rounded-full`}
          >
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
};

export default MySubmissionTableRow;
