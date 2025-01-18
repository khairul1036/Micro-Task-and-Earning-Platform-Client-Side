import React from "react";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="mt-10 md:mt-16 lg:mt-20 text-center">
      <h1 className="text-xl md:text-3xl font-bold text-gray-800">{title}</h1>
      <p className="text-sm md:text-base px-5 text-gray-600 py-2">{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
