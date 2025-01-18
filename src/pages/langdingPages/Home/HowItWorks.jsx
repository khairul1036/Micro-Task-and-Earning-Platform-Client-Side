import {
  FaCogs,
  FaShieldAlt,
  FaHeadset,
  FaRocket,
  FaSyncAlt,
  FaSearchPlus,
  FaUserPlus,
  FaCheck,
  FaTasks,
} from "react-icons/fa";
import { BsCurrencyExchange } from "react-icons/bs";

const HowItWorks = () => {
  return (
    <div className="bg-deepTeal py-12 px-4 lg:rounded-xl">
      <div className="max-w-7xl mx-auto">
        <p className="divider w-48 md:w-96 mx-auto text-white">How it works</p>
        <h2 className="text-white sm:text-4xl text-2xl font-bold text-center mb-5 md:mb-16">
          How You Can Start Earning Instantly
        </h2>

        <div className="flex flex-col md:flex-row justify-center">
          <div className="md:pr-5 lg:pr-40">
            <h1 className="md:text-2xl text-white font-semibold pb-5">
              1. For Worker
            </h1>
            <div className="rounded-xl group py-2 md:p-8 text-center hover:bg-white text-white hover:text-deepTeal hover:shadow-xl transition duration-300">
              <FaUserPlus className="text-3xl md:mb-6 inline-block" />

              <h3 className="text-xl font-semibold md:mb-3">Register</h3>
              <p className="text-gray-300 group-hover:text-gray-500 text-sm">
                sign uo to start earning.
              </p>
            </div>

            <div className="rounded-xl group py-2 md:p-8 text-center hover:bg-white text-white hover:text-deepTeal hover:shadow-xl transition duration-300">
              <FaTasks className="text-3xl md:mb-6 inline-block" />
              <h3 className="text-xl font-semibold md:mb-3">Complete Task</h3>
              <p className="text-gray-300 group-hover:text-gray-500 text-sm">
                Find tasks that match your skills.
              </p>
            </div>
            <div className="rounded-xl group py-2 md:p-8 text-center hover:bg-white text-white hover:text-deepTeal hover:shadow-xl transition duration-300">
              <BsCurrencyExchange className="text-3xl md:mb-6 inline-block" />
              <h3 className="text-xl font-semibold md:mb-3">Earn Rewards</h3>
              <p className="text-gray-300 group-hover:text-gray-500 text-sm">
                Submit your work and get paid.
              </p>
            </div>
          </div>

          <div className="md:border-l md:pl-5 lg:pl-40">
            <h1 className="md:text-2xl text-white font-semibold pt-5 md:pt-0 pb-5">
              2. For Buyer
            </h1>
            <div className="rounded-xl group py-2 md:p-8 text-center hover:bg-white text-white hover:text-deepTeal hover:shadow-xl transition duration-300">
              <FaTasks className="text-3xl md:mb-6 inline-block" />
              <h3 className="text-xl font-semibold md:mb-3">Post Tasks</h3>
              <p className="text-gray-300 group-hover:text-gray-500 text-sm">
                Create tasks for workers.
              </p>
            </div>

            <div className="rounded-xl group py-2 md:p-8 text-center hover:bg-white text-white hover:text-deepTeal hover:shadow-xl transition duration-300">
              <FaCheck className="text-3xl md:mb-6 inline-block" />
              <h3 className="text-xl font-semibold md:mb-3">
                Review Submissions
              </h3>
              <p className="text-gray-300 group-hover:text-gray-500 text-sm">
                Review and approve works.
              </p>
            </div>
            <div className="rounded-xl group py-2 md:p-8 text-center hover:bg-white text-white hover:text-deepTeal hover:shadow-xl transition duration-300">
              <BsCurrencyExchange className="text-3xl md:mb-6 inline-block" />
              <h3 className="text-xl font-semibold md:mb-3">Make Payments</h3>
              <p className="text-gray-300 group-hover:text-gray-500 text-sm">
                Pay for completed tasks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
