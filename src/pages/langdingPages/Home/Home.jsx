import React from "react";
import HeroSection from "./HeroSection";
import BestWorkers from "./BestWorkers";
import Testimonial from "./Testimonial";
import EarningOpportunities from "./EarningOpportunities";
import HowToEarn from "./HowToEarn";

const Home = () => {
  return (
    <>
      {/* hero section  */}
      <div>
        <HeroSection />
      </div>
      <div className="max-w-screen-2xl mx-auto">
        <BestWorkers />
        <Testimonial />
        <EarningOpportunities />
      </div>
      <HowToEarn />
    </>
  );
};

export default Home;
