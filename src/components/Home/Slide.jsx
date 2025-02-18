/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Slide = ({ videoUrl, heading, text }) => {
  return (
    <div className="relative w-full h-[20rem] md:h-[38rem]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-gray-900/70">
        <div className="text-center">
          <div>
            <h1 className="text-2xl font-semibold text-white lg:text-4xl pb-2">
              {heading}
            </h1>
            <p className="text-sm text-white lg:text-lg px-5">{text}</p>
          </div>
          <br />
          <Link to={"/tasklist"} className="flex justify-center">
            <button className="flex items-center gap-2 px-5 py-4 mt-4 text-sm font-medium text-white bg-deepTeal hover:bg-teal-700 capitalize transition-colors duration-300 transform rounded-md lg:w-auto focus:outline-none focus:bg-gray-500">
              Find Task <FaArrowRight className="text-xl" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
