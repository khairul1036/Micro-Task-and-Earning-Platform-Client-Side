import { useState } from "react";
import FetchData from "../../hooks/FetchData";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const WithDrawals = () => {
  const { users } = FetchData();
  const axiosSecure = useAxiosSecure();
  const [coinsToWithdraw, setCoinsToWithdraw] = useState(0);
  const [paymentSystem, setPaymentSystem] = useState("");
  const navigate = useNavigate();

  // Calculate the withdrawal amount in dollars
  const withdrawAmount = coinsToWithdraw / 20;

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const accountNumber = e.target.accountNumber.value;

    const formData = {
      worker_email: users?.email,
      worker_name: users?.name,
      withdrawal_coin: parseInt(coinsToWithdraw),
      withdrawal_amount: parseFloat(withdrawAmount).toFixed(1),
      payment_system: paymentSystem,
      account_number: accountNumber,
      withdraw_date: new Date(),
    };

    try {
      const { data } = await axiosSecure.post("/withdraw", formData);
      toast.success("Withdraw requested success!!");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err?.message);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Withdrawal Form
      </h2>

      {/* User's total earnings */}
      <div className="text-center mb-4">
        <p className="text-lg font-medium">Your Total Coins: {users?.coins}</p>
        <p className="text-lg font-medium">
          Your Withdrawable Amount: ${users?.coins / 20}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Coin to Withdraw */}
        <div>
          <label
            htmlFor="coinsToWithdraw"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Coin to Withdraw
          </label>
          <input
            type="number"
            id="coinsToWithdraw"
            onChange={(e) => setCoinsToWithdraw(e.target.value)}
            min={0}
            max={users?.coins}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter number of coins"
          />
        </div>

        {/* Withdraw Amount ($) */}
        <div>
          <label
            htmlFor="withdrawAmount"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Withdraw Amount ($)
          </label>
          <input
            type="number"
            id="withdrawAmount"
            value={withdrawAmount}
            readOnly
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Select Payment System */}
        <div>
          <label
            htmlFor="paymentSystem"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Select Payment System
          </label>
          <select
            id="paymentSystem"
            value={paymentSystem}
            onChange={(e) => setPaymentSystem(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Payment System</option>
            <option value="Bkash">Bkash</option>
            <option value="Rocket">Rocket</option>
            <option value="Nagad">Nagad</option>
          </select>
        </div>

        {/* Account Number */}
        <div>
          <label
            htmlFor="accountNumber"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Account Number
          </label>
          <input
            type="text"
            id="accountNumber"
            name="accountNumber"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter account number"
          />
        </div>

        {/* Withdraw Button */}
        <div className="text-center">
          {coinsToWithdraw >= 200 ? (
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Withdraw
            </button>
          ) : (
            <p className="text-red-500 text-sm mt-2">
              Insufficient coins. You need at least 200 coins.
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default WithDrawals;
