import React from "react";
import {
  FaClipboardList,
  FaKeyboard,
  FaPen,
  FaPaintBrush,
} from "react-icons/fa"; // Importing icons from react-icons
import SectionTitle from "../Share/SectionTitle";

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
    <section>
      <SectionTitle
        subTitle={"Opportunities"}
        title={"Explore Earning Opportunities"}
      />

      {/* Flex container for left content */}
      <div
        className="bg-cover bg-center bg-fixed my-10"
        style={{
          backgroundImage:
            'url("https://www.shutterstock.com/image-photo/business-performance-checklist-businessman-conducting-600nw-2343237329.jpg")',
        }}
      >
        {/* Left side: Categories and content */}
        <div className="bg-gray-800 bg-opacity-80">
          <div className="max-w-screen-2xl mx-auto grid sm:grid-cols-2 md:grid-cols-2 gap-6 px-5 py-10">
            {categories.map((category, index) => (
              <div
                key={index}
                className="p-6 rounded-md cursor-pointer hover:text-white text-gray-800 bg-white hover:bg-deepTeal transition duration-300 transform hover:scale-105"
              >
                <span className="flex w-12 bg-teal-600 text-white p-4 rounded-full mb-4">
                  {category.icon}
                </span>
                <h3 className="text-xl font-semibold">{category.title}</h3>
                <p className="mt-2">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningOpportunities;
