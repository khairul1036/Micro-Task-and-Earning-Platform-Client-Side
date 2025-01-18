import { FaQuoteRight, FaStar } from "react-icons/fa";

const TestimonialSlide = ({ image, name, text, hide }) => {
  return (
    <div
      className={`${hide} md:block shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] lg:p-8 p-4 rounded-md bg-white relative`}
    >
      <div className="bg-deepTeal flex items-center justify-center w-12 h-12 max-lg:w-10 max-lg:h-10 rounded-full absolute -top-5 -right-5">
        {/* You can replace this section with an icon if necessary */}
        <span className="text-white text-lg">
          <FaQuoteRight />
        </span>
      </div>

      <div className="flex items-center">
        <img
          src={image}
          className="w-14 h-14 rounded-full shadow-xl border-2 border-white"
          alt="Profile"
        />

        <div className="ml-4">
          <h6 className="text-sm font-semibold">{name}</h6>
          <div className="flex space-x-1 mt-2">
            {/* Using React Icons for Star ratings */}
            <FaStar className="w-3.5 h-3.5 text-yellow-500" />
            <FaStar className="w-3.5 h-3.5 text-yellow-500" />
            <FaStar className="w-3.5 h-3.5 text-yellow-500" />
            <FaStar className="w-3.5 h-3.5 text-[#CED5D8]" />
            <FaStar className="w-3.5 h-3.5 text-[#CED5D8]" />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default TestimonialSlide;
