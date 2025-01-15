import React from "react";

const PurchaseCoin = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Package 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Basic Package
          </h2>
          <div className="text-4xl font-bold text-blue-600 mb-4">10 Coins</div>
          <div className="text-xl font-semibold text-gray-500 mb-4">$1</div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
            Buy Now
          </button>
        </div>

        {/* Package 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Standard Package
          </h2>
          <div className="text-4xl font-bold text-blue-600 mb-4">50 Coins</div>
          <div className="text-xl font-semibold text-gray-500 mb-4">$5</div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
            Buy Now
          </button>
        </div>

        {/* Package 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Premium Package
          </h2>
          <div className="text-4xl font-bold text-blue-600 mb-4">100 Coins</div>
          <div className="text-xl font-semibold text-gray-500 mb-4">$10</div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
            Buy Now
          </button>
        </div>

        {/* Package 4 */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Deluxe Package
          </h2>
          <div className="text-4xl font-bold text-blue-600 mb-4">200 Coins</div>
          <div className="text-xl font-semibold text-gray-500 mb-4">$20</div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCoin;
