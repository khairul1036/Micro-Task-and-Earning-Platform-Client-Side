import React from "react";
import HeroSection from "./HeroSection";
import BestWorkers from "./BestWorkers";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      {/* hero section  */}
      <div>
        <HeroSection />
      </div>
      <div className="max-w-screen-2xl mx-auto">
        <BestWorkers />
        <Testimonial/>
      </div>
    </>
  );
};

export default Home;
