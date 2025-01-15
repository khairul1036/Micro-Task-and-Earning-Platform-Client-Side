import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

// {
//     "_id": "6787e3002f389ee596a84d59",
//     "task_id": "6787a6c808435aec5b67d2b2",
//     "task_title": "Exercitation aut aut",
//     "payable_amount": "1",
//     "submission_details": "submit, Repellendus Consequ",
//     "worker": {
//       "email": "t@t.com"
//     },
//     "buyer": {
//       "email": "khairul4102.bd@gmail.com",
//       "name": "Khairul Islam"
//     },
//     "submitAt": "2025-01-15T16:32:00.270Z",
//     "status": "Pending"
//   }

const MySubmissionTableRow = ({ mySubmission }) => {
  const {
    task_title,
    submitAt,
    payable_amount,
    buyer,
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
        {buyer?.name}
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
