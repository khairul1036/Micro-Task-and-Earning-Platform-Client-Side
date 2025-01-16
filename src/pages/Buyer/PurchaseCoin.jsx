import React, { useState } from "react";
import PurchaseModal from "../../components/Modal/PurchaseModal";

const PurchaseCoin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    { name: "Basic Package", coins: 10, price: 1 },
    { name: "Standard Package", coins: 100, price: 10 },
    { name: "Premium Package", coins: 500, price: 50 },
    { name: "Deluxe Package", coins: 1000, price: 100 },
  ];

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{pkg.name}</h2>
            <div className="text-4xl font-bold text-blue-600 mb-4">{pkg.coins} Coins</div>
            <div className="text-xl font-semibold text-gray-500 mb-4">${pkg.price}</div>
            <button
              onClick={() => openModal(pkg)}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <PurchaseModal
          selectedPackage={selectedPackage}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default PurchaseCoin;
