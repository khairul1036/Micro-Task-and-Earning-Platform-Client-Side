import { FaAngleDoubleRight } from "react-icons/fa";

const CallToActionSection = () => {
  return (
    <div className="px-6 py-16 bg-gradient-to-t from-gray-200 via-gray-50 to-gray-50">
      <div className="text-center max-w-3xl max-md:max-w-md mx-auto">
        <p className="divider w-48 md:w-96 mx-auto text-gray-600">Updates</p>

        <h2 className="md:w-3/4 mx-auto text-gray-800 md:text-3xl text-xl font-extrabold">
          Get the Latest News and Earning Opportunities
        </h2>
        <div className="mt-8">
          <p className="text-base text-gray-500 leading-relaxed">
            Sign up to receive task alerts, tips, and exclusive offers straight
            to your inbox. Stay ahead and maximize your earnings!
          </p>
        </div>

        <div className="bg-white mt-12 flex px-1 py-1.5 rounded-full shadow-[0_5px_22px_-8px_rgba(93,96,127,0.2)] md:w-4/5 mx-auto overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full outline-none bg-white pl-4 text-gray-800 text-sm"
          />
          <button
            type="button"
            className="bg-deepTeal hover:bg-deepTeal transition-all text-white text-sm rounded-full px-4 py-2.5"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
