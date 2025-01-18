import React from "react";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="mt-10 md:mt-16 lg:mt-20 text-center">
      <p className="divider w-48 md:w-96 mx-auto text-gray-500">{subTitle}</p>
      <h1 className="text-xl md:text-3xl font-bold text-gray-800">{title}</h1>
    </div>
  );
};

export default SectionTitle;
