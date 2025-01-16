import { format } from "date-fns";

const PaymentHistoryTableRow = ({ payment }) => {
  const { name, transactionId, price, coins, date } = payment;
  return (
    <tr>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {name}
      </td>

      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {transactionId}
      </td>

      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {price}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
        {coins}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {format(new Date(date), "P")}
      </td>
    </tr>
  );
};

export default PaymentHistoryTableRow;
