import React from "react";
import SectionTitle from "../Share/SectionTitle";

const HowToEarn = () => {
  return (
    <>
      <div className="bg-gray-100 pb-16">
        <div className="max-w-screen-2xl mx-auto">
          <SectionTitle
            subTitle={"Earnings"}
            title={"Learn How to Maximize Your Earnings"}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-5 pt-10">
            {/* Left Side: YouTube Video */}
            <div className="flex justify-center items-center">
              <iframe
                className="w-[560px] h-[190px] md:h-[315px] rounded-xl shadow-2xl"
                src="https://www.youtube.com/embed/Um_AfOK27Bk?si=BNKJGXa6LpQwxC7r"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>

            {/* Right Side: Text */}
            <div className="lg:w-10/12 flex flex-col justify-center">
              <h3 className="text-lg md:text-2xl font-semibold text-gray-800">
                Learn How to Maximize Your Earnings
              </h3>
              <p className="text-base md:text-lg text-gray-600 mt-2 md:mt-4">
                In this video, we’ll guide you step-by-step on how to get the
                most out of your time on our platform. Learn how to find
                high-paying tasks, use the filters effectively, and optimize
                your workflow for faster earnings. Whether you're a beginner or
                an experienced worker, this video will provide valuable tips to
                boost your income.
              </p>

              <div className="mt-3 md:mt-6">
                <p className="text-gray-600">
                  Don't miss out on the opportunity to earn more! Watch this
                  video to uncover the best strategies for success. After
                  watching, you'll be ready to take on tasks that align with
                  your skills and goals. Start earning today and make the most
                  of your time with us!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToEarn;
