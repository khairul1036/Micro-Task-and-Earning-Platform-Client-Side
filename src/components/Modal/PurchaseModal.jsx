import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../Form/CheckoutForm';
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const PurchaseModal = ({ selectedPackage, closeModal }) => {
  if (!selectedPackage) return null;

  const { name, coins, price } = selectedPackage;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Purchase Details</h2>
          <button onClick={closeModal} className="text-gray-600 hover:text-gray-800">
            <span className="text-xl">&times;</span>
          </button>
        </div>
        <div className="mt-4">
          <p className="text-xl font-semibold">Package: {name}</p>
          <p className="text-lg mt-2">Coins: {coins}</p>
          <p className="text-lg mt-2">Price: ${price}</p>
        </div>

        {/* checkoutForm */}
        <Elements stripe={stripePromise}>
            <CheckoutForm closeModal={closeModal} selectedPackage={selectedPackage}/>
        </Elements>
      </div>
    </div>
  );
};

export default PurchaseModal;
