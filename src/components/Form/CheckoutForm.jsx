import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import "./CheckoutForm.css";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ closeModal, selectedPackage }) => {
  const [clientSecret, setClientSecret] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { coins, price } = selectedPackage;
  const { user } = useAuth();
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", selectedPackage).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure, selectedPackage]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    setIsSubmitting(true);
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setErr(error.message);
    } else {
      setErr("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      setIsSubmitting(false);
      setErr(confirmError);
    } else {
      setErr("");
      if (paymentIntent.status === "succeeded") {
        // save the payment info in the database
        const payment = {
          email: user?.email,
          name: user?.displayName,
          transactionId: paymentIntent.id,
          price,
          date: new Date(),
          coins,
        };
        const res = await axiosSecure.post("/payments", payment);
        toast.success("Payment Success!!");
        navigate("/dashboard/payment-history");
        setIsSubmitting(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />

      <div className="mt-6 flex justify-between">
        <button
          onClick={closeModal}
          className="px-4 py-2 rounded-full bg-red-500 text-red-500 hover:text-white border-2 transition-all ease-in-out duration-300  border-red-500 bg-transparent hover:bg-red-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className={`px-4 py-2 text-sm rounded-full font-bold border-2  border-deepTeal  ${
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
            "Pay Now"
          )}
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
