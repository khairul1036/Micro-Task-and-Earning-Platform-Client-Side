import React from "react";
import {
  FaClipboardList,
  FaKeyboard,
  FaPen,
  FaPaintBrush,
} from "react-icons/fa"; // Importing icons from react-icons

const EarningOpportunities = () => {
  // Categories data
  const categories = [
    {
      icon: <FaClipboardList />,
      title: "Take Surveys",
      description:
        "Share your opinion and get paid for completing short surveys. Earn coins easily and quickly with minimal effort.",
    },
    {
      icon: <FaKeyboard />,
      title: "Data Entry Tasks",
      description:
        "Help businesses organize and input data. This is a perfect option for those who are detail-oriented and fast typists.",
    },
    {
      icon: <FaPen />,
      title: "Content Writing",
      description:
        "Write blog posts, articles, or web content. If you have a passion for writing, this category offers a variety of tasks at great rates.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Graphic Design",
      description:
        "Create stunning designs, logos, and banners. If you have a creative flair, design tasks are a rewarding way to earn.",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto p-6">
      {/* Main heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">
          Explore Earning Opportunities
        </h2>
        <p className="text-gray-600 mt-2">
          Discover a wide range of tasks to suit your skills and interests. From
          data entry to creative design, there's something for everyone!
        </p>
      </div>

      {/* Flex container for left content and right image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side: Categories and content */}
        <div>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-md shadow-lg cursor-pointer"
              >
                <div className="flex items-center justify-center bg-blue-100 p-4 rounded-full mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {category.title}
                </h3>
                <p className="text-gray-600 mt-2">{category.description}</p>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-12">
            <button className="py-3 px-8 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all">
              Browse Tasks
            </button>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="flex items-center justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKCiI3b-SinXJ4fLxKgmKK3UkzGqzKA6yEiQ&s" // Replace with your image source
            alt="Earning Opportunities"
            className="w-full max-w-md rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default EarningOpportunities;
