import React, { useState, useEffect } from 'react';

const PaymentHistory = () => {
  // Mock payment data
  const [payments, setPayments] = useState([]);
  
  // Fetch payment history on component mount
  useEffect(() => {
    // In a real-world scenario, fetch this data from an API
    const fetchedPayments = [
      { id: 1, date: '2025-01-01', amount: 10, method: 'Credit Card', status: 'Completed' },
      { id: 2, date: '2025-01-05', amount: 25, method: 'PayPal', status: 'Completed' },
      { id: 3, date: '2025-01-10', amount: 50, method: 'Debit Card', status: 'Pending' },
      { id: 4, date: '2025-01-12', amount: 100, method: 'Bank Transfer', status: 'Completed' },
    ];
    setPayments(fetchedPayments);
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Payment History</h2>
      
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-2 border text-left">Payment ID</th>
              <th className="px-4 py-2 border text-left">Date</th>
              <th className="px-4 py-2 border text-left">Amount</th>
              <th className="px-4 py-2 border text-left">Payment Method</th>
              <th className="px-4 py-2 border text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border">{payment.id}</td>
                <td className="px-4 py-2 border">{payment.date}</td>
                <td className="px-4 py-2 border">${payment.amount}</td>
                <td className="px-4 py-2 border">{payment.method}</td>
                <td className="px-4 py-2 border">{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
