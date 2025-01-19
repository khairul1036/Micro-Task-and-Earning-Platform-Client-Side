import React from "react";
import HeroSection from "./HeroSection";
import BestWorkers from "./BestWorkers";
import Testimonial from "./Testimonial";
import EarningOpportunities from "./EarningOpportunities";
import HowToEarn from "./HowToEarn";
import HowItWorks from "./HowItWorks";
import CallToActionSection from "./CallToActionSection";
import HelmetTitle from "../Share/HelmetTitle";

const Home = () => {
  return (
    <>
      <HelmetTitle favTitle={"Home || TaskEarn"} />
      {/* hero section  */}
      <div>
        <HeroSection />
      </div>
      <div className="max-w-screen-2xl mx-auto">
        <BestWorkers />
      </div>
      <HowToEarn />
      <div className="max-w-screen-2xl mx-auto">
        <Testimonial />
      </div>
      <EarningOpportunities />
      <div className="max-w-screen-2xl mx-auto">
        <HowItWorks />
      </div>
      <CallToActionSection />
    </>
  );
};

export default Home;
